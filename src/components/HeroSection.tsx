
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mt-8 md:mt-16">
          {/* Profile image */}
          <div className="relative w-40 h-40 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue animate-gradient-animation"></div>
            <div className="absolute inset-1 rounded-full overflow-hidden bg-background">
              <img 
                src="https://i.ibb.co/HRFq0Zv/my-notion-face-customized.png" 
                alt="Mahmoud Omar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-gradient">Mahmoud Omar</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Growth Manager · Social Commerce Guy · eCommerce Manager · Podcaster
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://www.linkedin.com/in/growthack88/" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/growthack88" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2]"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/growthack88" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F]"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@GrowthHackAcademy" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000]"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          {/* Expertise tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="tag bg-brand-purple/10 text-brand-purple">Growth Marketing</span>
            <span className="tag bg-brand-blue/10 text-brand-blue">Automation</span>
            <span className="tag bg-brand-green/10 text-brand-green">Data Driven</span>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90">
              <span>Schedule a Meeting</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
              <span>Explore Content</span>
              <ArrowDownCircle className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownCircle className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
