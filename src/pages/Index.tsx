
import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Dock } from "@/components/Dock";
import { SparklesBackground } from "@/components/ui/sparkles";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const scrolling = useRef(false);

  useEffect(() => {
    const sections = ["home", "about", "experience", "skills", "contact"];
    
    sections.forEach(section => {
      sectionsRef.current[section] = document.getElementById(section);
    });

    const handleScroll = () => {
      if (scrolling.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = sectionsRef.current[section];
        
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              
              // Update URL hash without scrolling
              const newUrl = `${window.location.pathname}${window.location.search}#${section}`;
              window.history.replaceState(null, "", newUrl);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    
    if (section) {
      scrolling.current = true;
      
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
      
      // Update active section after scrolling completes
      setTimeout(() => {
        setActiveSection(sectionId);
        scrolling.current = false;
        
        // Update URL hash
        const newUrl = `${window.location.pathname}${window.location.search}#${sectionId}`;
        window.history.replaceState(null, "", newUrl);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <SparklesBackground />
      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Dock activeSection={activeSection} onNavigate={scrollToSection} />
    </div>
  );
};

export default Index;
