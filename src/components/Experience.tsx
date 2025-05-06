
import React from "react";
import { Book, Award, Briefcase } from "lucide-react";

const Timeline = () => {
  // Combined timeline of education, awards, and work experience
  const timelineItems = [
    {
      type: "education",
      title: "MSc. Mathematics + B.E Chemical Engineering",
      organization: "Birla Institute of Technology and Science",
      period: "July 2017-June 2022",
      location: "Pilani, IND",
      icon: <Book size={24} />,
      details: [
        "Data Structures and Algorithms; Operating Systems; Cryptography; Graph Theory; Applied Statistical Methods; Statistical Inference"
      ]
    },
    {
      type: "award",
      title: "First place in TechSHack hackathon",
      organization: "Nasscom and Tamil Nadu government",
      period: "2021",
      location: "",
      icon: <Award size={24} />,
      details: [
        "Won first place out of 2000+ idea submissions by working with three colleagues to develop an app that leverages Computer Vision and Deep Learning to prevent workplace safety."
      ]
    },
    {
      type: "work",
      title: "Business Analyst",
      organization: "NAVI TECHNOLOGIES",
      period: "Dec 2023 – Present",
      location: "Bangalore, IND",
      icon: <Briefcase size={24} />,
      details: [
        "Revamped the Accounting Expected Credit Loss (ECL) process by building an advanced machine learning pipeline for ECL estimation.",
        "Automated Daily Co-lending Reporting process, delivering daily reports to multiple stakeholders.",
        "Created a pipeline to automate Negative Selection, leveraging insights from hindsighting analysis."
      ]
    },
    {
      type: "work",
      title: "Analyst",
      organization: "AXTRIA INC",
      period: "Jul 2022 – Oct 2023",
      location: "Bangalore, IND",
      icon: <Briefcase size={24} />,
      details: [
        "Time series analysis of monthly total sales for 5+ tenants and computed quarterly territory forecast for 40+ territories.",
        "Automated Target Setting and Data validation process flow using Python based system.",
        "Designed and implemented Health Check reports, monitoring client's performance with over 20 key metrics."
      ]
    },
    {
      type: "work",
      title: "Data Science Intern",
      organization: "MOBILE PREMIER LEAGUE",
      period: "Oct 2021 – July 2022",
      location: "Bangalore, IND",
      icon: <Briefcase size={24} />,
      details: [
        "Trained a new matchmaking model by combining In-Game Features with Game Agnostic Features.",
        "Built a trustscore framework of in-game users from scratch using extracted features and target labels.",
        "Worked on automating the alerting system on AWS Apache workflow for 15 metrics to track performance."
      ]
    },
    {
      type: "work",
      title: "Data Science Intern",
      organization: "OCTRO INC",
      period: "Aug 2021 – Oct 2021",
      location: "Noida, IND",
      icon: <Briefcase size={24} />,
      details: [
        "Created ETL processes using Talend to integrate large datasets from various databases.",
        "Developed predictive models to estimate the lifetime value of customers.",
        "Implemented customer segmentation model based on behavior, preferences, and spending habits."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12">Timeline</h2>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-11 top-6 bottom-0 w-px bg-white/30 z-0"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="flex items-start gap-6">
                  {/* Icon circle */}
                  <div 
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center
                      ${item.type === 'education' ? 'border-purple-400 bg-purple-900/30' : 
                        item.type === 'award' ? 'border-yellow-400 bg-yellow-900/30' : 
                        'border-blue-400 bg-blue-900/30'}`}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-white/70 text-sm px-3 py-1 rounded-full bg-white/10 inline-block">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2 text-white/80">
                      <span className="font-medium">{item.organization}</span>
                      {item.location && (
                        <>
                          <span className="hidden md:inline">•</span>
                          <span>{item.location}</span>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
