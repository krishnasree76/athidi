// import { createFileRoute, Link } from "@tanstack/react-router";
// import { useState, useEffect, useMemo, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, SlidersHorizontal, Grid, List as ListIcon, Plus, Sparkles, Flame, ChevronLeft, ChevronRight, Menu } from "lucide-react";
// import { CATEGORIES } from "@/data/menu";
// import { useCart } from "@/hooks/use-cart";
// import { Navbar } from "@/components/Navbar";

// // Premium Imagery mappings from Gallery (injecting to enhance specific items)
// import imgBiryani from "@/assets/gallery/AthidhiIndianFineDineRestaurant_HyderabadiGoatDumBiryani.jpg";
// import imgChicken65 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Chicken65.jpg";
// import imgMuttonRoast from "@/assets/gallery/AthidhiIndianFineDineRestaurant_CashewMuttonRoast.jpg";
// import imgTikkaMasala from "@/assets/gallery/AthidhiIndianFineDineRestaurant_ChickenTikkaMasala.jpg";
// import imgDosa from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Dosa.jpg";
// import imgBajji from "@/assets/gallery/AthidhiIndianFineDineRestaurant_StuffedMirchiBajji.jpg";

// export const Route = createFileRoute("/menu")({
//   head: () => ({
//     meta: [
//       { title: "Menu — Discover Athidhi" },
//       { name: "description", content: "Explore our collections of heritage Indian cuisine." },
//     ],
//   }),
//   component: MenuPlatform,
// });

// // A localized mapping to inject premium images into the item cards if they explicitly match.
// const premiumImages: Record<string, string> = {
//   "Hyderabadi Goat Dum Biryani": imgBiryani,
//   "Chicken 65": imgChicken65,
//   "Cashew Mutton Roast": imgMuttonRoast,
//   "Chicken Tikka Masala": imgTikkaMasala,
//   "Masala Dosa": imgDosa,
//   "Stuffed Mirchi Bajji": imgBajji,
// };

// function MenuPlatform() {
//   const { addItem, itemCount } = useCart();
//   const [activeSlug, setActiveSlug] = useState(CATEGORIES[0].slug);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   // Carousel ref mapping
//   const carouselRef = useRef<HTMLDivElement>(null);

//   // Filter Categories via Search
//   const filteredCategories = useMemo(() => {
//     if (!searchQuery.trim()) return CATEGORIES;
//     const q = searchQuery.toLowerCase();

//     return CATEGORIES.map(cat => ({
//       ...cat,
//       items: cat.items.filter(i =>
//         i.name.toLowerCase().includes(q) ||
//         i.description.toLowerCase().includes(q)
//       )
//     })).filter(cat => cat.items.length > 0);
//   }, [searchQuery]);

//   // Featured / Popular items pooling (combining chef specials / best sellers)
//   const featuredItems = useMemo(() => {
//     return CATEGORIES.flatMap(c =>
//       c.items.filter(i => i.bestSeller || i.chefSpecial).map(i => ({ ...i, categoryImage: c.image }))
//     ).slice(0, 10);
//   }, []);

//   // Robust manual ScrollSpy to resolve thresholding bugs
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section[data-menu-section="true"]');
//       let currentActive = activeSlug;

//       const scrollY = window.scrollY;

//       // if scrolled to top tightly
//       if (scrollY < 120) {
//         setActiveSlug(CATEGORIES[0].slug);
//         return;
//       }

//       sections.forEach(sec => {
//         const rect = sec.getBoundingClientRect();
//         // Identify sections whose layouts approach the Navbar/Padding offset boundary (~150px layout anchor)
//         if (rect.top <= 200) {
//           currentActive = sec.id;
//         }
//       });

//       if (currentActive !== activeSlug) {
//         setActiveSlug(currentActive);

//         // Sync mobile swiping pill logic locally bypassing `scrollIntoView` vertical scroll-jumping bugs
//         const mobilePill = document.getElementById(`pill-${currentActive}`);
//         if (mobilePill) {
//           const parent = mobilePill.parentElement;
//           if (parent) {
//             const scrollLeftTarget = mobilePill.offsetLeft - parent.clientWidth / 2 + mobilePill.clientWidth / 2;
//             parent.scrollTo({ left: scrollLeftTarget, behavior: 'smooth' });
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSlug, filteredCategories]);

