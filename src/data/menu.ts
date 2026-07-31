export type MenuItem = {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  veg?: boolean;
  chefSpecial?: boolean;
  bestSeller?: boolean;
};

import imgDosa from "@/assets/dosaanduttapam.png";
import imgIdli from "@/assets/idlyandvada.png";
import imgVegEntrees from "@/assets/vegentry.png";
import imgSoups from "@/assets/soup.png";
import imgVegAppetizers from "@/assets/vegappetizers.png";
import imgNonVegAppetizers from "@/assets/nonvegappetizers.png";
import imgSeafood from "@/assets/Seafood.png";
import imgIndoChinese from "@/assets/indo-chinese.png";
import imgBreads from "@/assets/bread.png";
import imgBiryani from "@/assets/biryani.png";
import imgDesserts from "@/assets/desserts.png";
import imgBeverages from "@/assets/beverage.png";

export type MenuCategory = {
  slug: string;
  image: string;
  name: string;
  tagline: string;
  items: MenuItem[];
};

export const CATEGORIES: MenuCategory[] = [
  {
    slug: "dosa-uttapam",
    image: imgDosa,
    name: "Dosa & Uttapam",
    tagline: "Crisp golden crepes from the coast of the south",
    items: [
      { name: "Plain Dosa", price: "$12.99", description: "Crispy golden crepe made from fermented rice and lentil batter.", veg: true },
      { name: "Masala Dosa", price: "$14.99", originalPrice: "$17.99", description: "Classic dosa stuffed with flavorful potato masala.", veg: true, bestSeller: true },
      { name: "Mysore Masala Dosa", price: "$14.99", originalPrice: "$18.99", description: "Crispy dosa spread with spicy Mysore chutney and potato filling.", veg: true, chefSpecial: true },
      { name: "Ghee Roast", price: "$13.99", description: "Thin paper dosa roasted generously with pure ghee.", veg: true },
      { name: "Rava Dosa", price: "$14.99", description: "Crispy semolina dosa seasoned with cumin and spices.", veg: true },
    ],
  },
  {
    slug: "idli-vada",
    image: imgIdli,
    name: "Idli & Vada",
    tagline: "Pillow-soft steamed rice cakes and lentil doughnuts",
    items: [
      { name: "Plain Idli", price: "$9.99", description: "Soft steamed rice and lentil cakes served with chutney and sambar.", veg: true },
      { name: "Ghee Idli", price: "$11.99", description: "Fluffy idlis drizzled with aromatic ghee.", veg: true },
      { name: "Sambar Idli", price: "$11.99", description: "Idlis soaked in flavorful South Indian sambar.", veg: true },
      { name: "Medhu Vada", price: "$10.99", description: "Crispy lentil doughnuts with a soft center.", veg: true },
      { name: "Idli Vada Combo", price: "$11.99", description: "Combination of idli and crispy medhu vada.", veg: true, bestSeller: true },
    ],
  },
  {
    slug: "veg-entrees",
    image: imgVegEntrees,
    name: "Veg Entrees",
    tagline: "Slow-simmered curries from every corner of India",
    items: [
      { name: "Paneer Butter Masala", price: "$16.99", description: "Paneer cubes in a rich, creamy tomato butter gravy.", veg: true, chefSpecial: true, bestSeller: true },
      { name: "Paneer Tikka Masala", price: "$16.99", description: "Grilled paneer cooked in smoky tomato-onion gravy.", veg: true },
      { name: "Kadai Paneer", price: "$16.99", description: "Paneer stir-fried with peppers, onions, and spices.", veg: true },
      { name: "Dal Makhani", price: "$15.99", description: "Slow-cooked black lentils finished with butter and cream.", veg: true },
      { name: "Palak Paneer", price: "$15.99", description: "Cottage cheese simmered in creamy spinach gravy.", veg: true },
    ],
  },
  {
    slug: "soups",
    image: imgSoups,
    name: "Soups",
    tagline: "Warming broths and spiced rasams",
    items: [
      { name: "Hot & Sour Soup (Veg/Chicken)", price: "$7.99", description: "Tangy and spicy soup loaded with vegetables or chicken." },
      { name: "Tomato Basil Soup", price: "$6.99", description: "Creamy tomato soup infused with fresh basil.", veg: true },
      { name: "Milagu Chicken Rasam", price: "$7.99", description: "Traditional pepper chicken soup with South Indian spices." },
      { name: "Mutton Rasam", price: "$7.99", description: "Rich pepper broth made with tender mutton." },
    ],
  },
  {
    slug: "veg-appetizers",
    image: imgVegAppetizers,
    name: "Veg Appetizers",
    tagline: "Wok-tossed bites bursting with flavor",
    items: [
      { name: "Gobi 65", price: "$13.99", description: "Crispy cauliflower tossed in spicy South Indian seasoning.", veg: true },
      { name: "Gobi Manchurian", price: "$14.99", description: "Crispy cauliflower in Indo-Chinese garlic sauce.", veg: true, bestSeller: true },
      { name: "Veg Manchurian", price: "$14.99", description: "Vegetable dumplings tossed in savory Manchurian sauce.", veg: true },
      { name: "Chilli Paneer", price: "$15.99", description: "Paneer stir-fried with peppers, onions, and chili sauce.", veg: true },
      { name: "Babycorn Manchurian", price: "$14.99", description: "Crispy baby corn coated with Indo-Chinese flavors.", veg: true },
    ],
  },
  {
    slug: "non-veg-appetizers",
    image: imgNonVegAppetizers,
    name: "Non-Veg Appetizers",
    tagline: "Fiery starters and traditional fritters",
    items: [
      { name: "Chicken 65", price: "$16.99", description: "Crispy chicken bites marinated with traditional spices.", chefSpecial: true, bestSeller: true },
      { name: "Chilli Chicken", price: "$16.99", description: "Wok-tossed chicken with green chilies and soy glaze." },
      { name: "Stuffed Mirchi Bajji", price: "$11.99", description: "Large stuffed chilies battered and fried until golden.", veg: true },
      { name: "Punugulu", price: "$11.99", description: "Crispy South Indian fritters served with chutney.", veg: true },
    ],
  },
  {
    slug: "seafood",
    image: imgSeafood,
    name: "Seafood",
    tagline: "Coastal treasures cooked with heritage spice",
    items: [
      { name: "Shrimp Chettinad", price: "$21.99", description: "Shrimp cooked in rich Chettinad masala with roasted spices.", chefSpecial: true },
      { name: "Andhra Chepala Pulusu", price: "$19.99", description: "Traditional Andhra fish curry with tamarind and spices." },
      { name: "Madras Fish Curry", price: "$19.99", description: "Tangy South Indian fish curry bursting with flavor." },
      { name: "Kerala Meen Mollee", price: "$21.99", description: "Fish simmered in mild coconut milk curry." },
      { name: "Kadai Shrimp", price: "$21.99", description: "Shrimp stir-fried with peppers, onions, and fresh spices." },
    ],
  },
  {
    slug: "indo-chinese",
    image: imgIndoChinese,
    name: "Indo-Chinese",
    tagline: "The beloved fusion of two great cuisines",
    items: [
      { name: "Veg Fried Rice", price: "$15.99", description: "Wok-fried rice with fresh vegetables and seasonings.", veg: true },
      { name: "Chicken Fried Rice", price: "$16.99", description: "Fried rice loaded with tender chicken and vegetables." },
      { name: "Egg Fried Rice", price: "$15.99", description: "Rice stir-fried with eggs and vegetables." },
      { name: "Shrimp Fried Rice", price: "$17.99", description: "Flavorful fried rice with juicy shrimp." },
      { name: "Schezwan Chicken Noodles/Fried Rice", price: "$16.99", description: "Spicy noodles or rice tossed with chicken in Schezwan sauce." },
    ],
  },
  {
    slug: "breads",
    image: imgBreads,
    name: "Breads",
    tagline: "Tandoor-baked breads, blistered and warm",
    items: [
      { name: "Plain Naan", price: "$4.99", description: "Soft tandoor-baked Indian flatbread.", veg: true },
      { name: "Butter Naan", price: "$5.99", description: "Fresh naan brushed with melted butter.", veg: true, bestSeller: true },
      { name: "Garlic Naan", price: "$5.99", description: "Naan topped with garlic and herbs.", veg: true },
      { name: "Onion Kulcha", price: "$5.99", description: "Soft bread stuffed with spiced onions.", veg: true },
      { name: "Cheese Kulcha", price: "$5.99", description: "Tandoor bread stuffed with melted cheese.", veg: true },
    ],
  },
  {
    slug: "biryani",
    image: imgBiryani,
    name: "Biryani",
    tagline: "Dum-cooked basmati layered with royal spices",
    items: [
      { name: "Hyderabadi Chicken Dum Biryani", price: "$17.99", description: "Traditional dum-cooked chicken biryani with fragrant basmati rice.", chefSpecial: true, bestSeller: true },
      { name: "Hyderabadi Goat Dum Biryani", price: "$21.99", description: "Slow-cooked goat biryani with authentic Hyderabadi spices.", chefSpecial: true },
      { name: "Veg Biryani", price: "$16.99", description: "Aromatic basmati rice cooked with fresh vegetables.", veg: true },
      { name: "Paneer Biryani", price: "$17.99", description: "Flavorful rice layered with marinated paneer.", veg: true },
      { name: "Shrimp Biryani", price: "$21.99", description: "Coastal-style biryani with succulent shrimp." },
    ],
  },
  {
    slug: "desserts",
    image: imgDesserts,
    name: "Desserts",
    tagline: "Sweet finales rooted in Indian tradition",
    items: [
      { name: "Apricot Delight", price: "$9.99", description: "Signature dessert made with stewed apricots, cream, and vanilla ice cream.", veg: true, chefSpecial: true, bestSeller: true },
      { name: "Carrot Halwa", price: "$7.99", description: "Slow-cooked carrot pudding enriched with milk and nuts.", veg: true },
      { name: "Mango Fruit Custard", price: "$7.99", description: "Creamy custard with fresh mangoes and seasonal fruits.", veg: true },
      { name: "Brownie with Ice Cream", price: "$8.99", description: "Warm chocolate brownie served with vanilla ice cream.", veg: true },
      { name: "Gulab Jamun", price: "$6.99", description: "Soft milk dumplings soaked in aromatic sugar syrup.", veg: true },
    ],
  },
  {
    slug: "beverages",
    image: imgBeverages,
    name: "Beverages",
    tagline: "Cooling lassis and refreshing sips",
    items: [
      { name: "Mango Lassi", price: "$5.99", description: "Creamy yogurt drink blended with sweet Alphonso mangoes.", veg: true, bestSeller: true },
      { name: "Sweet/Salt Lassi", price: "$4.99", description: "Traditional chilled yogurt drink served sweet or salted.", veg: true },
      { name: "Fresh Lime Soda", price: "$4.99", description: "Refreshing sparkling lime drink available sweet or salted.", veg: true },
      { name: "Falooda Maharaja with Nuts", price: "$8.99", description: "Rich rose-flavored dessert drink topped with ice cream and nuts.", veg: true, chefSpecial: true },
      { name: "Pistachio Milkshake", price: "$7.99", description: "Creamy milkshake blended with premium roasted pistachios.", veg: true },
    ],
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
