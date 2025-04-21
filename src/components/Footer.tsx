export function Footer() {
  return (
    <footer className="bg-muvad-darkGrey text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MUVAD CONSULTS</h3>
            <p className="text-gray-300 mb-4">
              Your partner in achieving subcontracting success with our risk-free estimating and proposal services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Estimating</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Proposal Writing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Client Follow-Up</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Risk-Free Model</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">E-commerce Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Industry Sectors</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Painting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Drywall</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Electrical</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Roofing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Concrete</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Post-Construction Cleaning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="http://muvadplaybox.com" className="text-gray-300 hover:text-white">Muvad Playbox</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Muvad Consults. All rights reserved.</p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-muvad-blue hover:text-white mr-4">Privacy Policy</a>
            Design by <a href="#" className="text-muvad-blue hover:text-white">Lovable.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
