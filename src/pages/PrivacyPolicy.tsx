
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Info, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-muvad-blue/10 rounded-full mb-6">
            <Shield className="h-8 w-8 text-muvad-blue" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-muvad-darkGrey mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
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
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">1. Introduction</a>
                  <a href="#information" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">2. Information We Collect</a>
                  <a href="#usage" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">3. How We Use Your Information</a>
                  <a href="#sharing" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">4. Information Sharing</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">5. Contact Us</a>
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
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">1. Introduction</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      At Muvad Consults, we take your privacy seriously. This Privacy Policy explains how we collect, 
                      use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p className="text-gray-700">
                      By accessing or using our services, you acknowledge that you have read and understand this Privacy Policy.
                    </p>
                  </div>
                </section>

                <section id="information" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <UserCheck className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">2. Information We Collect</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Contact information (name, email, phone number)</li>
                      <li>Company details</li>
                      <li>Project specifications and requirements</li>
                      <li>Communication preferences</li>
                    </ul>
                    <div className="bg-muvad-grey p-4 rounded-lg border-l-4 border-muvad-blue mb-4">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> We only collect information necessary to provide our services and improve your experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="usage" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">3. How We Use Your Information</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Provide and improve our services</li>
                      <li>Communicate with you about your projects</li>
                      <li>Send you important updates and notifications</li>
                      <li>Process your payments</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                <section id="sharing" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">4. Information Sharing</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this Privacy Policy.
                    </p>
                    <div className="bg-muvad-grey p-4 rounded-lg border-l-4 border-muvad-blue mb-4">
                      <p className="text-sm text-gray-600">
                        <strong>Your data security is our priority.</strong> We implement appropriate technical and organizational measures to protect your personal information.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="contact" className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Info className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">5. Contact Us</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> privacy@muvadconsults.com
                      </p>
                      <p className="text-gray-700">
                        <strong>Phone:</strong> (555) 123-4567
                      </p>
                    </div>
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
