
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[70vh] sm:h-[80vh] md:h-[95vh] pt-16 md:pt-28">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/70f1171b-c244-48fa-9c47-7364f4e6fe92.png"
          alt="Construction professionals reviewing plans" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/15"></div>
      </div>
      
      <div className="container relative z-10 h-full flex items-start md:items-center">
        <div className="max-w-3xl mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 font-heading">
            Win More Contracts with Our NO-COST Estimating Services
          </h1>
          <p className="text-xl text-white/90 mb-6 md:mb-8 max-w-2xl">
            We help subcontractors secure more profitable projects with our comprehensive 
            take-offs, estimating, and proposal services - with no upfront costs.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white text-lg px-8 py-6 h-auto rounded-full group transition-all duration-300 shadow-lg shadow-muvad-blue/30">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
