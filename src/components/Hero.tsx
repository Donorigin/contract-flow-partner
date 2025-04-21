
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[90vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/photo-1605810230434-7631ac76ec81"
          alt="Construction professionals reviewing plans" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
      
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-3xl py-8 px-10 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            Win More Contracts with Our Risk-Free Estimating Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            We help subcontractors secure more profitable projects with our comprehensive 
            take-offs, estimating, and proposal services - with no upfront costs.
          </p>
          <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white text-lg px-8 py-6 h-auto rounded-full group transition-all duration-300 shadow-lg shadow-muvad-blue/30">
            Get a Free Estimate
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
