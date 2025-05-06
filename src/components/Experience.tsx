
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "NAVI TECHNOLOGIES",
      position: "Business Analyst",
      period: "Dec 2023 – Present",
      location: "Bangalore, IND",
      responsibilities: [
        "Revamped the Accounting Expected Credit Loss (ECL) process by building an advanced machine learning pipeline for ECL estimation, which also automates the first-level root cause analysis (RCA) for deviations in ECL projections.",
        "Automated Daily Co-lending Reporting process, delivering daily reports to multiple stakeholders, streamlining the data process and reducing manual work by 1-2 hours per day.",
        "Created a pipeline to automate Negative Selection, leveraging any new insights from impact of trends identified during hindsighting analysis to optimize overall portfolio management."
      ]
    },
    {
      company: "AXTRIA INC",
      position: "Analyst",
      period: "Jul 2022 – Oct 2023",
      location: "Bangalore, IND",
      responsibilities: [
        "Time series analysis of the behavior of monthly total sales of different products for 5+ tenants and computed the quarterly territory forecast for 40+ territories.",
        "Automated Target Setting and Data validation process flow using Python based system, streamlining the data process and reducing computation time by 24+ hours per week.",
        "Designed and implemented Health Check reports, monitoring the client's performance with over 20 key metrics leading to a 20% reduction in response time for critical issues."
      ]
    },
    {
      company: "MOBILE PREMIER LEAGUE",
      position: "Data Science Intern",
      period: "Oct 2021 – July 2022",
      location: "Bangalore, IND",
      responsibilities: [
        "Trained a new matchmaking model by combining In-Game Features with Game Agnostic Features which improved Matchmaking model performance by 30%.",
        "Built a trustscore framework of in-game users from scratch using extracted features and target labels, using multi-label XGBOOST classification.",
        "Worked on automating the alerting system on AWS Apache workflow for 15 metrics to track Business and Product performance in US MPL market using Random Forest and XGBoost Regressor models."
      ]
    },
    {
      company: "OCTRO INC",
      position: "Data Science Intern",
      period: "Aug 2021 – Oct 2021",
      location: "Noida, IND",
      responsibilities: [
        "Created ETL processes using Talend to integrate large datasets from various databases, saving 45 hours of manual work per week of in-game data collection by 10%.",
        "Developed predictive models to estimate the lifetime value of customers, identify and prioritize high-value players for personalized retention strategies.",
        "Implemented customer segmentation model based on behavior, preferences, and spending habits, to tailor game features for different player groups, improving player engagement by 18%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/30"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Left side - Company details for odd items */}
                {index % 2 === 0 && (
                  <div className="md:w-1/2 md:pr-12 text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-lg text-white/80">{exp.position}</p>
                    <p className="text-white/60">{exp.location}</p>
                  </div>
                )}
                
                {/* Timeline circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-black border-2 border-white flex items-center justify-center mb-6 md:mb-0">
                  <span className="text-white text-sm">{exp.company.charAt(0)}</span>
                </div>
                
                {/* Right side - period for odd items or company details for even items */}
                {index % 2 === 0 ? (
                  <div className="md:w-1/2 md:pl-12 text-left">
                    <div className="inline-block py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                      {exp.period}
                    </div>
                    <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="md:w-1/2 md:pr-12 text-right">
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-lg text-white/80">{exp.position}</p>
                    <p className="text-white/60">{exp.location}</p>
                  </div>
                )}
                
                {/* Left side - period for even items */}
                {index % 2 !== 0 && (
                  <div className="md:w-1/2 md:pl-12 text-left">
                    <div className="inline-block py-2 px-4 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
                      {exp.period}
                    </div>
                    <ul className="mt-4 space-y-2 text-white/80 list-disc pl-5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
