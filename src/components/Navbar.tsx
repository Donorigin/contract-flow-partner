
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-muvad-blue">MUVAD CONSULTS</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-base font-medium text-gray-700 hover:text-muvad-blue">
            Services
          </a>
          <a href="#about" className="text-base font-medium text-gray-700 hover:text-muvad-blue">
            About
          </a>
          <a href="#contact" className="text-base font-medium text-gray-700 hover:text-muvad-blue">
            Contact
          </a>
          <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white">
            Get a Free Estimate
          </Button>
        </nav>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "container md:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-4 py-4">
          <a 
            href="#services" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-base font-medium text-gray-700 hover:text-muvad-blue"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="bg-muvad-blue hover:bg-muvad-lightBlue text-white w-full">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </header>
  );
}
