// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { Mandala, Paisley } from "@/components/Mandala";

// import imgHero from "@/assets/about/hero.JPG";
// import imgPodiIdly from "@/assets/about/Podi Idly.JPG";
// import imgIAML from "@/assets/about/IAML3728.JPG";
// import imgAthidhi from "@/assets/about/Photo from Athidhi Indian Restaurant.jpg";
// import imgChicTikka from "@/assets/about/Chic Tikka.JPG";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About Us — Athidhi Indian Restaurant" },
//       { name: "description", content: "Discover the story of Athidhi, our heritage recipes, and our commitment to authentic Indian hospitality." },
//     ],
//   }),
//   component: AboutPage,
// });

// const fadeUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
// };

// function AboutPage() {
//   return (
//     <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
//       <Navbar />

//       {/* ---------------- HERO ---------------- */}
//       <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center scale-105"
//           style={{ backgroundImage: `url('${imgHero}')` }}
//         />
//         <div className="absolute inset-0 bg-ink/70" />

//         <div className="pointer-events-none absolute inset-0 text-gold/30">
//           <Mandala className="absolute -bottom-32 -left-24 w-[420px] opacity-[0.1] animate-spin-slow" />
//           <Paisley className="absolute top-1/4 right-10 w-24 opacity-[0.15] animate-floaty" />
//         </div>

//         <div className="container-luxury relative z-10 text-center text-cream pt-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="gold-divider justify-center mb-6 text-gold-soft"
//           >
//             <span className="h-px w-10 bg-gold-soft" />
//             Our Heritage
//             <span className="h-px w-10 bg-gold-soft" />
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 1 }}
//             className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-none tracking-tight text-cream"
//           >
//             THE ATHIDHI STORY
//           </motion.h1>

//           <motion.p
//              initial={{ opacity: 0, y: 20 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ delay: 0.4, duration: 1 }}
//              className="mt-6 max-w-2xl mx-auto text-cream/80 text-lg sm:text-xl font-serif italic"
//           >
//              Embracing the soulful essence of the Asian subcontinent through revered culinary traditions.
//           </motion.p>
//         </div>
//       </section>

//       {/* ---------------- ZIG-ZAG GRID ---------------- */}
//       <section className="relative bg-beige py-20 lg:py-0">
//         <Mandala className="pointer-events-none absolute top-40 -right-40 w-[600px] text-burgundy opacity-20 animate-spin-slower z-0" />
//         <Mandala className="pointer-events-none absolute bottom-40 -left-40 w-[600px] text-burgundy opacity-20 animate-spin-slow z-0" />

//         <div className="relative z-10">

//           {/* Row 1: Image Left | Text Right */}
//           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
//             <div className="h-[400px] md:h-auto w-full order-1 md:order-1">
//                <img src={imgPodiIdly} alt="Our Story" className="h-full w-full object-cover" />
//             </div>
//             <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 bg-cream order-2 md:order-2">
//                <motion.div {...fadeUp} className="max-w-xl">
//                   <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> Our Story</div>
//                   <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-6">
//                     The guest is <em className="text-gold not-italic">divine</em>
//                   </h2>
//                   <p className="text-ink/75 text-lg leading-relaxed mb-4">
//                     In the ancient Sanskrit teachings of the Taittiriya Upanishad, a single verse became the heart of Indian hospitality — <em>Athidhi Devo Bhava</em>. The guest is a form of the divine.
//                   </p>
//                   <p className="text-ink/75 text-lg leading-relaxed">
//                     At Athidhi, this belief guides every plate we serve. Our chefs draw from generations of home kitchens across the Asian subcontinent, transforming authentic heritage recipes into a modern tasting experience — without ever losing the soul.
//                   </p>
//                </motion.div>
//             </div>
//           </div>

//           {/* Row 2: Text Left | Image Right */}
//           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
//             <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 bg-beige order-2 md:order-1">
//                <motion.div {...fadeUp} className="max-w-xl md:ml-auto">
//                   <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> Authentic Taste</div>
//                   <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-6">
//                     Fresh ingredients & heritage recipes
//                   </h2>
//                   <p className="text-ink/75 text-lg leading-relaxed mb-4">
//                     We source daily from local farms and heritage spice merchants, ensuring every dish carries the authentic taste of Indian tradition. 
//                   </p>
//                   <p className="text-ink/75 text-lg leading-relaxed">
//                     Masters trained in Hyderabad, Chettinad, and Delhi's finest kitchens cook these generational recipes with reverence. From slow-cooked dum biryani to richly spiced curries, experience the pinnacle of culinary art.
//                   </p>
//                </motion.div>
//             </div>
//             <div className="h-[400px] md:h-auto w-full order-1 md:order-2">
//                <img src={imgIAML} alt="Authentic Taste" className="h-full w-full object-cover" />
//             </div>
//           </div>

