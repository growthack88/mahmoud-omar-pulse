
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] py-16 overflow-hidden bg-secondary/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300/30 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-64 h-64 bg-green-300/30 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mt-16">
          {/* Profile image */}
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3182CE] animate-gradient-animation"></div>
            <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
              <img 
                src="https://i.ibb.co/HRFq0Zv/my-notion-face-customized.png" 
                alt="Mahmoud Omar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="text-gradient">Mahmoud Omar</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Growth Manager · Social Commerce Guy · eCommerce Manager · Podcaster
          </p>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="tag bg-purple-100 text-purple-700 border border-purple-200">Growth Marketing</span>
            <span className="tag bg-blue-100 text-blue-700 border border-blue-200">Automation</span>
            <span className="tag bg-green-100 text-green-700 border border-green-200">Data Driven</span>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://tidycal.com/growthack88" target="_blank" rel="noreferrer">
              <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#3182CE] hover:opacity-90">
                <span>Schedule a Meeting</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#articles">
              <Button variant="outline" className="border-gray-300 hover:bg-gray-100 text-gray-700">
                <span>Explore Content</span>
                <ArrowDownCircle className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
