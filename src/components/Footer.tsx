
import { Linkedin, Facebook, Instagram, Youtube, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/40 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient">Mahmoud Omar</h3>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 mb-8">
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
            <a 
              href="https://www.tiktok.com/@growthhackacademy" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-gray-700/10 hover:bg-gray-700/20 text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://growthhackacademy.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Growth Hack Academy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://templify.pro" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Templify
                  </a>
                </li>
                <li>
                  <a 
                    href="https://whatzduck.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Whatzduck
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#blog" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="#videos" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a 
                    href="#newsletter" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://tidycal.com/growthack88" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Consulting
                  </a>
                </li>
                <li>
                  <a 
                    href="https://growthhackacademy.com/internship" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Internship
                  </a>
                </li>
                <li>
                  <a 
                    href="https://tidycal.com/growthack88" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Speaking
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://tidycal.com/growthack88" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Schedule a Call</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/growthack88/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@growthhackacademy.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Growth Hack Pro. All rights reserved.</p>
            <p className="mt-2">
              Growth Manager | Social Commerce Guy | eCommerce Manager | Podcaster
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
