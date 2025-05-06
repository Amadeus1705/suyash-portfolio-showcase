
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, GraduationCap, Code, Mail } from "lucide-react";
import { useState, useEffect } from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, label, href, isActive, onClick }: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-all duration-300 w-full hover:bg-white/10",
        isActive ? "bg-white/20 text-white" : "text-white/70"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
        isActive ? "bg-white/20 text-white" : "bg-black/60 text-white/80"
      )}>
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
};

interface DockProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Dock({ activeSection, onNavigate }: DockProps) {
  const [isHovered, setIsHovered] = useState(false);
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
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "experience", label: "Timeline", icon: <Briefcase size={20} /> },
    { id: "skills", label: "Skills", icon: <Code size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <div 
      className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 rounded-r-lg glass-card",
        visible ? "translate-x-0" : "-translate-x-full",
        isHovered ? "w-48" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col py-3">
        {sections.map((section) => (
          <SidebarItem
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
