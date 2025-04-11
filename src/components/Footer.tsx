
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-gradient mb-4">Mahmoud Omar</h3>
          
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://www.linkedin.com/in/growthack88/" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5]"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/growthack88" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2]"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/growthack88" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@GrowthHackAcademy" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000]"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://www.tiktok.com/@growthhackacademy" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-gray-700/10 hover:bg-gray-700/20 text-gray-700"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
            </a>
          </div>
          
          <p className="text-center text-sm text-gray-500">
            © {currentYear} | Growth Manager | Social Commerce Guy | eCommerce Manager | Podcaster
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
