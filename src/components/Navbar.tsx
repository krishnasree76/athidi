import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoSrc from "@/assets/logo.png";
import { ShoppingCart, Menu as MenuIcon, ChevronDown } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { itemCount } = useCart();

  const location = useLocation();
  const isMenu = location.pathname.includes('/menu');
  const isCart = location.pathname.includes('/cart');

  useEffect(() => {
    setIsMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 backdrop-blur-xl bg-cream/95 border-b border-burgundy/10 shadow-sm">
        <div className="px-4 sm:px-6 lg:px-12 flex items-center justify-between py-3">
          
          {/* LEFT: Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Increased size for visibility without text. Scales down slightly on /menu to prevent collision */}
            <img src={logoSrc} alt="Athidhi" className={`${isMenu ? "h-12 sm:h-16 lg:h-20" : "h-20 sm:h-24 lg:h-28"} w-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-md`} />
          </Link>

          {/* RIGHT: Desktop Grouped Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Semi-transparent black pill box */}
            <nav className="bg-ink/80 backdrop-blur-md rounded-full px-6 py-2.5 flex items-center gap-6 shadow-lg border border-white/10">
              <Link to="/menu" className="text-sm font-medium text-cream hover:text-gold transition-colors">Menu</Link>
              <Link to="/banquet" className="text-sm font-medium text-cream hover:text-gold transition-colors">Banquet</Link>
              <Link to="/catering" className="text-sm font-medium text-cream hover:text-gold transition-colors">Catering</Link>
              <Link to="/about" className="text-sm font-medium text-cream hover:text-gold transition-colors">Our Story</Link>
              
              <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                 <button className="text-sm font-medium text-cream hover:text-gold transition-colors flex items-center gap-1 py-1">
                   More <ChevronDown className="h-3 w-3" />
                 </button>
                 {moreOpen && (
                   <div className="absolute top-full right-0 mt-1 w-32 bg-ink/90 backdrop-blur-xl rounded-xl p-2 shadow-xl border border-white/10 flex flex-col gap-1">
                     <Link to="/gallery" className="text-sm text-cream hover:bg-white/10 px-3 py-2 rounded-lg transition">Gallery</Link>
                     <a href="/#contact" className="text-sm text-cream hover:bg-white/10 px-3 py-2 rounded-lg transition">Contact</a>
                   </div>
                 )}
              </div>
            </nav>

            {/* Cart Icon Desktop */}
            <Link to="/cart" className="relative p-2.5 bg-ink/5 hover:bg-ink/10 rounded-full transition-colors text-ink">
               <ShoppingCart className="h-5 w-5" />
               {isMounted && itemCount > 0 && (
                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-burgundy text-cream text-[10px] font-bold flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                   {itemCount}
                 </span>
               )}
            </Link>

            {/* Outlined Sign In Pill */}
            <Link to="/auth" className="border border-ink text-ink hover:bg-ink hover:text-cream px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm">
              Sign In
            </Link>

            {/* Primary Order Online Pill */}
            <Link to="/menu" className="bg-[#C89B3C] hover:bg-[#b08530] text-ink px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md flex items-center gap-1">
               Order online &rsaquo;
            </Link>
          </div>

          {/* MOBILE VIEW RIGHT SIDE */}
          <div className="flex lg:hidden items-center gap-3">
             <Link to="/cart" className="relative p-2 text-ink">
               <ShoppingCart className="h-6 w-6" />
               {isMounted && itemCount > 0 && (
                 <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-burgundy text-cream text-[10px] font-bold flex items-center justify-center">
                   {itemCount}
                 </span>
               )}
             </Link>
             
             {/* Rounded toggle button Menu */}
             <button
               onClick={() => setOpen(!open)}
               className="flex items-center gap-1.5 bg-ink text-cream px-4 py-2 rounded-full font-medium text-sm transition-transform active:scale-95 shadow-md"
             >
                Menu <MenuIcon className="h-4 w-4" />
             </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
           <div className="lg:hidden border-t border-burgundy/10 bg-cream/95 backdrop-blur-xl absolute w-full left-0 shadow-lg">
             <div className="px-6 py-6 flex flex-col gap-5">
               <Link to="/menu" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Menu</Link>
               <Link to="/banquet" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Banquet</Link>
               <Link to="/catering" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Catering</Link>
               <Link to="/about" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Our Story</Link>
               <Link to="/gallery" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Gallery</Link>
               <a href="/#contact" onClick={() => setOpen(false)} className="text-lg font-serif text-ink tracking-wide block">Contact Us</a>
               
               {/* Sign In in menu for mobile */}
               <Link to="/auth" onClick={() => setOpen(false)} className="border border-ink text-ink text-center px-4 py-3 mt-4 rounded-xl text-lg font-bold w-full bg-ink/5 block">
                 Sign In
               </Link>
             </div>
           </div>
        )}
      </header>

      {/* MOBILE STICKY BOTTOM BAR */}
      {!isCart && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 p-4 pb-6 bg-gradient-to-t from-cream via-cream/90 to-transparent pointer-events-none">
           <div className="pointer-events-auto">
             <Link to={isMenu ? "/cart" : "/menu"} className="block w-[200px] mx-auto text-center bg-[#C89B3C] hover:bg-[#b08530] text-ink py-2.5 rounded-full text-sm font-bold shadow-[0_10px_30px_rgba(200,155,60,0.5)] active:scale-[0.98] transition-transform">
               {isMenu ? "Checkout" : "Order online"}
             </Link>
           </div>
        </div>
      )}
    </>
  );
}
