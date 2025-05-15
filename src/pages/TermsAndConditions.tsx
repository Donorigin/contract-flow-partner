
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Info, Bell, Mail, User, Clock, Shield, MessageSquare } from "lucide-react";

export default function TermsAndConditions() {
  const [effectiveDate] = useState("May 15, 2025");
  const [lastUpdated] = useState("May 15, 2025");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-muvad-blue/10 rounded-full mb-6">
            <FileText className="h-8 w-8 text-muvad-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-muvad-darkGrey mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Effective Date: {effectiveDate} | Last Updated: {lastUpdated}
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-1 w-20 bg-muvad-blue rounded-full"></div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Side Navigation */}
            <div className="md:col-span-1 bg-muvad-grey/50 p-6 border-r border-gray-200">
              <div className="sticky top-32">
                <h3 className="font-semibold text-muvad-darkGrey mb-4">Contents</h3>
                <nav className="space-y-3">
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">Introduction</a>
                  <a href="#use" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">1. Use of Our Services</a>
                  <a href="#sms" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">2. SMS Terms of Service</a>
                  <a href="#accounts" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">3. User Accounts</a>
                  <a href="#liability" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">4. Limitation of Liability</a>
                  <a href="#intellectual" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">5. Intellectual Property</a>
                  <a href="#changes" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">6. Changes to These Terms</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">7. Contact Us</a>
                </nav>
              </div>
            </div>
            
            {/* Content */}
            <div className="md:col-span-4 p-8 md:p-12">
              <div className="prose max-w-none">
                <section id="introduction" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Info className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">Introduction</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      Welcome to Muvad Consults LLC ("Company," "we," "us," or "our"). By accessing or using our website muvadconsults.com ("Website") 
                      and our services, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services.
                    </p>
                  </div>
                </section>

                <section id="use" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">1. Use of Our Services</h2>
                  </div>
                  <div className="pl-12">
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>You must be at least 18 years old to use our services.</li>
                      <li>You agree to use our website and services only for lawful purposes.</li>
                      <li>We reserve the right to suspend or terminate your access if we suspect any unauthorized use or violation of these Terms.</li>
                    </ul>
                  </div>
                </section>

                <section id="sms" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">2. SMS Terms of Service</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      By opting into SMS notifications through a web form or other medium, you consent to receive SMS messages from Muvad Consults LLC, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Appointment scheduling and reminders</li>
                      <li>Order and account notifications</li>
                      <li>Service updates</li>
                      <li>Promotional and marketing messages</li>
                    </ul>
                    <div className="bg-muvad-grey p-4 rounded-lg border-l-4 border-muvad-blue mb-4">
                      <ul className="list-none space-y-2 text-gray-700">
                        <li><strong>Message Frequency:</strong> Messaging frequency varies.</li>
                        <li><strong>Message & Data Rates:</strong> Standard message and data rates may apply.</li>
                        <li><strong>Opt-Out:</strong> You can opt out at any time by replying STOP to any message.</li>
                        <li><strong>Help:</strong> Text HELP for assistance or visit https://muvadconsults.com/.</li>
                        <li><strong>Privacy Policy:</strong> Visit our Privacy Policy page for details on data collection and protection.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="accounts" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">3. User Accounts</h2>
                  </div>
                  <div className="pl-12">
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>You may need to create an account to access certain services.</li>
                      <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                      <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                    </ul>
                  </div>
                </section>

                <section id="liability" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">4. Limitation of Liability</h2>
                  </div>
                  <div className="pl-12">
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>We do not guarantee uninterrupted or error-free service.</li>
                      <li>We are not liable for indirect, incidental, or consequential damages arising from your use of our services.</li>
                    </ul>
                  </div>
                </section>

                <section id="intellectual" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">5. Intellectual Property</h2>
                  </div>
                  <div className="pl-12">
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>All content on this Website, including text, logos, and graphics, is owned by Muvad Consults LLC.</li>
                      <li>You may not use our content without prior written permission.</li>
                    </ul>
                  </div>
                </section>

                <section id="changes" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Bell className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">6. Changes to These Terms</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We may update these Terms from time to time. Any changes will be posted on this page with an updated "Effective Date." 
                      Your continued use of our website constitutes acceptance of any revisions.
                    </p>
                  </div>
                </section>

                <section id="contact" className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">7. Contact Us</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      If you have any questions regarding these Terms and Conditions, please contact us at:
                    </p>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <p className="text-gray-700 mb-2">
                        <strong>Muvad Consults LLC</strong>
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> projects@muvadconsults.com
                      </p>
                      <p className="text-gray-700">
                        <strong>Website:</strong> https://muvadconsults.com/
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      By using our services, you acknowledge and agree to these Terms. For more details on how we handle your data, 
                      please refer to our <a href="/privacy-policy" className="text-muvad-blue hover:underline">Privacy Policy</a>.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