//   // Handle smooth scroll clicks from sidebar/pills
//   const scrollToCategory = (slug: string) => {
//     setActiveSlug(slug);
//     const element = document.getElementById(slug);
//     if (element) {
//       const yOffset = -180; // Calculate sticky header offset (navbar + local headers)
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   const scrollLeft = () => {
//     if (carouselRef.current) carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
//   };
//   const scrollRight = () => {
//     if (carouselRef.current) carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-cream text-ink flex flex-col relative pt-[72px] lg:pt-[104px] lg:flex-row overflow-x-hidden">
//       {/* 1. Global Navbar injection (fixes missing navigation) */}
//       <Navbar />


//       <div className="lg:hidden sticky top-[72px] z-40 bg-cream/95 backdrop-blur-xl border-b border-burgundy/10 shadow-sm flex flex-col pt-2">

//         <div className="px-4 pb-3 flex items-center justify-between gap-3">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full bg-white rounded-full py-2.5 pl-9 pr-4 text-sm outline-none border border-burgundy/10 focus:border-burgundy shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')} className="p-2.5 bg-beige rounded-full border border-burgundy/10 text-ink/60 hover:text-burgundy">
//             {viewMode === 'grid' ? <ListIcon className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
//           </button>
//         </div>

//         <div className="px-4 py-3 flex overflow-x-auto gap-2 no-scrollbar border-t border-burgundy/5 items-center relative">
//           {CATEGORIES.map(category => (
//             <button
//               key={category.slug}
//               id={`pill-${category.slug}`}
//               onClick={() => scrollToCategory(category.slug)}
//               className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeSlug === category.slug
//                   ? "bg-burgundy text-cream border-burgundy shadow-md scale-105"
//                   : "bg-white text-ink/60 border-ink/10 hover:border-burgundy/30"
//                 }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>


//       </div>

//       {/* ---------------- DESKTOP LEFT SIDEBAR (20-25%) ---------------- */}
//       <aside className="hidden lg:flex flex-col w-[280px] xl:w-[320px] fixed h-[calc(100vh-104px)] top-[104px] left-0 bg-[#FFF8F1] shadow-[4px_0_24px_rgba(91,11,19,0.04)] z-40 p-8 border-r border-burgundy/5">

//         <div className="mb-8 relative mt-2">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
//           <input
//             type="text"
//             placeholder="Search dishes..."
//             className="w-full bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm outline-none border border-burgundy/10 focus:border-burgundy shadow-sm transition-all focus:shadow-md"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="flex-1 overflow-y-auto no-scrollbar pb-10 mt-2">
//           <h3 className="text-xs uppercase tracking-[0.2em] text-ink/40 font-bold mb-6">Collections</h3>
//           <ul className="flex flex-col gap-2">
//             {CATEGORIES.map((category) => {
//               const isActive = activeSlug === category.slug;
//               return (
//                 <li key={category.slug}>
//                   <button
//                     onClick={() => scrollToCategory(category.slug)}
//                     className={`w-full flex items-center justify-between text-left px-5 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden group ${isActive
//                         ? "bg-burgundy text-cream shadow-luxury"
//                         : "hover:bg-white text-ink/70 hover:shadow-sm border border-transparent hover:border-burgundy/5"
//                       }`}
//                   >
//                     {isActive && <motion.div layoutId="sidebar-active" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 rounded-r-md bg-[#C9A227]" />}
//                     <span className={`font-serif text-[15px] ${isActive ? "tracking-wide pl-2" : "group-hover:pl-1"} transition-all duration-300`}>{category.name}</span>
//                     <span className={`text-[10px] font-mono ${isActive ? "text-gold" : "text-ink/30"}`}>{category.items.length}</span>
//                   </button>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </aside>

//       {/* ---------------- MAIN RIGHT CONTENT (75-80%) ---------------- */}
//       <main className="flex-1 lg:ml-[280px] xl:ml-[320px] bg-white min-h-[calc(100vh-104px)] flex flex-col relative min-w-0 overflow-x-hidden">

//         {/* Desktop Top Controls */}
//         <header className="hidden lg:flex items-center justify-between sticky top-[104px] z-30 bg-white/80 backdrop-blur-2xl px-10 xl:px-16 py-6 border-b border-burgundy/5">
//           <div>
//             <div className="text-xs tracking-[0.2em] uppercase text-gold font-bold mb-1">Athidhi Restaurant</div>
//             <h2 className="font-serif text-3xl text-burgundy">Menu Discovery</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-burgundy px-4 py-2 rounded-full hover:bg-beige transition">
//               <SlidersHorizontal className="h-4 w-4" /> Filters
//             </button>
//             <div className="flex items-center bg-beige p-1 rounded-full border border-burgundy/10">
//               <button onClick={() => setViewMode("grid")} className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? "bg-white shadow-sm text-burgundy" : "text-ink/40 hover:text-ink/70"}`}><Grid className="h-4 w-4" /></button>
//               <button onClick={() => setViewMode("list")} className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? "bg-white shadow-sm text-burgundy" : "text-ink/40 hover:text-ink/70"}`}><ListIcon className="h-4 w-4" /></button>
//             </div>
//           </div>
//         </header>

//         <div className="px-5 py-8 lg:px-10 xl:px-16 lg:py-12 w-full max-w-[1400px] mx-auto">

//           {/* Popular Featured Carousel */}
//           {!searchQuery && (
//             <section className="mb-16 lg:mb-24 relative w-full overflow-hidden">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="h-8 w-1 rounded-sm bg-gold" />
//                   <h3 className="font-serif text-2xl lg:text-3xl text-burgundy tracking-wide">Most Loved</h3>
//                 </div>

//                 {/* Interactive Arrows for Desktop Carousel */}
//                 <div className="hidden lg:flex items-center gap-2">
//                   <button onClick={scrollLeft} className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-cream transition-colors shadow-sm">
//                     <ChevronLeft className="h-5 w-5" />
//                   </button>
//                   <button onClick={scrollRight} className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-cream transition-colors shadow-sm">
//                     <ChevronRight className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* Horizontal Ref-Tracker */}
//               <div
//                 ref={carouselRef}
//                 className="flex overflow-x-auto gap-4 lg:gap-6 pb-6 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth w-full"
//               >
//                 {featuredItems.map((item, idx) => {
//                   const itemImage = premiumImages[item.name] || item.categoryImage;
//                   return (
//                     <article
//                       key={'feat' + idx}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.1, duration: 0.5 }}
//                       className="flex-shrink-0 w-[280px] lg:w-[320px] snap-start bg-[#FFF8F1] rounded-[24px] border border-burgundy/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(91,11,19,0.12)] transition-all duration-300 group cursor-pointer"
//                     >
//                       <div className="h-48 overflow-hidden relative rounded-t-[24px]">
//                         <img src={itemImage} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-100 transition-opacity duration-300" />

//                         {/* Add to Cart button ALWAYS visible natively rather than group-hover:opacity-100 mapped to bottom right */}
//                         <button onClick={() => addItem(item)} className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg hover:bg-burgundy hover:text-cream transition-all duration-300 active:scale-95">
//                           <Plus className="h-5 w-5" />
//                         </button>
//                       </div>
//                       <div className="p-5">
//                         <div className="flex items-center justify-between mb-2">
//                           <h4 className="font-serif text-lg text-ink font-semibold truncate pr-3">{item.name}</h4>
//                           <span className={`mt-0.5 h-3 w-3 shrink-0 rounded-sm border-[1.5px] ${item.veg ? "border-green-700" : "border-red-700"} grid place-items-center`}>
//                             <span className={`h-1.5 w-1.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
//                           </span>
//                         </div>
//                         <p className="text-sm text-ink/60 line-clamp-2 mb-4 font-light leading-relaxed">{item.description}</p>
//                         <div className="font-serif text-lg font-medium text-gold">{item.price}</div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             </section>
//           )}

//           {/* Vertical Categories Logic */}
//           <div className="flex flex-col gap-16 lg:gap-32 pb-40 w-full">
//             {filteredCategories.map((category) => (
//               <section id={category.slug} data-menu-section="true" key={category.slug}>

//                 <div className="mb-8 lg:mb-10 w-full">
//                   <h2 className="font-serif text-3xl lg:text-4xl text-burgundy mb-2 tracking-wide break-words">{category.name}</h2>
//                   <p className="text-ink/60 text-sm lg:text-base font-light italic truncate pr-2">{category.tagline}</p>
//                 </div>

//                 {/* Desktop Grid View (2 ITEMS PER ROW) / List View */}
//                 <div className={`grid gap-4 lg:gap-6 w-full ${viewMode === 'list'
//                     ? "grid-cols-1"
//                     : "grid-cols-1 lg:grid-cols-2" // 1 Item strictly on phones, 2 items strictly per row on Desktop!
//                   }`}>
//                   {category.items.map((item, idx) => {
//                     const itemImage = premiumImages[item.name] || category.image;

//                     return (
//                       <article
//                         key={idx}
//                         className="group bg-white rounded-2xl p-3 lg:p-4 border border-ink/5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-luxury hover:border-burgundy/10 transition-all duration-500 flex gap-4 lg:gap-5 items-center w-full min-w-0"
//                       >
//                         {/* Product Image Square (Left) */}
//                         <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 rounded-[16px] overflow-hidden flex-shrink-0 bg-beige border border-ink/5">
//                           <img src={itemImage} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                           {(item.chefSpecial || item.bestSeller) && (
//                             <div className="absolute top-1.5 left-1.5 lg:top-2 lg:left-2">
//                               {item.chefSpecial ? (
//                                 <span className="inline-flex rounded-full bg-burgundy/90 backdrop-blur-md text-cream p-1 lg:p-1.5 shadow-sm" title="Chef Special"><Sparkles className="h-3 w-3" /></span>
//                               ) : (
//                                 <span className="inline-flex rounded-full bg-gold/90 backdrop-blur-md text-ink p-1 lg:p-1.5 shadow-sm" title="Best Seller"><Flame className="h-3 w-3" /></span>
//                               )}
//                             </div>
//                           )}
//                         </div>

//                         {/* Content Body (Right) */}
//                         <div className="flex-1 flex flex-col h-full py-0.5 lg:py-1 pr-1 lg:pr-2 min-w-0">
//                           <div className="flex items-start justify-between mb-1 lg:mb-2 gap-2">
//                             <h3 className="font-serif text-[15px] sm:text-base lg:text-[19px] text-ink leading-tight pr-2 truncate shrink min-w-0">{item.name}</h3>
//                             <span className={`mt-0.5 h-3 w-3 sm:mt-1 shrink-0 rounded-sm border-[1.5px] ${item.veg ? "border-green-700" : "border-red-700"} flex items-center justify-center`}>
//                               <span className={`h-1.5 w-1.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
//                             </span>
//                           </div>

//                           <p className="text-[11px] sm:text-xs lg:text-sm text-ink/60 line-clamp-2 mb-2 sm:mb-3 leading-relaxed font-light flex-1 pr-1">{item.description}</p>

//                           <div className="flex items-center justify-between mt-auto w-full">
//                             <div className="font-serif text-[15px] sm:text-[17px] lg:text-xl font-medium text-gold">{item.price}</div>
//                             <button
//                               onClick={() => addItem(item)}
//                               className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-burgundy/20 text-burgundy bg-burgundy/5 hover:bg-burgundy hover:border-burgundy hover:text-cream transition-colors text-xs lg:text-sm font-semibold tracking-wide flex-shrink-0 active:scale-95"
//                             >
//                               <Plus className="h-3 w-3 lg:h-4 lg:w-4" /> Add
//                             </button>
//                           </div>
//                         </div>
//                       </article>
//                     );
//                   })}
//                 </div>

//               </section>
//             ))}
//             {filteredCategories.length === 0 && (
//               <div className="text-center py-32 text-ink/40 font-serif text-2xl">
//                 No experiences found matching your search.
//               </div>
//             )}
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Grid,
  List as ListIcon,
  Plus,
  Sparkles,
  Flame,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { CATEGORIES } from "@/data/menu";
import { useCart } from "@/hooks/use-cart";
import { Navbar } from "@/components/Navbar";

// Premium Imagery mappings
import imgBiryani from "@/assets/gallery/AthidhiIndianFineDineRestaurant_HyderabadiGoatDumBiryani.jpg";
import imgChicken65 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Chicken65.jpg";
import imgMuttonRoast from "@/assets/gallery/AthidhiIndianFineDineRestaurant_CashewMuttonRoast.jpg";
import imgTikkaMasala from "@/assets/gallery/AthidhiIndianFineDineRestaurant_ChickenTikkaMasala.jpg";
import imgDosa from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Dosa.jpg";
import imgBajji from "@/assets/gallery/AthidhiIndianFineDineRestaurant_StuffedMirchiBajji.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Discover Athidhi" },
      { name: "description", content: "Explore our collections of heritage Indian cuisine." },
    ],
  }),
  component: MenuPlatform,
});

