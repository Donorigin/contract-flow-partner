
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PhoneCall } from "lucide-react";

export function Contact() {
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
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="John Smith" className="w-full" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <Input id="company" placeholder="Your Company" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input id="phone" placeholder="(555) 123-4567" className="w-full" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select id="service" className="w-full rounded-md border-gray-300 shadow-sm focus:border-muvad-blue focus:ring focus:ring-muvad-blue/10">
                  <option value="" disabled>Select a Service</option>
                  <option value="estimating">Estimating</option>
                  <option value="proposals">Proposal Writing</option>
                  <option value="followup">Follow-Up Services</option>
                  <option value="complete">Complete Package</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="w-full min-h-[120px]" />
              </div>
              <Button className="w-full bg-muvad-blue hover:bg-muvad-lightBlue text-white">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
