
import { Calculator, FilePen, PhoneCall, DollarSign } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-muvad-blue" />,
      title: "Project Search and Estimating",
      description: "We find active projects near you and prepare accurate take-offs and detailed cost estimate fir ITBs you receive"
    },
    {
      icon: <FilePen className="w-12 h-12 text-muvad-blue" />,
      title: "Proposal Writing",
      description: "Win more bids with expertly written proposals submitted on your companies letter head"
    },
    {
      icon: <PhoneCall className="w-12 h-12 text-muvad-blue" />,
      title: "Follow-Up",
      description: "we follow up regulary with the GC untill we receive the award status"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-muvad-blue" />,
      title: "No Upfront Cost",
      description: "Pay only when you get paid. No Upfront costs -we wait with you until the GC pays you, then you pay us."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to help subcontractors win more contracts, 
            increase profitability, and grow their business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-muvad-darkGrey mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
