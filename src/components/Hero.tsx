
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/photo-1605810230434-7631ac76ec81"
          alt="Construction professionals reviewing plans" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Win More Contracts with Our Risk-Free Estimating Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            We help subcontractors secure more profitable projects with our comprehensive 
            take-offs, estimating, and proposal services - with no upfront costs.
          </p>
          <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white text-lg px-8 py-6 h-auto">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