//           {/* Row 3: Image Left | Text Right */}
//           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
//             <div className="h-[400px] md:h-auto w-full order-1 md:order-1">
//                <img src={imgAthidhi} alt="Luxury Dining" className="h-full w-full object-cover" />
//             </div>
//             <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 bg-cream order-2 md:order-2">
//                <motion.div {...fadeUp} className="max-w-xl">
//                   <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> The Athidhi Difference</div>
//                   <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-6">
//                      Premium service & luxury dining
//                   </h2>
//                   <p className="text-ink/75 text-lg leading-relaxed mb-4">
//                     Attentive, elegant, and never intrusive — the way premium service should be. Immerse yourself in a cinematic setting inspired by India's grand palaces and courtyards.
//                   </p>
//                   <p className="text-ink/75 text-lg leading-relaxed">
//                     We offer warm, unhurried hospitality for every guest, making sure that your dining experience is as memorable as the flavors that grace your table.
//                   </p>
//                </motion.div>
//             </div>
//           </div>

//           {/* Row 4: Text Left | Image Right */}
//           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] bg-beige">
//             <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:p-24 order-2 md:order-1">
//                <motion.div {...fadeUp} className="max-w-xl md:ml-auto">
//                   <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> Celebrations</div>
//                   <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-6">
//                     Banquets & Catering
//                   </h2>
//                   <p className="text-ink/75 text-lg leading-relaxed mb-4">
//                     Whether you are planning an intimate family gathering or a lavish corporate event, Athidhi's banquet halls and specialized catering packages are designed to make your celebrations extraordinary.
//                   </p>
//                   <p className="text-ink/75 text-lg leading-relaxed">
//                     Bringing the finest Indian cuisine to your most cherished occasions, we tailor our menus and service to deliver an event that speaks volumes of luxury and grand hospitality.
//                   </p>
//                </motion.div>
//             </div>
//             <div className="h-[400px] md:h-auto w-full order-1 md:order-2">
//                <img src={imgChicTikka} alt="Banquets & Catering" className="h-full w-full object-cover" />
//             </div>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Paisley } from "@/components/Mandala";

import imgHero from "@/assets/about/hero.JPG";
import imgPodiIdly from "@/assets/about/Podi Idly.JPG";
import imgIAML from "@/assets/about/IAML3728.JPG";
import imgAthidhi from "@/assets/about/Photo from Athidhi Indian Restaurant.jpg";
import imgChicTikka from "@/assets/about/Chic Tikka.JPG";
import imgDosa from "@/assets/gallery/AthidhiIndianFineDineRestaurant_Dosa.jpg";
import imgBiryani from "@/assets/gallery/AthidhiIndianFineDineRestaurant_HyderabadiGoatDumBiryani.jpg";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Athidhi Indian Restaurant" },
      { name: "description", content: "Discover the story of Athidhi, our heritage recipes, and our commitment to authentic Indian hospitality." },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

