
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gradient">Mahmoud Omar</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</a>
          <a href="#videos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Videos</a>
          <a href="#newsletter" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Newsletter</a>
        </nav>
        
        <Button size="sm" variant="secondary" className="hidden md:flex items-center gap-2">
          <span>Connect</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
