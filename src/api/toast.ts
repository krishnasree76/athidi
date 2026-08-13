import { createServerFn } from "@tanstack/react-start";
import { type MenuCategory, CATEGORIES as FALLBACK_CATEGORIES } from "@/data/menu";

let cachedToken: string | null = null;
let tokenExpiryTime: number | null = null;

async function getToastToken() {
  if (cachedToken && tokenExpiryTime && Date.now() < tokenExpiryTime) {
    return cachedToken;
  }
  const clientId = process.env.TOAST_CLIENT_ID;
  const clientSecret = process.env.TOAST_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("Toast credentials not found in env");
    return null;
  }

  try {
    const response = await fetch("https://ws-api.toasttab.com/authentication/v1/authentication/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientId, clientSecret, userAccessType: "TOAST_MACHINE_CLIENT" }),
    });

    if (!response.ok) {
      console.error("Toast Auth Failed", await response.text());
      return null;
    }

    const data = await response.json();
    const token = data.token?.access_token || data.token?.accessToken || data.access_token || data.token;
    if (!token) return null;

    cachedToken = token;
    const expiresIn = data.token?.expires_in || data.expires_in || 3600;
    tokenExpiryTime = Date.now() + (expiresIn - 60) * 1000;
    return cachedToken;
  } catch (error) {
    console.error("Error fetching Toast Token:", error);
    return null;
  }
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export const fetchToastMenuData = createServerFn({ method: "GET" }).handler(async (): Promise<MenuCategory[]> => {
  const token = await getToastToken();
  const guid = process.env.TOAST_GUID;

  if (!token || !guid) {
    console.warn("Falling back to static menu due to missing auth or GUID");
    return FALLBACK_CATEGORIES;
  }

  try {
    const menusReq = await fetch("https://ws-api.toasttab.com/menus/v2/menus", {
      headers: { Authorization: `Bearer ${token}`, "Toast-Restaurant-External-ID": guid },
    });

    if (!menusReq.ok) {
      throw new Error(`Failed to fetch from Toast Menus API: ${menusReq.status}`);
    }

    const payload = await menusReq.json();
    const menus = payload.menus || [];

    // Construct categories
    const categories: MenuCategory[] = [];
    const categoryMap = new Map<string, MenuCategory>();

    for (const menu of menus) {
      const groups = menu.menuGroups || [];
      
      for (const group of groups) {
        if (!group.name || !group.menuItems || group.menuItems.length === 0) continue;

        const mappedItems = group.menuItems.map((rawItem: any) => {
          // Try extracting price if available, otherwise just leave blank
          const price = rawItem.price !== null && rawItem.price !== undefined ? parseFloat(rawItem.price) : "";
          const image = rawItem.image || (rawItem.images && rawItem.images.length > 0 ? rawItem.images[0] : "");

          return {
            name: rawItem.name,
            price: typeof price === 'number' ? `$${price.toFixed(2)}` : String(price),
            description: rawItem.description || "",
            categoryImage: image, // Use this if provided
            veg: false, // Toast doesn't natively tag veg
          };
        });

        if (mappedItems.length === 0) continue;

        const slug = slugify(group.name);

        if (categoryMap.has(slug)) {
          // Merge items into the existing category to prevent duplicate keys
          const existingCat = categoryMap.get(slug)!;
          existingCat.items.push(...mappedItems);
        } else {
          const newCat = {
            slug,
            name: group.name,
            tagline: group.description || "",
            image: "", // Replaced dynamically on frontend or mapped via premiumImages
            items: mappedItems,
          };
          categoryMap.set(slug, newCat);
          categories.push(newCat);
        }
      }
    }

    if (categories.length === 0) {
      return FALLBACK_CATEGORIES;
    }

    return categories;
  } catch (error) {
    console.error("Toast API Fetch Error:", error);
    return FALLBACK_CATEGORIES;
  }
});
