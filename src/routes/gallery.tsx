import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Paisley } from "@/components/Mandala";

// Asset imports
import imgHero from "@/assets/gallery/Hero.jpg";
import imgDining from "@/assets/gallery/dinningroom.JPG";
import imgCatering from "@/assets/gallery/Tikkaa.JPG";

// Gallery Plating Assets
import plate1 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_HyderabadiGoatDumBiryani.jpg";
import plate2 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Chicken65.jpg";
import plate3 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_StuffedMirchiBajji.jpg";
import plate4 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_CashewMuttonRoast.jpg";
import plate5 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_ChickenTikkaMasala.jpg";
import plate6 from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Dosa.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Athidhi Indian Restaurant" },
      { name: "description", content: "A visual journey of our culinary expertise and stunning dining environment." },
    ],
  }),
  component: GalleryPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

function GalleryPage() {
  const plates = [
    { src: plate1, alt: "Hyderabadi Goat Dum Biryani" },
    { src: plate2, alt: "Chicken 65" },
    { src: plate3, alt: "Stuffed Mirchi Bajji" },
    { src: plate4, alt: "Cashew Mutton Roast" },
    { src: plate5, alt: "Chicken Tikka Masala" },
    { src: plate6, alt: "Signature Dosa" },
  ];

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* ---------------- HERO SECTION (50/50 SPLIT) ---------------- */}
      <section className="relative min-h-[100svh] flex flex-col md:flex-row pt-20 md:pt-0 overflow-hidden bg-ink">
        <div className="w-full h-[50vh] md:h-screen md:w-1/2 relative">
          <img 
            src={imgHero} 
            alt="Athidhi Signature Presentation" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden bg-ink">
           {/* Decorative elements */}
           <Mandala className="pointer-events-none absolute -top-40 -right-40 w-[600px] text-gold opacity-[0.05] animate-spin-slow" />
           <Paisley className="pointer-events-none absolute bottom-1/4 left-10 w-24 text-gold opacity-[0.1] -scale-x-100 animate-floaty" />
           
           <motion.div {...fadeUp} className="text-center z-10 w-full max-w-xl">
             <div className="gold-divider justify-center mb-6 text-gold-soft">
               <span className="h-px w-8 bg-gold-soft" />
               Visual Experience
               <span className="h-px w-8 bg-gold-soft" />
             </div>
             <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream mb-6">
                Food Worth Looking at Twice
             </h1>
             <p className="text-cream/70 text-lg leading-relaxed font-light">
                Discover the vibrant culinary heritage of the Indian subcontinent visually. Every dish is cooked with reverence, plated elegantly, and designed to thrill both the palate and the eye.
             </p>
           </motion.div>
        </div>
      </section>

      {/* ---------------- GALLERY SECTION "ON THE PLATE" ---------------- */}
      <section className="relative py-24 lg:py-32 bg-burgundy overflow-hidden">
        <Mandala className="pointer-events-none absolute -bottom-40 -left-64 w-[800px] text-gold opacity-10 animate-spin-slower" />
        
        <div className="container-luxury mx-auto relative z-10 px-6 lg:px-12">
          <motion.div {...fadeUp} className="mb-16 max-w-2xl">
            <h2 className="font-serif text-5xl lg:text-6xl text-cream leading-tight mb-4">
              On the Plate
            </h2>
            <div className="h-px w-24 bg-gold mb-6" />
            <p className="text-cream/70 text-lg leading-relaxed font-light">
               Heritage recipes transformed into a visual feast.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {plates.map((plate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-[12px] aspect-[4/3] overflow-hidden bg-ink/20 shadow-lg cursor-pointer"
              >
                <img 
                  src={plate.src} 
                  alt={plate.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <h3 className="text-cream font-serif text-xl sm:text-2xl">{plate.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURE BLOCK 1: THE DINING ROOM ---------------- */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[70vh] bg-[#FFF8F1]">
        <div className="order-1 md:order-1 h-[400px] md:h-auto overflow-hidden">
           <img 
             src={imgDining} 
             alt="The Dining Room" 
             className="w-full h-full object-cover" 
           />
        </div>
        <div className="order-2 md:order-2 flex flex-col justify-center items-start p-12 lg:p-24 relative overflow-hidden">
           <motion.div {...fadeUp} className="max-w-xl">
              <div className="gold-divider mb-4 text-gold"><span className="h-px w-8 bg-gold" /> Ambience</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-[#1B0B0D] leading-tight mb-8">
                The Dining Room
              </h2>
              <p className="text-[#1B0B0D]/75 text-lg leading-relaxed font-light mb-6">
                 A cinematic setting inspired by India's grand palaces and majestic courtyards. Experience luxurious comfort where warm lighting and sophisticated decor weave a welcoming atmosphere.
              </p>
              <p className="text-[#1B0B0D]/75 text-lg leading-relaxed font-light">
                 Our dining space invites you to relax into an unhurried culinary journey, treating every guest as royalty in true <em>Athidhi Devo Bhava</em> spirit.
              </p>
           </motion.div>
        </div>
      </section>

      {/* ---------------- FEATURE BLOCK 2: CATERING & EVENTS ---------------- */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[70vh] bg-[#F7F1E8]">
        <div className="order-2 md:order-1 flex flex-col justify-center items-start p-12 lg:p-24 relative overflow-hidden">
           <motion.div {...fadeUp} className="max-w-xl md:ml-auto">
              <div className="gold-divider mb-4 text-gold"><span className="h-px w-8 bg-gold" /> Grand Celebrations</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-[#1B0B0D] leading-tight font-bold mb-8">
                 Catering & Events
              </h2>
              <p className="text-[#1B0B0D]/75 text-lg leading-relaxed font-light mb-6">
                 Elevate your special moments. From intimate familial milestones to lavish corporate galas, our team crafts extraordinary menus specialized to your celebration.
              </p>
              <p className="text-[#1B0B0D]/75 text-lg leading-relaxed font-light">
                 Impeccable service tailored for large-scale banquets and on-location catering ensures that your guests experience the authentic, rich heritage of our kitchen wherever they are.
              </p>
           </motion.div>
        </div>
        <div className="order-1 md:order-2 h-[400px] md:h-auto overflow-hidden">
           <img 
             src={imgCatering} 
             alt="Catering & Events" 
             className="w-full h-full object-cover" 
           />
        </div>
      </section>

      <Footer />
    </div>
  );
}
