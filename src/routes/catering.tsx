import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mandala } from "@/components/Mandala";
import { ArrowDownToLine } from "lucide-react";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Full Catering Menu — Athidhi" },
      { name: "description", content: "Download and view our complete luxury catering menu." },
    ],
  }),
  component: CateringPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.2, 0.9, 0.3, 1] as const },
};

function CateringPage() {
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
    const message = `*New Catering/Banquet Enquiry*
    
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

      {/* Page Title Bar */}
      <section className="pt-32 pb-12 px-6 lg:px-16 container-luxury flex flex-col md:flex-row justify-between items-center gap-6">
         <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-burgundy font-medium tracking-tight">Full Catering Menu</h1>
         
         <a 
           href="/Athidhi%20Banquet-Catering%20Menu.pdf" 
           target="_blank" 
           rel="noreferrer" 
           download="Athidhi Banquet-Catering Menu.pdf"
           className="inline-flex px-8 py-3.5 rounded-full bg-burgundy text-cream shadow-[0_4px_30px_rgba(40,10,12,0.1)] hover:bg-gold hover:text-ink transition-all duration-300 font-bold tracking-wide items-center gap-3 shrink-0"
         >
           Download <ArrowDownToLine className="h-5 w-5" />
         </a>
      </section>

      {/* Document Viewer Container */}
      <section className="container-luxury px-6 lg:px-16 pb-20 max-w-5xl mx-auto">
         <div className="w-full flex flex-col gap-6 lg:gap-12">
           <div className="w-full rounded-2xl lg:rounded-[36px] overflow-hidden shadow-luxury border border-burgundy/10 bg-white">
             <img src="/catering-menu-1.png" alt="Athidhi Catering Menu Page 1" className="w-full h-auto object-contain" />
           </div>
           <div className="w-full rounded-2xl lg:rounded-[36px] overflow-hidden shadow-luxury border border-burgundy/10 bg-white">
             <img src="/catering-menu-2.png" alt="Athidhi Catering Menu Page 2" className="w-full h-auto object-contain" />
           </div>
           <div className="w-full rounded-2xl lg:rounded-[36px] overflow-hidden shadow-luxury border border-burgundy/10 bg-white">
             <img src="/catering-menu-3.png" alt="Athidhi Catering Menu Page 3" className="w-full h-auto object-contain" />
           </div>
         </div>
      </section>

      {/* Contact Form Section (Imported from Banquet) */}
      <section className="relative py-28 lg:py-40 bg-ink overflow-hidden border-t border-gold/10">
        <Mandala className="pointer-events-none absolute top-10 right-10 w-[400px] text-gold opacity-[0.05] animate-spin-slow" />
        <Mandala className="pointer-events-none absolute bottom-10 left-10 w-[400px] text-gold opacity-[0.05] animate-spin-slower" />

        <div className="container-luxury relative z-10 max-w-3xl mx-auto px-4 lg:px-0">
          <motion.div {...fadeUp} className="text-center mb-14">
             <div className="gold-divider justify-center mb-4 text-gold-soft"><span className="h-px w-8 bg-gold-soft" /> Enquire Now</div>
             <h2 className="font-serif text-4xl lg:text-5xl text-cream leading-tight mb-4">Request Catering</h2>
             <p className="text-cream/60">
               Fill out your details below and we will contact you directly via WhatsApp to finalize the arrangements.
             </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-cream p-5 sm:p-8 md:p-12 rounded-3xl shadow-luxury">
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
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
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
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
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
                   className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                 />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="flex flex-col gap-2 min-w-0">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold truncate">Event Date *</label>
                   <input 
                     type="date" 
                     name="date" 
                     required
                     value={formData.date} 
                     onChange={handleChange} 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-3 sm:px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all appearance-none min-w-0"
                   />
                 </div>

                 <div className="flex flex-col gap-2 min-w-0">
                   <label className="text-xs uppercase tracking-widest text-burgundy font-bold truncate">Time</label>
                   <input 
                     type="time" 
                     name="time" 
                     value={formData.time} 
                     onChange={handleChange} 
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-3 sm:px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all appearance-none min-w-0"
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
                     className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
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
                   className="w-full bg-beige border border-burgundy/20 rounded-xl px-4 py-3 text-base sm:text-sm text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all resize-y"
                 ></textarea>
               </div>

               <button 
                 type="submit" 
                 className="mt-4 w-full bg-burgundy hover:bg-gold text-cream hover:text-ink transition-all duration-300 font-bold tracking-widest uppercase text-sm py-5 rounded-xl shadow-luxury hover:-translate-y-1"
               >
                 Submit Catering Request
               </button>
             </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
