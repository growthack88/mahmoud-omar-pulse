
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
              href="https://www.youtube.com/@GrowthHackAcademy?sub_confirmation=1" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon bg-[#FF0000]/10 hover:bg-[#FF0000]/20 text-[#FF0000]"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
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
