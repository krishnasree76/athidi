import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Mandala } from "./Mandala";
import logoSrc from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] text-gold">
        <Mandala className="absolute -top-32 -left-32 w-[500px] animate-spin-slower" />
        <Mandala className="absolute -bottom-40 -right-32 w-[600px] animate-spin-slow" />
      </div>

      <div className="container-luxury relative py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <img src={logoSrc} alt="Athidhi" className="h-24 w-auto" />
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
            A sanctuary of Indian heritage cuisine, where every guest is welcomed as a form of the divine.
          </p>
          <div className="flex gap-3 pt-2">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/athidhinj/" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583672301199" },
              { Icon: Youtube, href: "https://www.youtube.com/@athidhinj" },
              { Icon: MessageCircle, href: "https://chat.whatsapp.com/IcHqylEyqdx14r0LewigHb" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center h-10 w-10 rounded-full border border-cream/20 text-cream/70 hover:text-ink hover:bg-gold hover:border-gold transition-all duration-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.3em] mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Menu", "Gallery", "Reservations", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.3em] mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />660 Plainsboro Rd, Plainsboro Township, NJ 08536</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />+1 609-721-8960</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />athidhinj@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.3em] mb-5">Newsletter</h4>
          <p className="text-sm text-cream/60 mb-4">Receive tasting menus, chef stories, and reservations.</p>
          {/* <form className="flex rounded-full border border-cream/20 overflow-hidden">
            <input type="email" placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-cream/40 focus:outline-none" />
            <button className="px-5 bg-gold text-ink text-xs uppercase tracking-widest font-semibold hover:bg-gold-soft transition">Join</button>
          </form> */}
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} Athidhi. All rights reserved.</span>
          <span className="tracking-[0.3em] uppercase text-gold/70">Athidhi Devo Bhava</span>
        </div>
      </div>
    </footer>
  );
}
