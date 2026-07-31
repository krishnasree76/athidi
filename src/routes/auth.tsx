import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mandala } from "@/components/Mandala";
import logoSrc from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — Athidhi Indian Restaurant" },
      { name: "description", content: "Sign in or create an account with Athidhi." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake submit
    alert(`Fake ${isLogin ? 'Login' : 'Sign Up'} Triggered for ${email}`);
  };

  const handleGoogle = () => {
    alert("Fake Continue with Google Triggered");
  };

  return (
    <div className="min-h-screen bg-ink text-cream flex overflow-hidden">
      
      {/* ---------------- LEFT: Branding & Image ---------------- */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-gold/10">
        <Mandala className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] text-burgundy opacity-30 animate-spin-slow z-0" />
        <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply z-0" />

        <div className="relative z-10">
          <Link to="/">
            <img src={logoSrc} alt="Athidhi" className="h-16 w-auto drop-shadow-md hover:scale-105 transition-transform" />
          </Link>
        </div>

        <div className="relative z-10 max-w-lg mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="gold-divider mb-6 text-gold-soft"><span className="h-px w-8 bg-gold-soft" /> Exclusive Experience</div>
            <h1 className="font-serif text-5xl leading-tight mb-6">
              The guest is divine.
            </h1>
            <p className="text-cream/70 text-lg font-light leading-relaxed">
              Create an account to gain early access to seasonal chef tasting menus, private banquet reservations, and swift checkout for online orders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ---------------- RIGHT: Forms ---------------- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative bg-cream text-ink">
        
        {/* Mobile Header Logo */}
        <div className="absolute top-6 left-6 lg:hidden">
          <Link to="/">
            <img src={logoSrc} alt="Athidhi" className="h-12 w-auto drop-shadow-md" />
          </Link>
        </div>

        <div className="w-full max-w-md relative z-10">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              layout
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: isLogin ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 30 : -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_40px_rgba(40,10,12,0.08)] border border-burgundy/5"
            >
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl text-burgundy mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-ink/60 text-sm">
                  {isLogin ? "Please sign in to your luxury account." : "Join us for an exclusive dining experience."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                {/* Form Inputs */}
                <div className="space-y-4">
                  {!isLogin && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] uppercase tracking-widest text-burgundy font-bold ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required={!isLogin}
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="John Doe" 
                        className="w-full bg-beige border border-burgundy/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-burgundy font-bold ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="you@example.com" 
                      className="w-full bg-beige border border-burgundy/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-widest text-burgundy font-bold ml-1">Password</label>
                    <input 
                      type="password" 
                      required
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder="••••••••" 
                      className="w-full bg-beige border border-burgundy/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
                    />
                  </div>
                </div>

                {isLogin && (
                  <div className="text-right -mt-2">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[13px] text-burgundy hover:text-gold transition-colors font-medium">Forgot password?</a>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-burgundy hover:bg-gold text-cream hover:text-ink transition-all duration-300 font-bold tracking-widest uppercase text-sm py-4 rounded-xl shadow-luxury hover:-translate-y-1 mt-2"
                >
                  {isLogin ? "Sign In" : "Register"}
                </button>
              </form>

              <div className="flex items-center gap-4 my-6 opacity-60">
                <div className="flex-1 h-px bg-ink/20" />
                <span className="text-[11px] uppercase tracking-widest font-semibold">Or</span>
                <div className="flex-1 h-px bg-ink/20" />
              </div>

              <button 
                onClick={handleGoogle}
                type="button" 
                className="w-full flex items-center justify-center gap-3 bg-white border border-ink/10 hover:bg-beige transition-colors duration-300 font-semibold text-sm py-3.5 rounded-xl text-ink"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>

              <div className="text-center mt-8 text-[13px] sm:text-sm text-ink/70">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-burgundy hover:text-gold font-bold transition-colors"
                >
                  {isLogin ? "Create one" : "Sign in here"}
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
