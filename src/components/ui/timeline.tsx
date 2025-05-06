
import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const [activeItem, setActiveItem] = React.useState<number | null>(null);

  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-0 top-0 h-full w-0.5 bg-theme-blue/30 ml-6 md:ml-8"></div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div 
              className="flex items-start gap-4 md:gap-6"
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-theme-blue bg-white shadow-md flex items-center justify-center relative z-10">
                <span className="text-lg font-bold text-theme-blue">{item.company.charAt(0)}</span>
              </div>
              <div className="pt-1">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-theme-dark-blue">{item.company}</h3>
                  <span className="text-sm text-theme-blue font-medium">{item.position}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-1 text-theme-gray">
                  <span className="text-sm">{item.location}</span>
                  <span className="hidden md:block text-xs">•</span>
                  <span className="text-sm">{item.period}</span>
                </div>
              </div>
            </div>
            
            {/* Detail panel that shows on hover */}
            <div 
              className={cn(
                "mt-4 ml-16 md:ml-20 p-4 bg-white/80 backdrop-blur-sm border border-theme-blue/20 rounded-lg shadow-md transition-all duration-300",
                activeItem === index ? "opacity-100 transform translate-y-0 scale-100" : "opacity-0 transform -translate-y-2 scale-95 pointer-events-none"
              )}
            >
              <ul className="list-disc pl-5 space-y-2 text-theme-gray">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
