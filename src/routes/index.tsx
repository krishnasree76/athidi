import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, Utensils, Leaf, Heart, Award, Users, Sparkles, QrCode, Scan, ShoppingBag, Smile, Phone, MapPin, Mail, Clock, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Divider, Paisley, Lotus } from "@/components/Mandala";
import { CATEGORIES } from "@/data/menu";
import logoAsset from "@/assets/athidhi-logo.png.asset.json";
import imgSignatureBiryani from "@/assets/HyderabadiChickenDumBiryani.png";
import imgSignatureMangoLassi from "@/assets/mangolassi.png";

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
      <About />
      <Categories />
      <Signature />
      <WhyUs />
      <Reviews />
      <QROrdering />
      <Reserve />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-[floaty_20s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/95" />

      <div className="pointer-events-none absolute inset-0 text-gold/40">
        <Mandala className="absolute -top-24 -left-24 w-[420px] opacity-[0.08] animate-spin-slower" />
        <Mandala className="absolute -bottom-40 -right-32 w-[560px] opacity-[0.06] animate-spin-slow" />
        <Paisley className="absolute top-1/4 right-10 w-24 opacity-[0.08] animate-floaty" />
        <Paisley className="absolute bottom-1/4 left-10 w-24 opacity-[0.08] animate-floaty -scale-x-100" />
      </div>

      <div className="container-luxury relative z-10 text-center text-cream py-32">
        {/* <motion.img
          src={logoAsset.url}
          alt="Athidhi"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto h-28 sm:h-36 w-auto mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        /> */}
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
          Athidhi Devo Bhava
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
          <a href="#reserve" className="btn-primary">Reserve Table <ArrowRight className="h-4 w-4" /></a>
          <a href="#categories" className="btn-ghost-cream">View Menu</a>
          <a href="#reserve" className="btn-gold">Order Online</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cream/60 text-xs uppercase tracking-[0.3em]"
        >
          Scroll
          <ChevronDown className="h-4 w-4 mt-1 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 overflow-hidden text-ink">
      <Mandala className="pointer-events-none absolute -top-32 -right-40 w-[500px] text-burgundy opacity-25 animate-spin-slower" />
      <Mandala className="pointer-events-none absolute bottom-0 -left-64 w-[600px] text-burgundy opacity-25 animate-spin-slow" />

      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div {...fadeUp} className="space-y-6">
          <div className="gold-divider"><span className="h-px w-8 bg-gold" /> Our Story</div>
          <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-[1.05]">
            The guest is <em className="text-gold not-italic">divine</em>.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed">
            In the ancient Sanskrit teachings of the Taittiriya Upanishad, a single verse became the heart of Indian hospitality — <em>Athidhi Devo Bhava</em>. The guest is a form of the divine.
          </p>
          <p className="text-ink/70 leading-relaxed">
            At Athidhi, this belief guides every plate we serve. Our chefs draw from generations of home kitchens across Hyderabad, Chettinad, Kerala and the Ganges plains, transforming heritage recipes into a modern tasting experience — without ever losing the soul.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-burgundy/10">
            {[
              { k: "15+", v: "Years of craft" },
              { k: "120+", v: "Heritage recipes" },
              { k: "9.6", v: "Guest rating" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-serif text-4xl text-burgundy">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-ink/50 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-luxury">
                <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl shadow-soft">
                <img src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80" alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
            </div>
            <div className="space-y-4 mt-10">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-soft">
                <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80" alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-luxury">
                <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80" alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-burgundy text-cream rounded-2xl px-6 py-4 shadow-luxury">
            <div className="font-serif text-2xl">Est. 2009</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Plainsboro, NJ</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES (homepage menu preview) ---------------- */
function Categories() {
  return (
    <section id="categories" className="relative py-28 lg:py-40 bg-beige overflow-hidden">
      <Lotus className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-64 text-burgundy opacity-25" />
      <Mandala className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] text-burgundy opacity-25 animate-spin-slower" />

      <div className="container-luxury relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-divider justify-center mb-5"><span className="h-px w-8 bg-gold" /> The Menu <span className="h-px w-8 bg-gold" /></div>
          <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-tight">Choose your journey</h2>
          <p className="mt-4 text-ink/60 text-lg">Twelve heritage collections, each a doorway into a different corner of India. Select a category to explore its full menu.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.2, 0.9, 0.3, 1] }}
            >
              <Link
                to="/menu/$slug"
                params={{ slug: c.slug }}
                className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-cream border border-burgundy/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxury hover:border-gold/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-burgundy/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Mandala className="pointer-events-none absolute -right-10 -bottom-10 w-40 text-burgundy opacity-25 group-hover:opacity-40 group-hover:rotate-45 transition-all duration-[1500ms]" />

                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-beige/50">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>

                <h3 className="relative font-serif text-3xl text-burgundy leading-tight">{c.name}</h3>
                <p className="relative mt-2 text-sm text-ink/60 leading-relaxed flex-1">{c.tagline}</p>

                <div className="relative mt-8 flex justify-end">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy group-hover:text-gold transition-colors">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SIGNATURE DISHES ---------------- */
const SIGNATURES = [
  { name: "Hyderabadi Chicken Dum Biryani", tag: "Chef Special", img: imgSignatureBiryani },
  { name: "Paneer Butter Masala", tag: "Best Seller", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80" },
  { name: "Masala Dosa", tag: "Heritage", img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80" },
  { name: "Chicken 65", tag: "Chef Special", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80" },
  { name: "Mango Lassi", tag: "Signature", img: imgSignatureMangoLassi },
  { name: "Apricot Delight", tag: "Best Seller", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1000&q=80" },
];

function Signature() {
  return (
    <section id="gallery" className="relative py-28 lg:py-40 overflow-hidden">
      <Mandala className="pointer-events-none absolute -top-40 -right-40 w-[600px] text-burgundy opacity-25 animate-spin-slower" />
      <div className="container-luxury relative z-10">
        <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> Signature Plates</div>
            <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-tight max-w-xl">Dishes that define us</h2>
          </div>
          <p className="text-ink/60 max-w-md">Handpicked by our head chef — the plates guests return for, generation after generation.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SIGNATURES.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-ink shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/95 text-ink px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  <Sparkles className="h-3 w-3" /> {s.tag}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gold-soft">View dish</span>
                  <ArrowRight className="h-4 w-4 text-gold-soft transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
const WHY = [
  { Icon: Leaf, title: "Fresh Ingredients", body: "Sourced daily from local farms and heritage spice merchants." },
  { Icon: Heart, title: "Authentic Taste", body: "Recipes passed down through generations, cooked with reverence." },
  { Icon: Award, title: "Luxury Dining", body: "A cinematic setting inspired by India's grand palaces and courtyards." },
  { Icon: Users, title: "Family Friendly", body: "Warm, unhurried hospitality for every guest — young and old." },
  { Icon: Utensils, title: "Experienced Chefs", body: "Masters trained in Hyderabad, Chettinad, and Delhi's finest kitchens." },
  { Icon: Sparkles, title: "Premium Service", body: "Attentive, elegant, and never intrusive — the way it should be." },
];

function WhyUs() {
  return (
    <section className="relative py-28 lg:py-40 bg-burgundy text-cream overflow-hidden">
      <Mandala className="pointer-events-none absolute -top-40 -left-40 w-[500px] text-gold opacity-20 animate-spin-slower" />
      <Mandala className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] text-gold opacity-20 animate-spin-slow" />

      <div className="container-luxury relative">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-divider justify-center mb-4 text-gold-soft"><span className="h-px w-8 bg-gold-soft" /> The Athidhi Difference <span className="h-px w-8 bg-gold-soft" /></div>
          <h2 className="font-serif text-5xl lg:text-6xl leading-tight">Why guests return</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative rounded-3xl border border-cream/15 bg-cream/[0.03] p-8 backdrop-blur-sm hover:bg-cream/[0.06] hover:border-gold/40 transition-all duration-500"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold group-hover:bg-gold group-hover:text-ink transition-all duration-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl text-cream">{title}</h3>
              <p className="mt-2 text-sm text-cream/60 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
const REVIEWS = [
  { name: "Priya Sharma", body: "The Hyderabadi biryani transported me straight to my grandmother's kitchen. Immaculate service, breathtaking room.", loc: "Princeton, NJ" },
  { name: "Michael Chen", body: "Easily the finest Indian dining experience on the East Coast. Every course was a story.", loc: "New York, NY" },
  { name: "Ananya Patel", body: "The Apricot Delight is unforgettable. Athidhi treats you like royalty from the moment you arrive.", loc: "Edison, NJ" },
  { name: "David Rossi", body: "Warm hospitality, thoughtful pairings, and dishes I still dream about weeks later.", loc: "Philadelphia, PA" },
];

function Reviews() {
  return (
    <section id="reviews" className="relative py-28 lg:py-40 bg-beige overflow-hidden">
      <Mandala className="pointer-events-none absolute top-10 -left-32 w-[500px] text-burgundy opacity-25 animate-spin-slow" />
      <div className="container-luxury relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-divider justify-center mb-4"><span className="h-px w-8 bg-gold" /> Guest Voices <span className="h-px w-8 bg-gold" /></div>
          <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-tight">Words from our table</h2>
        </motion.div>

        <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
          <motion.div
            className="flex gap-6 items-stretch flex-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="w-[350px] sm:w-[450px] shrink-0 relative rounded-3xl bg-cream border border-burgundy/10 p-10 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex text-gold mb-5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-xl text-ink leading-relaxed">"{r.body}"</p>
                <div className="mt-6 pt-6 border-t border-burgundy/10 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-burgundy">{r.name}</div>
                    <div className="text-xs uppercase tracking-widest text-ink/50 mt-1">{r.loc}</div>
                  </div>
                  <div className="h-12 w-12 rounded-full grid place-items-center bg-burgundy text-cream font-serif text-lg">
                    {r.name[0]}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QR ORDERING ---------------- */
const STEPS = [
  { Icon: Scan, title: "Scan", body: "Point your camera at the QR at your table." },
  { Icon: Utensils, title: "Browse", body: "Explore our full menu with photos and pairings." },
  { Icon: ShoppingBag, title: "Order", body: "Add favorites — no waiting, no fuss." },
  { Icon: Smile, title: "Enjoy", body: "Sit back. Your feast begins its journey." },
];

function QROrdering() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <Paisley className="pointer-events-none absolute top-20 right-10 w-32 text-burgundy opacity-25 animate-floaty" />
      <Mandala className="pointer-events-none absolute -bottom-32 -left-40 w-[600px] text-burgundy opacity-25 animate-spin-slow" />

      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div {...fadeUp} className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-5">
            {STEPS.map(({ Icon, title, body }, i) => (
              <div key={title} className="group rounded-3xl border border-burgundy/10 bg-cream p-7 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-11 w-11 grid place-items-center rounded-xl bg-burgundy text-gold group-hover:bg-gold group-hover:text-burgundy transition-all duration-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-serif text-3xl text-gold/60">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h4 className="font-serif text-xl text-burgundy">{title}</h4>
                <p className="text-sm text-ink/60 mt-1">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="order-1 lg:order-2">
          <div className="gold-divider mb-4"><span className="h-px w-8 bg-gold" /> QR Ordering</div>
          <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-tight">Order at your own pace.</h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            Every table at Athidhi carries a discreet golden QR code — the fastest way to browse our full menu, pair a wine, and send your order straight to the kitchen without lifting a hand.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-burgundy/10 bg-beige px-5 py-4">
            <div className="h-14 w-14 grid place-items-center rounded-xl bg-burgundy text-gold">
              <QrCode className="h-7 w-7" />
            </div>
            <div>
              <div className="font-serif text-lg text-burgundy">Tableside Menu</div>
              <div className="text-xs uppercase tracking-widest text-ink/50">No app. No sign-in. Just tap.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- RESERVE CTA ---------------- */
function Reserve() {
  return (
    <section id="reserve" className="relative py-32 overflow-hidden bg-ink text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <Mandala className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] text-gold opacity-[0.08] animate-spin-slower" />

      <div className="container-luxury relative text-center max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <div className="gold-divider justify-center mb-5 text-gold-soft"><span className="h-px w-8 bg-gold-soft" /> Reserve a Table <span className="h-px w-8 bg-gold-soft" /></div>
          <h2 className="font-serif text-5xl lg:text-7xl leading-tight">A seat at Athidhi awaits.</h2>
          <p className="mt-6 text-cream/70 text-lg">
            Whether it's a quiet dinner for two or a celebration of your closest circle — we would be honored to host you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="tel:+16097218960" className="btn-primary">Reserve Table</a>
            <a href="tel:+16097218960" className="btn-ghost-cream"><Phone className="h-4 w-4" /> Call +1 609-721-8960</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
const HOURS = [
  { d: "Monday — Thursday", t: "11:30 AM — 10:00 PM" },
  { d: "Friday — Saturday", t: "11:30 AM — 11:00 PM" },
  { d: "Sunday", t: "12:00 PM — 10:00 PM" },
];

function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      <Mandala className="pointer-events-none absolute -top-40 -left-64 w-[600px] text-burgundy opacity-25 animate-spin-slower" />
      <Mandala className="pointer-events-none absolute bottom-0 -right-40 w-[500px] text-burgundy opacity-25 animate-spin-slow" />

      <div className="container-luxury relative z-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="gold-divider justify-center mb-4"><span className="h-px w-8 bg-gold" /> Visit Us <span className="h-px w-8 bg-gold" /></div>
          <h2 className="font-serif text-5xl lg:text-6xl text-burgundy leading-tight">Find your way to Athidhi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div {...fadeUp} className="lg:col-span-2 space-y-4">
            {[
              { Icon: MapPin, title: "Address", body: "660 Plainsboro Rd\nPlainsboro Township, NJ 08536", href: "https://share.google/2C63kGL2USEnvRBYr" },
              { Icon: Phone, title: "Phone", body: "+1 609-721-8960", href: "tel:+16097218960" },
              { Icon: Mail, title: "Email", body: "athidhinj@gmail.com", href: "mailto:athidhinj@gmail.com" },
            ].map(({ Icon, title, body, href }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer" className="group flex gap-5 rounded-3xl border border-burgundy/10 bg-cream p-6 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500">
                <div className="h-12 w-12 shrink-0 grid place-items-center rounded-2xl bg-burgundy text-gold group-hover:bg-gold group-hover:text-burgundy transition-all duration-500">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">{title}</div>
                  <div className="mt-1 font-serif text-lg text-burgundy whitespace-pre-line">{body}</div>
                </div>
              </a>
            ))}

            <div className="rounded-3xl border border-burgundy/10 bg-cream p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-gold" />
                <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Opening Hours</div>
              </div>
              <ul className="space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.d} className="flex justify-between border-b border-burgundy/5 pb-2 last:border-0">
                    <span className="text-ink/70">{h.d}</span>
                    <span className="font-semibold text-burgundy">{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-3 overflow-hidden rounded-3xl border border-burgundy/10 shadow-soft min-h-[500px]">
            <iframe
              title="Athidhi Map"
              src="https://www.google.com/maps?q=660+Plainsboro+Rd,+Plainsboro,+NJ+08536&output=embed"
              className="h-full w-full min-h-[500px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
