import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Flame, Leaf, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Divider } from "@/components/Mandala";
import { CATEGORIES, getCategory } from "@/data/menu";

export const Route = createFileRoute("/menu/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.category;
    const title = c ? `${c.name} — Athidhi Menu` : "Menu — Athidhi";
    const desc = c ? `${c.tagline}. Explore ${c.items.length} dishes from our ${c.name} collection at Athidhi.` : "Explore the Athidhi menu.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-cream text-burgundy p-8 text-center">
      <div>
        <h1 className="font-serif text-5xl">Category not found</h1>
        <Link to="/" className="btn-primary mt-6 inline-flex">Back home</Link>
      </div>
    </div>
  ),
});

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: import("@/data/menu").MenuCategory };
  const idx = CATEGORIES.findIndex((c) => c.slug === category.slug);
  const prev = CATEGORIES[(idx - 1 + CATEGORIES.length) % CATEGORIES.length];
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-burgundy text-cream overflow-hidden">
        <Mandala className="pointer-events-none absolute -top-40 -left-40 w-[500px] text-gold opacity-[0.08] animate-spin-slower" />
        <Mandala className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] text-gold opacity-[0.06] animate-spin-slow" />

        <div className="container-luxury relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-soft hover:text-gold transition mb-6">
              <ArrowLeft className="h-3 w-3" /> Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-gold/30 bg-beige/50"
          >
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none"
          >
            {category.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-5 font-serif italic text-xl text-gold-soft max-w-xl mx-auto"
          >
            {category.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-8">
            <Divider className="opacity-70" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Mandala className="pointer-events-none absolute top-20 -right-20 w-[500px] text-burgundy opacity-25 animate-spin-slower" />
        <Mandala className="pointer-events-none absolute bottom-20 -left-40 w-[600px] text-burgundy opacity-25 animate-spin-slow" />
        <div className="container-luxury relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            {category.items.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-burgundy/10 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image placeholder */}
                  <div className="relative sm:w-52 shrink-0 aspect-video sm:aspect-auto sm:h-auto bg-gradient-to-br from-beige via-cream to-beige overflow-hidden">
                    <div className="absolute inset-0 grid place-items-center">
                      <Mandala className="w-40 text-burgundy opacity-[0.12] group-hover:opacity-25 group-hover:rotate-12 transition-all duration-[1500ms]" />
                    </div>
                    <div className="absolute inset-0 grid place-items-center opacity-40 group-hover:scale-110 transition-transform duration-700">
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                    </div>
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      {item.chefSpecial && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-burgundy text-cream text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                          <Sparkles className="h-2.5 w-2.5" /> Chef
                        </span>
                      )}
                      {item.bestSeller && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gold text-ink text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
                          <Flame className="h-2.5 w-2.5" /> Best Seller
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <h3 className="font-serif text-2xl text-burgundy leading-tight">{item.name}</h3>
                      </div>
                      <div className="font-serif text-2xl text-gold shrink-0">{item.price}</div>
                    </div>

                    <p className="mt-3 text-sm text-ink/60 leading-relaxed">{item.description}</p>

                    <div className="mt-6 flex items-center gap-3">
                      <button className="btn-primary text-xs !py-2 !px-4">
                        <Plus className="h-3.5 w-3.5" /> Add to Cart
                      </button>
                      <button className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-burgundy hover:text-gold transition">
                        View Details <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-20 grid gap-4 sm:grid-cols-2">
            <Link
              to="/menu/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-3xl border border-burgundy/10 bg-cream p-6 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold flex items-center gap-2">
                <ArrowLeft className="h-3 w-3" /> Previous
              </div>
              <div className="mt-2 flex items-center gap-3">
                <img src={prev.image} alt={prev.name} className="w-10 h-10 rounded-full object-cover shadow-soft" />
                <span className="font-serif text-2xl text-burgundy group-hover:text-gold transition">{prev.name}</span>
              </div>
            </Link>
            <Link
              to="/menu/$slug"
              params={{ slug: next.slug }}
              className="group rounded-3xl border border-burgundy/10 bg-cream p-6 hover:shadow-luxury hover:-translate-y-1 transition-all duration-500 sm:text-right"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold flex items-center gap-2 sm:justify-end">
                Next <ArrowRight className="h-3 w-3" />
              </div>
              <div className="mt-2 flex items-center gap-3 sm:justify-end">
                <span className="font-serif text-2xl text-burgundy group-hover:text-gold transition">{next.name}</span>
                <img src={next.image} alt={next.name} className="w-10 h-10 rounded-full object-cover shadow-soft" />
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="btn-gold">
              <Leaf className="h-4 w-4" /> Explore all categories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