const craftPillars = [
  {
    title: "Generational Recipes",
    subtitle: "Heritage Kitchens",
    description: "Recipes preserved over decades from home kitchens across Hyderabad, Chettinad, and Old Delhi.",
    image: imgDosa,
  },
  {
    title: "Artisanal Spices",
    subtitle: "Sourced at Origin",
    description: "Whole spices hand-picked from small-batch heritage spice merchants and freshly ground daily.",
    image: imgBiryani,
  },
  {
    title: "Royal Hospitality",
    subtitle: "Athidhi Devo Bhava",
    description: "Every guest is received as a divine presence with warm, unhurried, and meticulous service.",
    image: imgIAML,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${imgHero}')` }}
        />
        <div className="absolute inset-0 bg-ink/70" />

        <div className="pointer-events-none absolute inset-0 text-gold/30">
          <Mandala className="absolute -bottom-32 -left-24 w-[420px] opacity-[0.1] animate-spin-slow" />
          <Paisley className="absolute top-1/4 right-10 w-24 opacity-[0.15] animate-floaty" />
        </div>

        <div className="container-luxury relative z-10 text-center text-cream pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="gold-divider justify-center mb-6 text-gold-soft"
          >
            <span className="h-px w-10 bg-gold-soft" />
            Our Heritage
            <span className="h-px w-10 bg-gold-soft" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-none tracking-tight text-cream"
          >
            THE ATHIDHI STORY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 max-w-2xl mx-auto text-cream/80 text-lg sm:text-xl font-serif italic"
          >
            Embracing the soulful essence of the Asian subcontinent through revered culinary traditions.
          </motion.p>
        </div>
      </section>

      {/* ---------------- 2. EDITORIAL NARRATIVE SECTION ---------------- */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto relative">
        <Mandala className="pointer-events-none absolute -top-20 -right-20 w-[500px] text-burgundy/10 animate-spin-slower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Main Story Text (7 Columns) */}
          <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-[0.2em] text-xs">
              <span className="h-px w-8 bg-gold" />
              Sacred Philosophy
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-burgundy leading-[1.15]">
              The Guest is <span className="italic font-normal text-gold">Divine</span>
            </h2>

            <p className="text-ink/80 text-lg leading-relaxed font-light">
              In the ancient Sanskrit teachings of the Taittiriya Upanishad, a single verse became the foundation of Indian hospitality: <strong className="font-serif italic text-burgundy">Athidhi Devo Bhava</strong>. It proclaims that every guest who crosses our threshold should be treated with the same reverence given to the divine.
            </p>

            <p className="text-ink/75 text-base sm:text-lg leading-relaxed font-light">
              At Athidhi, this philosophy isn't just printed on our menus — it dictates every gesture, every warm welcome, and every aromatic dish that leaves our kitchen. We bridge traditional generational cooking with a refined, elevated dining atmosphere.
            </p>

            <div className="pt-4 border-t border-burgundy/10 flex items-center gap-6">
              <div className="font-serif text-xl italic text-burgundy">
                "Where ancient heritage meets modern luxury."
              </div>
            </div>
          </motion.div>

          {/* Overlapping Image Collage (5 Columns) */}
          <motion.div {...fadeUp} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white h-[420px]">
                <img src={imgPodiIdly} alt="Athidhi Culinary Dish" className="w-full h-full object-cover" />
              </div>

              {/* Floating secondary badge/card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 bg-beige border border-burgundy/10 p-6 rounded-2xl shadow-luxury max-w-[260px] hidden sm:block">
                <div className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Authentic Flavour</div>
                <div className="font-serif text-sm text-burgundy italic">Slow-cooked using daily-ground heritage spices.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ---------------- 3. PILLARS OF CRAFT GRID ---------------- */}
      <section className="bg-beige/60 py-24 border-y border-burgundy/5 relative">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-2">Our Culinary Foundation</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-burgundy">The Pillars of Athidhi</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {craftPillars.map((pillar, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="bg-cream rounded-[28px] overflow-hidden border border-burgundy/5 shadow-luxury flex flex-col group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-6 text-xs uppercase tracking-widest text-gold font-bold bg-burgundy/90 px-3 py-1 rounded-full backdrop-blur-md">
                    {pillar.subtitle}
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-burgundy mb-3">{pillar.title}</h3>
                    <p className="text-ink/70 text-sm leading-relaxed font-light">{pillar.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 4. PARALLAX QUOTE BANNER ---------------- */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${imgAthidhi}')` }}
        />
        <div className="absolute inset-0 bg-burgundy/85 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-cream">
          <Mandala className="w-24 h-24 mx-auto mb-6 text-gold/40 animate-spin-slow" />
          <h2 className="font-serif text-3xl sm:text-5xl leading-tight mb-6">
            "Every dish carries the spirit of our ancestors, crafted to leave a lasting memory on your palate."
          </h2>
          <div className="font-serif text-gold text-lg italic">— The Culinary Team at Athidhi</div>
        </div>
      </section>

      {/* ---------------- 5. BANQUETS & CATERING CALLOUT ---------------- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#FFF8F1] rounded-[36px] border border-burgundy/10 p-8 lg:p-16 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Grand Hospitality</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-burgundy">Banquets & Celebrations</h2>
            <p className="text-ink/75 text-lg leading-relaxed font-light">
              From intimate family dinners to lavish wedding receptions and corporate events, Athidhi brings royal Indian dining directly to your special occasions. Our customizable catering menus deliver an unforgettable feast.
            </p>
            <div className="pt-2">
              <Link
                to="/catering"
                className="inline-flex items-center gap-3 bg-burgundy text-cream px-8 py-4 rounded-full font-semibold text-sm hover:bg-gold hover:text-ink transition-all duration-300 shadow-md group"
              >
                Explore Catering Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="h-[320px] rounded-[28px] overflow-hidden border-2 border-white shadow-lg relative">
              <img src={imgChicTikka} alt="Catering Experience" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}