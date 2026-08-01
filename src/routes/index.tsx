import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Paisley } from "@/components/Mandala";
import { CATEGORIES } from "@/data/menu";
import { useCart } from "@/hooks/use-cart";
import {
  Wheat, Flame, Utensils, ChefHat, Star, ArrowRight,
  MapPin, Phone, Mail, Clock, ShoppingCart, Plus, Sparkles
} from "lucide-react";

// Hero Images
import slide1 from "@/assets/hero/AthidhiIndianFineDineRestaurant_Hero.jpg";
import slide2 from "@/assets/hero/IAML3711.JPG";
import slide3 from "@/assets/hero/Panner Tikka.JPG";

// Checkerboard Feature Grids
import imgKabab from "@/assets/gallery/AthidhiIndianFineDineRestaurant_PunjabiHariyaliKabab.jpg";
import imgButterChicken from "@/assets/gallery/AthidhiIndianFineDineRestaurant_ChickenTikkaMasala.jpg";

// Gallery Grid Images
import gallery1 from "@/assets/gallery/Hero.jpg";
import gallery2 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_HyderabadiGoatDumBiryani.jpg";
import gallery3 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Dosa.jpg";
import gallery4 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_CashewMuttonRoast.jpg";
import gallery5 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_StuffedMirchiBajji.jpg";
import gallery6 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_VegManchurianNoodles.jpg";

// Experience / Contact blocks
import imgDining from "@/assets/index/dinningroom.JPG";
import imgCatering from "@/assets/index/catering.jpg";
import imgAthidi from "@/assets/index/Athidi.png";

const HERO_SLIDES = [slide1, slide2, slide3];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Athidhi — Athidhi Devo Bhava | Luxury Indian Fine Dining, Plainsboro NJ" },
      { name: "description", content: "Athidhi is a luxury Indian fine dining sanctuary in Plainsboro, NJ. Heritage recipes, dum biryanis, coastal seafood and signature desserts served with reverence." },
      { property: "og:title", content: "Athidhi — Athidhi Devo Bhava" },
      { property: "og:description", content: "A luxury Indian fine dining sanctuary in Plainsboro, NJ. Where every meal turns into a memorable moment." },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedScroller />
      <CheckerboardFeature />
      <TandoorGallery />
      <ExperienceContact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO CINEMATIC ---------------- */
function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    HERO_SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-[72px] lg:mt-[104px] min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-104px)] flex items-center justify-center overflow-hidden bg-ink">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 z-0 origin-center"
          initial={{ opacity: 0, scale: 1, x: 0 }}
          animate={{ opacity: 1, scale: 1.15, x: "-1%" }}
          exit={{ opacity: 0, zIndex: 1 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 7, ease: "linear" },
            x: { duration: 7, ease: "linear" }
          }}
        >
          <img src={HERO_SLIDES[current]} alt="Athidhi Premium Slide" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/40 to-ink/90 z-10" />

      <div className="pointer-events-none absolute inset-0 text-gold/40 z-10">
        <Mandala className="absolute -top-24 -left-24 w-[420px] opacity-[0.08] animate-spin-slower" />
        <Mandala className="absolute -bottom-40 -right-32 w-[560px] opacity-[0.06] animate-spin-slow" />
        <Paisley className="absolute top-1/4 right-10 w-24 opacity-[0.08] animate-floaty" />
        <Paisley className="absolute bottom-1/4 left-10 w-24 opacity-[0.08] animate-floaty -scale-x-100" />
      </div>

      <div className="container-luxury relative z-20 text-center text-cream py-32 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="gold-divider justify-center mb-6"
        >
          <span className="h-px w-10 bg-gold" />
          Established with Reverence
          <span className="h-px w-10 bg-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-6xl sm:text-8xl lg:text-[9rem] leading-none tracking-tight text-cream"
        >
          ATHIDHI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mt-4 font-serif italic text-2xl sm:text-3xl text-gold-soft"
        >
          An Experience Beyond Dining
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-6 max-w-xl mx-auto text-cream/70 text-base sm:text-lg"
        >
          Where every meal turns into a memorable moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Link to="/menu" className="btn-primary px-8">View Menu</Link>
          <Link to="/menu" className="btn-gold px-8">Order Online</Link>
        </motion.div>
      </div>
    </section>
  );
}



