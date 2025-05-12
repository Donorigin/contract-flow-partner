
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X, Building } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Building className={cn(
            "h-8 w-8 transition-colors duration-300",
            scrolled ? "text-muvad-blue" : "text-white"
          )} />
          <span className={cn(
            "text-xl font-bold transition-colors duration-300",
            scrolled ? "text-muvad-blue" : "text-white"
          )}>MUVAD CONSULTS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className={cn(
            "text-base font-medium hover:text-muvad-blue transition-colors relative group",
            scrolled ? "text-gray-700" : "text-white"
          )}>
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muvad-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className={cn(
            "text-base font-medium hover:text-muvad-blue transition-colors relative group",
            scrolled ? "text-gray-700" : "text-white"
          )}>
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muvad-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <Link to="/blog" className={cn(
            "text-base font-medium hover:text-muvad-blue transition-colors relative group",
            scrolled ? "text-gray-700" : "text-white"
          )}>
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muvad-blue group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a href="#contact" className={cn(
            "text-base font-medium hover:text-muvad-blue transition-colors relative group",
            scrolled ? "text-gray-700" : "text-white"
          )}>
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muvad-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <Button className={cn(
            "transition-all duration-300 rounded-full",
            scrolled ?
              "bg-muvad-blue hover:bg-muvad-lightBlue text-white" :
              "bg-white hover:bg-white/90 text-muvad-blue"
          )}>
            Book a Discovery Call
          </Button>
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className={scrolled ? "text-muvad-blue" : "text-white"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "container md:hidden bg-white/95 backdrop-blur-md mt-4 rounded-lg shadow-lg",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-4 py-4 px-4">
          <a 
            href="#services" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <Link 
            to="/blog" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <a 
            href="#contact" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white w-full rounded-lg">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </header>
  );
}
