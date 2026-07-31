import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala, Paisley } from "@/components/Mandala";

// Assets
import imgHero from "@/assets/banquet/hero.jpg";
import imgBlock1 from "@/assets/banquet/20260606_141209.jpg";
import imgBlock2 from "@/assets/banquet/20260613_172248.jpg";

export const Route = createFileRoute("/banquet")({
  head: () => ({
    meta: [
      { title: "Banquets & Catering — Athidhi" },
      { name: "description", content: "Plan your grand celebrations and events at Athidhi." },
    ],
  }),
  component: BanquetPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

function BanquetPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, date, time, guests, details } = formData;
    
    // Construct WhatsApp message
    const message = `*New Banquet Enquiry*
    
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Event Date:* ${date}
*Time:* ${time}
*No. of Guests:* ${guests}

*Details/Questions:* 
${details}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/16097218960?text=${encodedMessage}`;
    
    // Redirect entirely or open new tab. 
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />

      {/* ---------------- HERO SECTION HTTP ---------------- */}
      <section className="relative min-h-[90svh] flex flex-col md:flex-row pt-20 md:pt-0 overflow-hidden bg-ink">
        <div className="w-full h-[50vh] md:h-screen md:w-1/2 relative">
          <img 
            src={imgHero} 
            alt="Hero Banquet" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 relative overflow-hidden bg-burgundy">
           <Mandala className="pointer-events-none absolute -bottom-40 -left-10 w-[600px] text-gold opacity-[0.1] animate-spin-slow" />
           <Paisley className="pointer-events-none absolute top-1/4 right-10 w-24 text-gold opacity-[0.15] animate-floaty" />
           
           <motion.div {...fadeUp} className="text-center z-10 w-full max-w-xl">
             <div className="gold-divider justify-center mb-6 text-gold-soft">
               <span className="h-px w-8 bg-gold-soft" />
               Host Your
               <span className="h-px w-8 bg-gold-soft" />
             </div>
             <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-cream mb-6">
                Grand Celebrations
             </h1>
             <p className="text-cream/75 text-lg leading-relaxed font-light">
                Whether you are planning an intimate birthday party, a romantic anniversary, a magnificent wedding reception, or corporate events, Athidhi provides the ultimate setting for memorable festivities. 
             </p>
           </motion.div>
        </div>
      </section>

      {/* ---------------- INFO BLOCK 1 ---------------- */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[70vh] bg-beige">
        <div className="order-2 md:order-1 flex flex-col justify-center items-start p-12 lg:p-24 relative overflow-hidden">
           <motion.div {...fadeUp} className="max-w-xl md:ml-auto">
              <div className="gold-divider mb-4 text-burgundy"><span className="h-px w-8 bg-burgundy/50" /> Layout & Ambience</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-8">
                The Perfect Venue
              </h2>
              <p className="text-ink/80 text-lg leading-relaxed font-light mb-6">
                 Our exquisitely structured banquet spaces are fully customizable to align with your personal vision. Adorned with luxury Indian heritage architectural notes, we cater to large guest lists without ever substituting comfort.
              </p>
              <p className="text-ink/80 text-lg leading-relaxed font-light">
                 Enjoy high-ceilings, dedicated event staging areas, and spacious dining floors meticulously decorated to create a brilliant, immersive experience.
              </p>
           </motion.div>
        </div>
        <div className="order-1 md:order-2 h-[400px] md:h-auto overflow-hidden">
           {/* Workaround variable issue from typo */}
           <img 
             src={imgBlock1} 
             alt="Catering Setup" 
             className="w-full h-full object-cover" 
           />
        </div>
      </section>
      
      {/* ---------------- INFO BLOCK 2 ---------------- */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[70vh] bg-cream">
        <div className="order-1 md:order-1 h-[400px] md:h-auto overflow-hidden">
           <img 
             src={imgBlock2} 
             alt="Events" 
             className="w-full h-full object-cover" 
           />
        </div>
        <div className="order-2 md:order-2 flex flex-col justify-center items-start p-12 lg:p-24 relative overflow-hidden">
           <motion.div {...fadeUp} className="max-w-xl">
              <div className="gold-divider mb-4 text-burgundy"><span className="h-px w-8 bg-burgundy/50" /> Exclusive</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-burgundy leading-tight mb-8">
                 Tailored Menus
              </h2>
              <p className="text-ink/80 text-lg leading-relaxed font-light mb-6">
                 Choose from a wide variety of authentic Indian cuisines crafted by our masterful head chefs. We map personalized courses tailored strictly to your event types — be it buffets, pass-arounds, or multi-course seated dinners.
              </p>
              <p className="text-ink/80 text-lg leading-relaxed font-light">
                 Experience legendary dishes from Chettinad, signature dum biryanis, and premium assortments brought to life vividly for your corporate galas or familial weddings.
              </p>
           </motion.div>
        </div>
      </section>

      {/* ---------------- FORM SECTION ---------------- */}
      <section className="relative py-28 lg:py-40 bg-ink overflow-hidden border-t border-gold/10">
        <Mandala className="pointer-events-none absolute top-10 right-10 w-[400px] text-gold opacity-[0.05] animate-spin-slow" />
        <Mandala className="pointer-events-none absolute bottom-10 left-10 w-[400px] text-gold opacity-[0.05] animate-spin-slower" />

        <div className="container-luxury relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
             <div className="gold-divider justify-center mb-4 text-gold-soft"><span className="h-px w-8 bg-gold-soft" /> Enquire Now</div>
             <h2 className="font-serif text-4xl lg:text-5xl text-cream leading-tight mb-4">Request a Banquet</h2>
             <p className="text-cream/60">
               Fill out your details below and we will contact you directly via WhatsApp to finalize the arrangements.
             </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-cream p-8 md:p-12 rounded-3xl shadow-luxury">
             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Full Name *</label>
                   <input 
                     type="text" 
                     name="name" 
                     required
                     value={formData.name} 
                     onChange={handleChange} 
                     placeholder="John Doe" 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                   />
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Email *</label>
                   <input 
                     type="email" 
                     name="email" 
                     required
                     value={formData.email} 
                     onChange={handleChange} 
                     placeholder="john@example.com" 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                   />
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Phone Number *</label>
                 <input 
                   type="tel" 
                   name="phone" 
                   required
                   value={formData.phone} 
                   onChange={handleChange} 
                   placeholder="+1 (609) 000-0000" 
                   className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                 />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Event Date *</label>
                   <input 
                     type="date" 
                     name="date" 
                     required
                     value={formData.date} 
                     onChange={handleChange} 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                   />
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Time</label>
                   <input 
                     type="time" 
                     name="time" 
                     value={formData.time} 
                     onChange={handleChange} 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                   />
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold">No. of Guests</label>
                   <input 
                     type="number" 
                     name="guests" 
                     min="1"
                     value={formData.guests} 
                     onChange={handleChange} 
                     placeholder="e.g. 50" 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                   />
                 </div>
               </div>

               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest text-burgundy font-bold">Event Details & Questions</label>
                 <textarea 
                   name="details" 
                   rows={4}
                   value={formData.details} 
                   onChange={handleChange} 
                   placeholder="Tell us about the event (Birthday, Anniversay, Wedding) and any specific requirements..." 
                   className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all resize-y"
                 ></textarea>
               </div>

               <button 
                 type="submit" 
                 className="mt-4 w-full bg-burgundy hover:bg-gold text-cream hover:text-ink transition-all duration-300 font-bold tracking-widest uppercase text-sm py-5 rounded-xl shadow-luxury hover:-translate-y-1"
               >
                 Submit Banquet Request
               </button>
             </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
