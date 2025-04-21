import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-muvad-grey py-20">
        <div className="container max-w-md">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-muvad-blue/10 text-muvad-blue rounded-full mb-6">
              <span className="text-4xl font-bold">404</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-muvad-darkGrey">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button className="bg-muvad-blue hover:bg-muvad-lightBlue inline-flex items-center" asChild>
              <a href="/">
                Return to Homepage <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
