import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/hooks/use-cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala } from "@/components/Mandala";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { items, updateQuantity, removeItem, itemCount } = useCart();

  const subtotal = items.reduce((acc, item) => {
    const val = parseFloat((item.price || "0").replace(/[^0-9.]/g, ""));
    return acc + (isNaN(val) ? 0 : val) * item.quantity;
  }, 0);

  const tax = subtotal * 0.06625; // NJ Tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col pt-24">
      <Navbar />

      <main className="flex-1 container-luxury py-12 relative">
        <Mandala className="pointer-events-none absolute top-0 right-0 w-[400px] text-burgundy opacity-5 -translate-y-1/4 translate-x-1/4" />

        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-ink/70 hover:text-burgundy transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Menu
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl text-burgundy">Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-burgundy/10 shadow-soft">
            <h2 className="font-serif text-2xl text-ink mb-4">Your cart is empty</h2>
            <p className="text-ink/60 mb-8 max-w-md mx-auto">Explore our menu to find your next unforgettable meal.</p>
            <Link to="/#categories" className="btn-primary inline-flex">Go to Menu</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    key={item.name}
                    className="flex gap-4 sm:gap-6 bg-white p-4 sm:p-6 rounded-3xl border border-burgundy/10 shadow-soft relative"
                  >
                    <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-beige">
                      <img src={item.categoryImage} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl text-burgundy leading-tight">{item.name}</h3>
                          <p className="text-sm text-ink/60 mt-1 line-clamp-1">{item.description}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-ink/40 hover:text-red-500 transition-colors p-2 -mr-2 -mt-2 shrink-0"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-beige rounded-full p-1 border border-burgundy/10">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ink hover:text-burgundy hover:shadow-soft transition-all"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ink hover:text-burgundy hover:shadow-soft transition-all"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="font-serif text-lg text-gold font-medium">
                          ${(parseFloat((item.price || "0").replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-burgundy/10 shadow-luxury sticky top-32">
                <h3 className="font-serif text-2xl text-burgundy mb-6">Order Summary</h3>
                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-ink/70">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink/70">Estimated Tax (6.625%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-burgundy/10 flex justify-between items-center">
                    <span className="font-serif text-xl text-burgundy">Total</span>
                    <span className="font-serif text-xl text-gold">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="btn-primary w-full justify-center">Proceed to Checkout</button>
                <div className="mt-4 text-center">
                   <p className="text-[10px] uppercase tracking-widest text-ink/40">Secure Checkout</p>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
