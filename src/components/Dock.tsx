
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, GraduationCap, Code, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const DockItem = ({ icon, label, href, isActive, onClick }: DockItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-white/10",
        isActive ? "text-white" : "text-white/70"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
        isActive ? "bg-white/20 text-white scale-110" : "bg-black/60 text-white/80 hover:scale-105"
      )}>
        {icon}
      </div>
      <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
    </button>
  );
};

interface DockProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Dock({ activeSection, onNavigate }: DockProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY + 10) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const sections = [
    { id: "home", label: "Home", icon: <Home size={24} /> },
    { id: "about", label: "About", icon: <User size={24} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={24} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={24} /> },
    { id: "skills", label: "Skills", icon: <Code size={24} /> },
    { id: "contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  return (
    <div className={cn(
      "fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 px-4 py-2 rounded-full glass-card",
      visible ? "bottom-6" : "-bottom-20"
    )}>
      <div className="flex items-center space-x-1 sm:space-x-2">
        {sections.map((section) => (
          <DockItem
            key={section.id}
            icon={section.icon}
            label={section.label}
            href={`#${section.id}`}
            isActive={activeSection === section.id}
            onClick={() => onNavigate(section.id)}
          />
        ))}
      </div>
    </div>
  );
}
