
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calculator, FilePen, PhoneCall, DollarSign, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Value Proposition */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-muvad-darkGrey mb-6">
              We help subcontractors in trades like painting, drywall, electrical, roofing, 
              and cleaning win more contracts.
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            We handle the take-offs and estimating, proposal submissions to the General Contractor, and follow up from start to finish –  
            <span className="font-semibold">You only pay</span>when you get paid.
            </p>
            <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white mt-4 px-6">
              Learn How It Works <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-muvad-blue to-muvad-lightBlue text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our streamlined process makes it easy to get started and win more contracts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center relative">
              <div className="absolute -top-5 -left-5 bg-white text-muvad-blue rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Kickoff & Strategy Call</h3>
              <p className="text-white/80">
                We start with discovery call to understand your goals, align on expectations, and set up tailored outbound campaigns to General contractors
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center relative">
              <div className="absolute -top-5 -left-5 bg-white text-muvad-blue rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Proposal Preparation and Submission</h3>
              <p className="text-white/80">
                We prepare and submit proposals for both ITBs  and active projects- positioned to help you win
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center relative">
              <div className="absolute -top-5 -left-5 bg-white text-muvad-blue rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">No Upfront Cost</h3>
              <p className="text-white/80">
                No upfront cost - we only get paid when you get paid by the GC
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-white text-muvad-blue hover:bg-white/90 px-8 py-6 h-auto text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      <About />
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from subcontractors who have transformed their business with our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muvad-grey p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-muvad-blue text-white flex items-center justify-center font-bold text-xl">JD</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-600">ABC Painting Company</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Muvad Consults has completely changed how we approach bidding. Their estimates are detailed and accurate, and their proposal writing is top-notch. Best of all, we only pay when we win!"
              </p>
            </div>
            
            <div className="bg-muvad-grey p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-muvad-blue text-white flex items-center justify-center font-bold text-xl">SM</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <p className="text-gray-600">Miller Electrical Services</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Since working with Muvad, our win rate on proposals has increased by over 40%. Their follow-up services are particularly valuable — they keep our bids at the top of the GC's mind."
              </p>
            </div>
            
            <div className="bg-muvad-grey p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-muvad-blue text-white flex items-center justify-center font-bold text-xl">RJ</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Robert Jackson</h4>
                  <p className="text-gray-600">Jackson Roofing LLC</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The no-upfront cost model was what initially attracted me, but the quality of their work is what keeps me coming back. Muvad has become an essential partner in our business growth."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with added image */}
      <section className="py-16 bg-muvad-darkGrey text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Win More Contracts Without Any Upfront Risk?
            </h2>
            <p className="text-xl mb-8">
              Join the hundreds of subcontractors who are growing their businesses with Muvad Consults
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white px-8 py-6 h-auto text-lg">
                Get a Free Estimate
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
