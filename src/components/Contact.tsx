
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PhoneCall } from "lucide-react";
import { createMessage } from "@/services/api";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    service_type: "Estimating" as "Estimating" | "ITBs" | "Lead Resercher" | "Full Package",
    project_details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    if (id === 'service_type') {
      setFormData((prev) => ({ 
        ...prev, 
        [id]: value as "Estimating" | "ITBs" | "Lead Resercher" | "Full Package" 
      }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email || !formData.service_type || !formData.project_details) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await createMessage(formData);
      
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Clear form
      setFormData({
        full_name: "",
        company_name: "",
        email: "",
        phone_number: "",
        service_type: "Estimating" as "Estimating" | "ITBs" | "Lead Resercher" | "Full Package",
        project_details: ""
      });
    } catch (error) {
      // Handle different types of errors more specifically
      let errorMessage = "There was a problem sending your message. Please try again.";
      
      if (error instanceof Error) {
        // If it's a network error, provide more specific guidance
        if (error.message.includes("Network error")) {
          errorMessage = "Unable to connect to our servers. Your message has been saved. Please try again when your connection improves.";
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-6">
              Ready to Win More Contracts?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss how Muvad Consults can help you secure more projects and grow your 
              business with our risk-free estimating and proposal services.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muvad-blue rounded-full p-2 text-white">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-muvad-darkGrey">Phone</h3>
                  <p className="text-gray-600">(470) 354 3663</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muvad-blue rounded-full p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-muvad-darkGrey">Email</h3>
                  <p className="text-gray-600">projects@muvadconsults.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-muvad-blue rounded-full p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-muvad-darkGrey">Address</h3>
                  <p className="text-gray-600">74710 hwy 111 palm Desert <br />CA 92260</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-muvad-grey p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-muvad-darkGrey mb-6">Get a Free Estimate</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <Input 
                    id="full_name" 
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="John Smith" 
                    className="w-full" 
                  />
                </div>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <Input 
                    id="company_name"
                    value={formData.company_name} 
                    onChange={handleInputChange}
                    placeholder="Your Company" 
                    className="w-full" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  className="w-full" 
                />
              </div>
              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input 
                  id="phone_number"
                  value={formData.phone_number} 
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567" 
                  className="w-full" 
                />
              </div>
              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                <select 
                  id="service_type"
                  value={formData.service_type}
                  onChange={handleInputChange} 
                  className="w-full rounded-md border border-gray-300 shadow-sm focus:border-muvad-blue focus:ring focus:ring-muvad-blue/10 p-2"
                >
                  <option value="Estimating">Estimating</option>
                  <option value="ITBs">ITBs</option>
                  <option value="Lead Resercher">Lead Researcher</option>
                  <option value="Full Package">Complete Package</option>
                </select>
              </div>
              <div>
                <label htmlFor="project_details" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                <Textarea 
                  id="project_details"
                  value={formData.project_details}
                  onChange={handleInputChange} 
                  placeholder="Tell us about your project..." 
                  className="w-full min-h-[120px]" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-muvad-blue hover:bg-muvad-lightBlue text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
