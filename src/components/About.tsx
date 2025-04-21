
export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muvad-grey">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-muvad-darkGrey mb-6">
              Your Partner in Subcontracting Success
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Muvad Consults is dedicated to making your journey as a subcontractor smoother, 
              more efficient, and more successful. Our team of experienced Quantity Surveyors and 
              outbound sales experts craft tailored solutions that ensure your success.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What sets us apart? We take the risk with you. With our no-upfront-cost model, 
              you only pay us when you get paid. This unique approach aligns our interests 
              perfectly with yours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-muvad-blue mb-2">Industries We Serve</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Painting</li>
                  <li>• Drywall</li>
                  <li>• Electrical</li>
                  <li>• Roofing</li>
                  <li>• Concrete</li>
                  <li>• Post-Construction Cleaning</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-muvad-blue mb-2">Our Approach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comprehensive take-offs</li>
                  <li>• Detailed cost estimates</li>
                  <li>• Professional proposals</li>
                  <li>• Dedicated follow-up</li>
                  <li>• No upfront costs</li>
                  <li>• Partnership-based relationship</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Construction professionals discussing project" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-muvad-blue text-white p-6 rounded-lg shadow-xl">
              <p className="text-xl font-semibold">We also power</p>
              <p className="text-2xl font-bold">muvadplaybox.com</p>
              <p className="text-white/70">(e-commerce)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
