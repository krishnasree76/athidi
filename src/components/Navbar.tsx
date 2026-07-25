import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoSrc from "@/assets/logo.png";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#categories", label: "Menu" },
  { to: "/#gallery", label: "Gallery" },
  { to: "/#reviews", label: "Reviews" },
  { to: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-cream/80 border-b border-burgundy/10 shadow-[0_10px_40px_-20px_rgba(91,11,19,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxury flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoSrc} alt="Athidhi" className="h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-xl text-burgundy tracking-wide">ATHIDHI</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Devo Bhava</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="relative text-sm font-medium text-ink/80 hover:text-burgundy transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a href="#reserve" className="btn-gold text-sm">Reserve Table</a>
            <a href="#reserve" className="btn-primary text-sm">Order Online</a>
          </div>

          <Link to="/cart" className="relative p-2 text-ink/80 hover:text-burgundy transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-gold text-ink text-[10px] font-bold flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex flex-col gap-1.5 p-2"
          >
            <span className={`h-0.5 w-6 bg-burgundy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-burgundy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-burgundy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-burgundy/10 bg-cream/95 backdrop-blur-xl">
          <div className="container-luxury py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="text-lg text-ink/80 hover:text-burgundy">
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#reserve" className="btn-gold text-sm flex-1">Reserve</a>
              <a href="#reserve" className="btn-primary text-sm flex-1">Order</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
