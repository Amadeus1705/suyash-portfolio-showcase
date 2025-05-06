
import { Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Suyash Sharma</h3>
            <p className="text-white/70">Business Analyst & Data Scientist</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:Suyashsharma9999@gmail.com" 
              aria-label="Email"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919131405545" 
              aria-label="Phone"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Phone size={20} />
            </a>
            <a 
              href="https://github.com/Suyash726" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-white/70">
          <p>&copy; {currentYear} Suyash Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
