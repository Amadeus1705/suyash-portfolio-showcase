
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-3/5 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
              Hi, I'm <span className="text-white">Suyash Sharma</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6">
              Business Analyst & Data Scientist
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              I specialize in data analytics, machine learning, and business intelligence. 
              Passionate about transforming complex data into actionable insights that drive business decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact">
                <Button className="w-full sm:w-auto glass-card hover:bg-white/20 border-white/30">
                  Contact Me
                </Button>
              </a>
              <a href="#experience">
                <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                  View Experience
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:Suyashsharma9999@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919131405545"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://github.com/Suyash726"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center animate-fade-in">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 shadow-xl">
              <AvatarImage src="/lovable-uploads/dd2d47dc-83e1-4873-bc66-240cebc48cbc.png" alt="Suyash Sharma" />
              <AvatarFallback className="bg-black text-white text-6xl font-bold">
                SS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
