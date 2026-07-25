import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col pt-24 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 container-luxury py-16 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl border border-burgundy/10 shadow-luxury p-8 sm:p-12 text-center">
          <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl text-burgundy mb-4">Order Placed Successfully!</h1>
          
          <p className="text-ink/60 mb-8 leading-relaxed">
            Thank you for choosing Athidhi. Our master chefs are preparing your dishes with reverence, and we will serve your food soon.
          </p>
          
          <Link to="/" className="btn-primary inline-flex w-full justify-center group">
            Return to Menu
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