/* ---------------- POPULAR FEATURED HORIZONTAL ---------------- */
function FeaturedScroller() {
  const { addItem } = useCart();
  const featured = useMemo(() => {
    return CATEGORIES.flatMap(c => c.items.filter(i => i.bestSeller || i.chefSpecial).map(i => ({ ...i, categoryImage: c.image }))).slice(0, 10);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-beige relative overflow-hidden">
      {/* Background mandalas/paisley */}
      <Mandala className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] text-burgundy opacity-[0.03] animate-spin-slow" />

      <div className="container-luxury relative z-10 w-full pl-5 pr-0 sm:pl-8 sm:pr-8 mx-auto xl:px-0">
        <div className="flex justify-between items-end mb-10 mr-5 sm:mr-0">
          <motion.h2 {...fadeUp} className="font-serif text-4xl lg:text-5xl text-burgundy tracking-wide">
            Featured Offerings
          </motion.h2>
          <motion.div {...fadeUp}>
            <Link to="/menu" className="hidden sm:flex px-6 py-2 rounded-full border border-burgundy/40 text-burgundy hover:border-burgundy hover:bg-burgundy hover:text-cream transition-colors font-semibold text-sm tracking-wide items-center gap-2 shadow-sm">
              View menu <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto gap-5 lg:gap-8 pb-8 no-scrollbar snap-x snap-mandatory pr-5 sm:pr-0">
          {featured.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.1, 0.5), duration: 0.6 }}
              className="flex-shrink-0 w-[270px] lg:w-[320px] snap-start bg-cream rounded-3xl overflow-hidden group border border-burgundy/10 shadow-[0_4px_24px_rgba(40,10,12,0.06)] hover:border-burgundy/30 transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden bg-ink/5">
                <img src={item.categoryImage} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />

                <button onClick={() => addItem(item)} className="absolute bottom-4 right-4 h-12 w-12 bg-gold shadow-lg rounded-full text-ink flex items-center justify-center hover:bg-burgundy hover:text-cream transition-all duration-300 active:scale-95">
                  <Plus className="h-6 w-6 stroke-2" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-serif text-[19px] text-ink font-bold leading-tight line-clamp-1">{item.name}</h3>
                  <span className={`mt-0.5 shrink-0 rounded-sm border-[1.5px] ${item.veg ? "border-green-700" : "border-red-700"} p-[2px]`}>
                    <div className={`h-[5px] w-[5px] rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
                  </span>
                </div>
                <p className="text-[13px] text-ink/60 line-clamp-2 mt-2 font-medium leading-relaxed">{item.description}</p>
                <div className="mt-5 font-serif text-[22px] font-semibold tracking-wide flex items-center gap-3">
                  <span className="text-gold">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-ink/40 text-sm line-through">{item.originalPrice}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link to="/menu" className="w-full flex justify-center px-6 py-3 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream transition-colors font-semibold text-sm tracking-wide items-center gap-2 shadow-sm">
            View Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ---------------- CHECKERBOARD FEATURE ---------------- */
function CheckerboardFeature() {
  return (
    <section className="bg-cream">
      {/* Block 1: Kabab */}
      <div className="grid lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="h-[400px] sm:h-[550px] lg:h-[700px] relative overflow-hidden bg-ink/10">
          <img src={imgKabab} alt="The Kabab" loading="lazy" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105" />
        </motion.div>
        <div className="bg-[#FFF8F1] flex flex-col justify-center items-start px-8 sm:px-16 py-20 lg:px-24">
          <motion.div {...fadeUp} className="w-full max-w-lg mx-auto lg:mx-0">
            <div className="gold-divider mb-6"><span className="h-px w-8 bg-gold" /> The Kabab</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-burgundy mb-6 leading-[1.1] tracking-tight">Mastered by Fire.<br />Reserved for You.</h2>
            <p className="text-ink/70 leading-relaxed max-w-sm mb-12 text-[17px] font-light">
              Hand-ground spices marinated overnight. Cooked flawlessly inside traditional tandoor clay creating a smokey, melt-in-your-mouth perfection unlike anything else.
            </p>
            <Link to="/menu" className="inline-flex px-10 py-3.5 rounded-full bg-burgundy text-cream shadow-luxury hover:bg-ink transition-colors font-semibold tracking-wide flex items-center gap-2">
              View the Menu <ArrowRight className="h-4 w-4 opacity-70" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Block 2: Butter Chicken */}
      <div className="grid lg:grid-cols-2">
        <div className="order-2 lg:order-1 bg-[#FFF8F1] flex flex-col justify-center items-start px-8 sm:px-16 py-20 lg:px-24">
          <motion.div {...fadeUp} className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <div className="gold-divider mb-6"><span className="h-px w-8 bg-gold" /> The Butter Chicken</div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-burgundy mb-6 leading-[1.1] tracking-tight">Rich, Velvety, Unforgettable.</h2>
            <p className="text-ink/70 leading-relaxed max-w-sm mb-12 text-[17px] font-light">
              Simmered in a luxuriously slow-cooked tomato reduction enriched with pure Kashmiri saffron, organic cashews, and golden butter.
            </p>
            <Link to="/menu" className="inline-flex px-10 py-3.5 rounded-full bg-gold text-ink shadow-luxury hover:bg-burgundy hover:text-cream transition-colors font-bold tracking-wide flex items-center gap-2">
              Order Now <ArrowRight className="h-4 w-4 opacity-70" />
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="order-1 lg:order-2 h-[400px] sm:h-[550px] lg:h-[700px] relative overflow-hidden bg-ink/10">
          <img src={imgButterChicken} alt="The Butter Chicken" loading="lazy" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105" />
        </motion.div>
      </div>
    </section>
  );
}


/* ---------------- TANDOOR GALLERY GRID ---------------- */
function TandoorGallery() {
  const pieces = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="bg-[#1B0B0D] py-28 lg:py-40 relative">
      <Paisley className="pointer-events-none absolute top-10 right-10 w-[200px] text-cream opacity-5 animate-floaty" />

      <div className="container-luxury text-cream">
        <motion.div {...fadeUp} className="mb-16 pb-4">
          <h2 className="font-serif text-4xl lg:text-[54px] lg:w-3/4 max-w-3xl leading-[1.1] tracking-wide text-white">
            From the Tandoor and Skillet.
          </h2>
          <div className="gold-divider mt-8"><span className="h-[2px] w-12 bg-gold" /> <span className="uppercase text-gold font-bold tracking-[0.2em] text-sm">A Feast for the Eyes</span></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {pieces.map((src, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              key={i}
              className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border border-white/10 relative cursor-crosshair bg-ink"
            >
              <img src={src} alt="Heritage Fine Dining Dish" loading="lazy" className="w-full h-full object-cover scale-105 transition-transform duration-[1s] ease-out group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- EXPERIENCE & CONTACT ---------------- */
function ExperienceContact() {
  const HOURS = [
    { d: "Monday — Thursday", t: "11:30 AM — 10:00 PM" },
    { d: "Friday — Saturday", t: "11:30 AM — 11:00 PM" },
    { d: "Sunday", t: "12:00 PM — 10:00 PM" },
  ];

  return (
    <section className="bg-cream">
      {/* Block 3: Dining Room */}
      <div className="grid lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="h-[400px] sm:h-[550px] lg:h-[700px] relative overflow-hidden">
          <img src={imgDining} alt="The Dining Room" loading="lazy" className="w-full h-full object-cover transition-transform duration-[30s] hover:scale-105" />
        </motion.div>
        <div className="bg-[#FFF8F1] flex flex-col justify-center items-start px-8 sm:px-16 py-20 lg:px-24">
          <motion.div {...fadeUp} className="w-full max-w-lg mx-auto lg:mx-0">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-burgundy mb-8 tracking-tight">The Dining Room</h2>
            <p className="text-ink/70 max-w-sm text-lg leading-relaxed font-light">
              Step into a sanctuary echoing ancient Indian palaces. Warm lighting, private enclaves, and an ambiance that perfectly complements your dining experience. A place purposely built for celebration.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Block 4: Catering */}
      <div className="grid lg:grid-cols-2">
        <div className="order-2 lg:order-1 bg-ink flex flex-col justify-center px-8 sm:px-16 py-20 lg:px-24 text-cream">
          <motion.div {...fadeUp} className="ml-auto w-full max-w-lg mx-auto lg:mx-0 lg:max-w-md">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl text-gold mb-8 mt-4 lg:mt-0 leading-tight">Catering for Every Occasion.</h2>
            <p className="text-white/60 max-w-sm text-lg leading-relaxed font-light mb-12">
              From lavish weddings to corporate events, we bring the authentic taste of Athidhi straight to your guests, served with the identical perfection of dining in.
            </p>
            <Link to="/catering" className="inline-flex px-10 py-3.5 rounded-full bg-gold text-ink shadow-[0_4px_30px_rgba(201,162,39,0.3)] hover:bg-cream hover:shadow-luxury transition-all duration-300 font-bold tracking-wide flex items-center gap-2">
              Request Catering <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="order-1 lg:order-2 h-[400px] sm:h-[550px] lg:h-[700px] relative overflow-hidden bg-ink">
          <div className="absolute inset-0 bg-ink/30 z-10 mix-blend-multiply" />
          <img src={imgCatering} alt="Athidi Catering" loading="lazy" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-105 opacity-90" />
        </motion.div>
      </div>

      {/* Block 5: Visit Athidi */}
      <div id="contact" className="grid lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="h-[400px] sm:h-[550px] lg:h-[700px] relative overflow-hidden bg-ink/5">
          <img src={imgAthidi} alt="Visit Athidi" loading="lazy" className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110" />
        </motion.div>
        <div className="bg-[#FFF8F1] flex flex-col justify-center items-start px-8 sm:px-16 py-20 lg:px-24">
          <motion.div {...fadeUp} className="w-full max-w-lg mx-auto lg:mx-0 pr-0 xl:pr-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-burgundy mb-12 tracking-tight">Visit Athidhi</h2>

            <div className="space-y-8 lg:space-y-10 w-full relative">
              <a href="https://share.google/2C63kGL2USEnvRBYr" target="_blank" rel="noreferrer" className="flex gap-6 items-start group cursor-pointer block">
                <div className="p-4 bg-burgundy rounded-2xl text-gold group-hover:scale-110 transition-transform shadow-sm"><MapPin className="h-6 w-6 stroke-[1.5]" /></div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-ink/40">Location</h4>
                  <p className="font-serif text-xl sm:text-2xl text-burgundy mt-2 font-medium group-hover:text-gold transition-colors">660 Plainsboro Rd<br />Plainsboro Township, NJ 08536</p>
                </div>
              </a>

              <div className="flex gap-6 items-start group">
                <div className="p-4 bg-burgundy rounded-2xl text-gold group-hover:scale-110 transition-transform shadow-sm"><Phone className="h-6 w-6 stroke-[1.5]" /></div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-ink/40">Reservations & Info</h4>
                  <p className="font-serif text-xl sm:text-2xl mt-2 font-medium"><a href="tel:+16097218960" className="text-burgundy hover:text-gold transition-colors">+1 609-721-8960</a></p>
                  <p className="font-serif text-xl sm:text-2xl mt-1 font-medium"><a href="mailto:athidhinj@gmail.com" className="text-burgundy hover:text-gold transition-colors">athidhinj@gmail.com</a></p>
                </div>
              </div>

              <div className="flex gap-6 items-start group pt-2">
                <div className="p-4 bg-burgundy rounded-2xl text-gold group-hover:scale-110 transition-transform shadow-sm"><Clock className="h-6 w-6 stroke-[1.5]" /></div>
                <div className="w-full">
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-ink/40 mb-4">Service Hours</h4>
                  <ul className="text-[15px] sm:text-base border-t border-burgundy/10 pt-1">
                    {HOURS.map((h, i) => (
                      <li key={i} className="flex justify-between py-3 border-b border-burgundy/10 items-center">
                        <span className="text-ink/60 font-light">{h.d}</span>
                        <span className="font-semibold text-burgundy tracking-wide">{h.t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
