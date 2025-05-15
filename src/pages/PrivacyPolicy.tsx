
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Info, UserCheck, Mail, UserX, Bell, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const [effectiveDate] = useState("May 15, 2025");
  const [lastUpdated] = useState("May 15, 2025");
  
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
                  <a href="#information" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">1. Information We Collect</a>
                  <a href="#usage" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">2. How We Use Your Information</a>
                  <a href="#sharing" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">3. Data Sharing and Disclosure</a>
                  <a href="#cookies" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">4. Cookies and Tracking</a>
                  <a href="#security" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">5. Data Storage and Security</a>
                  <a href="#rights" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">6. Your Rights</a>
                  <a href="#children" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">7. Children's Privacy</a>
                  <a href="#changes" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">8. Changes to This Policy</a>
                  <a href="#contact" className="block text-sm text-gray-600 hover:text-muvad-blue transition-colors">9. Contact Us</a>
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
                      Muvad Consults LLC ("Company," "we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy. 
                      This policy describes how we collect, use, disclose, and safeguard your information when you visit our website muvadconsults.com ("Website").
                    </p>
                  </div>
                </section>

                <section id="information" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <UserCheck className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">1. Information We Collect</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">We collect only the following personal information when you voluntarily provide it through our contact forms and account registration:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                    </ul>
                    <div className="bg-muvad-grey p-4 rounded-lg border-l-4 border-muvad-blue mb-4">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> We do not collect sensitive personal data such as payment details, addresses, or other identifying information.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="usage" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">2. How We Use Your Information</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>To communicate with you regarding our services</li>
                      <li>To send you marketing emails or newsletters (you may unsubscribe at any time)</li>
                      <li>To respond to inquiries submitted through our contact forms</li>
                      <li>To manage user accounts and provide customer support</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                      We do not use the collected data for automated decision-making or profiling.
                    </p>
                  </div>
                </section>

                <section id="sharing" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Lock className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">3. Data Sharing and Disclosure</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We do not sell, trade, rent, or share your personal information with third parties.
                      Your data is not transferred to any external parties except as required by law or to comply with legal obligations.
                    </p>
                  </div>
                </section>

                <section id="cookies" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Info className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">4. Cookies and Tracking Technologies</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We do not use cookies or tracking technologies on our website.
                    </p>
                  </div>
                </section>

                <section id="security" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">5. Data Storage and Security</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We take reasonable technical and organizational security measures to protect your personal data, including:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li>Secure hosting of our website</li>
                      <li>Industry-standard security protocols to prevent unauthorized access</li>
                      <li>Encryption and secure communication practices</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                      We retain user data for as long as necessary for business purposes or until a deletion request is received.
                    </p>
                  </div>
                </section>

                <section id="rights" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <UserCheck className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">6. Your Rights</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      As a user, you have the following rights concerning your personal data:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      <li><strong>Access:</strong> You may request a copy of the personal data we have about you.</li>
                      <li><strong>Correction:</strong> You may request corrections to inaccurate or incomplete data.</li>
                      <li><strong>Deletion:</strong> You may request that we delete your personal information.</li>
                      <li><strong>Unsubscribe:</strong> You may opt out of marketing emails by clicking the unsubscribe link in our emails.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                      To exercise any of these rights, please contact us at projects@muvadconsults.com.
                    </p>
                  </div>
                </section>

                <section id="children" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <UserX className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">7. Children's Privacy</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      Our website and services are not intended for individuals under the age of 18, and we do not knowingly collect personal data from minors.
                    </p>
                  </div>
                </section>

                <section id="changes" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Bell className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">8. Changes to This Policy</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." 
                      Your continued use of our website constitutes acceptance of any revisions.
                    </p>
                  </div>
                </section>

                <section id="contact" className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-muvad-blue/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-muvad-blue" />
                    </div>
                    <h2 className="text-2xl font-semibold text-muvad-darkGrey m-0">9. Contact Us</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact us at:
                    </p>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <p className="text-gray-700 mb-2">
                        <strong>Muvad Consults LLC</strong>
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> projects@muvadconsults.com
                      </p>
                      <p className="text-gray-700">
                        <strong>Website:</strong> muvadconsults.com
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      This Privacy Policy is designed to ensure compliance with applicable privacy laws, including GDPR (General Data Protection Regulation) 
                      and CCPA (California Consumer Privacy Act) where applicable. If additional legal compliance is required, we recommend seeking professional legal advice.
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