const premiumImages: Record<string, string> = {
  "Hyderabadi Goat Dum Biryani": imgBiryani,
  "Chicken 65": imgChicken65,
  "Cashew Mutton Roast": imgMuttonRoast,
  "Chicken Tikka Masala": imgTikkaMasala,
  "Masala Dosa": imgDosa,
  "Stuffed Mirchi Bajji": imgBajji,
};

function MenuPlatform() {
  const { addItem } = useCart();
  const [activeSlug, setActiveSlug] = useState(CATEGORIES[0].slug);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // DOM Refs
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobilePillsNavRef = useRef<HTMLDivElement>(null);
  const isManualClick = useRef(false);

  // Filter Categories via Search Query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    const q = searchQuery.toLowerCase();

    return CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [searchQuery]);

  // Popular / Featured items pool
  const featuredItems = useMemo(() => {
    return CATEGORIES.flatMap((c) =>
      c.items
        .filter((i) => i.bestSeller || i.chefSpecial)
        .map((i) => ({ ...i, categoryImage: c.image }))
    ).slice(0, 10);
  }, []);

  // Center active pill inside the mobile horizontal bar
  const centerMobilePill = (slug: string) => {
    const pill = document.getElementById(`pill-${slug}`);
    const container = mobilePillsNavRef.current;

    if (pill && container) {
      const scrollLeftTarget =
        pill.offsetLeft - container.clientWidth / 2 + pill.clientWidth / 2;
      container.scrollTo({ left: scrollLeftTarget, behavior: "smooth" });
    }
  };

  // Robust ScrollSpy Hook
  useEffect(() => {
    const handleScroll = () => {
      // If user clicked a pill, ignore native scroll tracking temporarily
      if (isManualClick.current) return;

      const sections = document.querySelectorAll(
        'section[data-menu-section="true"]'
      );
      let currentActive = activeSlug;
      const scrollY = window.scrollY;

      // Handle top boundary condition
      if (scrollY < 120) {
        if (activeSlug !== CATEGORIES[0].slug) {
          setActiveSlug(CATEGORIES[0].slug);
          centerMobilePill(CATEGORIES[0].slug);
        }
        return;
      }

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        // Dynamic viewport line (180px threshold compensates for fixed headers)
        if (rect.top <= 180) {
          currentActive = sec.id;
        }
      });

      if (currentActive !== activeSlug) {
        setActiveSlug(currentActive);
        centerMobilePill(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSlug, filteredCategories]);

  // Click handler for sidebar links and category pills
  const scrollToCategory = (slug: string) => {
    isManualClick.current = true;
    setActiveSlug(slug);
    centerMobilePill(slug);

    const element = document.getElementById(slug);
    if (element) {
      const yOffset = -170; // Header offset margin
      const y =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // Release scroll lock after animation completes
    setTimeout(() => {
      isManualClick.current = false;
    }, 700);
  };

  const scrollLeft = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col relative pt-[72px] lg:pt-[104px] lg:flex-row overflow-x-hidden">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. FIXED / STICKY MOBILE CATEGORY NAVBAR */}
      <div className="lg:hidden sticky top-[72px] z-40 bg-cream/95 backdrop-blur-xl border-b border-burgundy/10 shadow-sm flex flex-col pt-2">

        <div className="px-4 pb-3 flex items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white rounded-full py-2.5 pl-9 pr-4 text-sm outline-none border border-burgundy/10 focus:border-burgundy shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="p-2.5 bg-beige rounded-full border border-burgundy/10 text-ink/60 hover:text-burgundy"
          >
            {viewMode === "grid" ? (
              <ListIcon className="h-4 w-4" />
            ) : (
              <Grid className="h-4 w-4" />
            )}
          </button>
        </div>


        <div
          ref={mobilePillsNavRef}
          className="px-4 py-3 flex overflow-x-auto gap-2 no-scrollbar border-t border-burgundy/5 items-center relative scroll-smooth"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeSlug === category.slug;
            return (
              <button
                key={category.slug}
                id={`pill-${category.slug}`}
                onClick={() => scrollToCategory(category.slug)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                  ? "bg-burgundy text-cream border-burgundy shadow-md scale-105"
                  : "bg-white text-ink/60 border-ink/10 hover:border-burgundy/30"
                  }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. DESKTOP LEFT SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-[280px] xl:w-[320px] fixed h-[calc(100vh-104px)] top-[104px] left-0 bg-[#FFF8F1] shadow-[4px_0_24px_rgba(91,11,19,0.04)] z-40 p-8 border-r border-burgundy/5">
        <div className="mb-8 relative mt-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" />
          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full bg-white rounded-2xl py-3.5 pl-11 pr-4 text-sm outline-none border border-burgundy/10 focus:border-burgundy shadow-sm transition-all focus:shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar pb-10 mt-2">
          <h3 className="text-xs uppercase tracking-[0.2em] text-ink/40 font-bold mb-6">
            Collections
          </h3>
          <ul className="flex flex-col gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeSlug === category.slug;
              return (
                <li key={category.slug}>
                  <button
                    onClick={() => scrollToCategory(category.slug)}
                    className={`w-full flex items-center justify-between text-left px-5 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden group ${isActive
                      ? "bg-burgundy text-cream shadow-luxury"
                      : "hover:bg-white text-ink/70 hover:shadow-sm border border-transparent hover:border-burgundy/5"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 rounded-r-md bg-[#C9A227]"
                      />
                    )}
                    <span
                      className={`font-serif text-[15px] ${isActive ? "tracking-wide pl-2" : "group-hover:pl-1"
                        } transition-all duration-300`}
                    >
                      {category.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${isActive ? "text-gold" : "text-ink/30"
                        }`}
                    >
                      {category.items.length}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* 4. MAIN MAIN CONTENT */}
      <main className="flex-1 lg:ml-[280px] xl:ml-[320px] bg-white min-h-[calc(100vh-104px)] flex flex-col relative min-w-0 overflow-x-hidden">
        {/* Desktop Header Bar */}
        <header className="hidden lg:flex items-center justify-between sticky top-[104px] z-30 bg-white/80 backdrop-blur-2xl px-10 xl:px-16 py-6 border-b border-burgundy/5">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-gold font-bold mb-1">
              Athidhi Restaurant
            </div>
            <h2 className="font-serif text-3xl text-burgundy">
              Menu Discovery
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* <button className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-burgundy px-4 py-2 rounded-full hover:bg-beige transition">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button> */}
            <div className="flex items-center bg-beige p-1 rounded-full border border-burgundy/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${viewMode === "grid"
                  ? "bg-white shadow-sm text-burgundy"
                  : "text-ink/40 hover:text-ink/70"
                  }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors ${viewMode === "list"
                  ? "bg-white shadow-sm text-burgundy"
                  : "text-ink/40 hover:text-ink/70"
                  }`}
              >
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        <div className="px-5 py-8 lg:px-10 xl:px-16 lg:py-12 w-full max-w-[1400px] mx-auto">
          {/* Featured Carousel */}
          {!searchQuery && (
            <section className="mb-16 lg:mb-24 relative w-full overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 rounded-sm bg-gold" />
                  <h3 className="font-serif text-2xl lg:text-3xl text-burgundy tracking-wide">
                    Most Loved
                  </h3>
                </div>

                <div className="hidden lg:flex items-center gap-2">
                  <button
                    onClick={scrollLeft}
                    className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-cream transition-colors shadow-sm"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={scrollRight}
                    className="p-2 rounded-full border border-ink/10 hover:bg-ink hover:text-cream transition-colors shadow-sm"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-4 lg:gap-6 pb-6 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth w-full"
              >
                {featuredItems.map((item, idx) => {
                  const itemImage =
                    premiumImages[item.name] || item.categoryImage;
                  return (
                    <article
                      key={"feat" + idx}
                      className="flex-shrink-0 w-[280px] lg:w-[320px] snap-start bg-[#FFF8F1] rounded-[24px] border border-burgundy/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(91,11,19,0.12)] transition-all duration-300 group cursor-pointer"
                    >
                      <div className="h-48 overflow-hidden relative rounded-t-[24px]">
                        <img
                          src={itemImage}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-100 transition-opacity duration-300" />
                        <button
                          onClick={() => addItem(item)}
                          className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg hover:bg-burgundy hover:text-cream transition-all duration-300 active:scale-95"
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-serif text-lg text-ink font-semibold truncate pr-3">
                            {item.name}
                          </h4>
                          <span
                            className={`mt-0.5 h-3 w-3 shrink-0 rounded-sm border-[1.5px] ${item.veg ? "border-green-700" : "border-red-700"
                              } grid place-items-center`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"
                                }`}
                            />
                          </span>
                        </div>
                        <p className="text-sm text-ink/60 line-clamp-2 mb-4 font-light leading-relaxed">
                          {item.description}
                        </p>
                        <div className="font-serif text-lg font-medium text-gold flex items-center gap-2">
                          <span>{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-ink/40 text-xs line-through">{item.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* Menu Sections Grid */}
          <div className="flex flex-col gap-16 lg:gap-32 pb-40 w-full">
            {filteredCategories.map((category) => (
              <section
                id={category.slug}
                data-menu-section="true"
                key={category.slug}
              >
                <div className="mb-8 lg:mb-10 w-full">
                  <h2 className="font-serif text-3xl lg:text-4xl text-burgundy mb-2 tracking-wide break-words">
                    {category.name}
                  </h2>
                  <p className="text-ink/60 text-sm lg:text-base font-light italic truncate pr-2">
                    {category.tagline}
                  </p>
                </div>

                <div
                  className={`grid gap-4 lg:gap-6 w-full ${viewMode === "list"
                    ? "grid-cols-1"
                    : "grid-cols-1 lg:grid-cols-2"
                    }`}
                >
                  {category.items.map((item, idx) => {
                    const itemImage =
                      premiumImages[item.name] || category.image;

                    return (
                      <article
                        key={idx}
                        className="group bg-white rounded-2xl p-3 lg:p-4 border border-ink/5 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-luxury hover:border-burgundy/10 transition-all duration-500 flex gap-4 lg:gap-5 items-center w-full min-w-0"
                      >
                        {/* Dish Thumbnail */}
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 rounded-[16px] overflow-hidden flex-shrink-0 bg-beige border border-ink/5">
                          <img
                            src={itemImage}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {(item.chefSpecial || item.bestSeller) && (
                            <div className="absolute top-1.5 left-1.5 lg:top-2 lg:left-2">
                              {item.chefSpecial ? (
                                <span
                                  className="inline-flex rounded-full bg-burgundy/90 backdrop-blur-md text-cream p-1 lg:p-1.5 shadow-sm"
                                  title="Chef Special"
                                >
                                  <Sparkles className="h-3 w-3" />
                                </span>
                              ) : (
                                <span
                                  className="inline-flex rounded-full bg-gold/90 backdrop-blur-md text-ink p-1 lg:p-1.5 shadow-sm"
                                  title="Best Seller"
                                >
                                  <Flame className="h-3 w-3" />
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Dish Meta Content */}
                        <div className="flex-1 flex flex-col h-full py-0.5 lg:py-1 pr-1 lg:pr-2 min-w-0">
                          <div className="flex items-start justify-between mb-1 lg:mb-2 gap-2">
                            <h3 className="font-serif text-[15px] sm:text-base lg:text-[19px] text-ink leading-tight pr-2 truncate shrink min-w-0">
                              {item.name}
                            </h3>
                            <span
                              className={`mt-0.5 h-3 w-3 sm:mt-1 shrink-0 rounded-sm border-[1.5px] ${item.veg ? "border-green-700" : "border-red-700"
                                } flex items-center justify-center`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"
                                  }`}
                              />
                            </span>
                          </div>

                          <p className="text-[11px] sm:text-xs lg:text-sm text-ink/60 line-clamp-2 mb-2 sm:mb-3 leading-relaxed font-light flex-1 pr-1">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between mt-auto w-full">
                            <div className="font-serif text-[15px] sm:text-[17px] lg:text-xl font-medium text-gold flex items-center gap-2">
                              <span>{item.price}</span>
                              {item.originalPrice && (
                                <span className="text-ink/40 text-[11px] sm:text-xs line-through">{item.originalPrice}</span>
                              )}
                            </div>
                            <button
                              onClick={() => addItem(item)}
                              className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-burgundy/20 text-burgundy bg-burgundy/5 hover:bg-burgundy hover:border-burgundy hover:text-cream transition-colors text-xs lg:text-sm font-semibold tracking-wide flex-shrink-0 active:scale-95"
                            >
                              <Plus className="h-3 w-3 lg:h-4 lg:w-4" /> Add
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-32 text-ink/40 font-serif text-2xl">
                No experiences found matching your search.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}