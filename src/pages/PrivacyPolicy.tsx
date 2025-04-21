
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4 py-16 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-muvad-darkGrey mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-muvad-darkGrey mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Muvad Consults, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-muvad-darkGrey mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Contact information (name, email, phone number)</li>
              <li>Company details</li>
              <li>Project specifications and requirements</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-muvad-darkGrey mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Communicate with you about your projects</li>
              <li>Send you important updates and notifications</li>
              <li>Process your payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-muvad-darkGrey mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-muvad-darkGrey mb-4">5. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@muvadconsults.com
              <br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
