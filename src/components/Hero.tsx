
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-dark-blue mb-4 font-heading">
              Hi, I'm <span className="text-theme-blue">Suyash Sharma</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-theme-gray mb-6">
              Business Analyst & Data Scientist
            </h2>
            <p className="text-lg text-theme-gray mb-8 max-w-2xl">
              I specialize in data analytics, machine learning, and business intelligence. 
              Passionate about transforming complex data into actionable insights that drive business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact">
                <Button className="w-full sm:w-auto bg-theme-blue hover:bg-theme-dark-blue">
                  Contact Me
                </Button>
              </a>
              <a href="#experience">
                <Button variant="outline" className="w-full sm:w-auto border-theme-blue text-theme-blue hover:bg-theme-blue hover:text-white">
                  View Experience
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:Suyashsharma9999@gmail.com"
                className="text-theme-gray hover:text-theme-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919131405545"
                className="text-theme-gray hover:text-theme-blue transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://github.com/Suyash726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-gray hover:text-theme-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-theme-blue to-theme-light-blue rounded-full overflow-hidden flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              SS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
