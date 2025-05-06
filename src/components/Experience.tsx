
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "NAVI TECHNOLOGIES",
      position: "Business Analyst",
      location: "Bangalore, IND",
      period: "Dec 2023 – Present",
      responsibilities: [
        "Revamped the Accounting Expected Credit Loss (ECL) process by building an advanced machine learning pipeline for ECL estimation, which also automates the first-level root cause analysis (RCA) for deviations in ECL projections.",
        "Automated Daily Co-lending Reporting process, delivering daily reports to multiple stakeholders, streamlining the data process and reducing manual work by 1-2 hours per day.",
        "Created a pipeline to automate Negative Selection, leveraging any new insights from impact of trends identified during hindsighting analysis to optimize overall portfolio management."
      ]
    },
    {
      company: "AXTRIA INC",
      position: "Analyst",
      location: "Bangalore, IND",
      period: "Jul 2022 – Oct 2023",
      responsibilities: [
        "Time series analysis of the behavior of monthly total sales of different products for 5+ tenants and computed the quarterly territory forecast for 40+ territories.",
        "Automated Target Setting and Data validation process flow using Python based system, streamlining the data process and reducing computation time by 24+ hours per week.",
        "Designed and implemented Health Check reports, monitoring the client's performance with over 20 key metrics leading to a 20% reduction in response time for critical issues."
      ]
    },
    {
      company: "MOBILE PREMIER LEAGUE",
      position: "Data Science Intern",
      location: "Bangalore, IND",
      period: "Oct 2021 – July 2022",
      responsibilities: [
        "Trained a new matchmaking model by combining In-Game Features with Game Agnostic Features which improved Matchmaking model performance by 30%.",
        "Built a trustscore framework of in-game users from scratch using extracted features and target labels, using multi-label XGBOOST classification.",
        "Worked on automating the alerting system on AWS Apache workflow for 15 metrics to track Business and Product performance in US MPL market using Random Forest and XGBoost Regressor models."
      ]
    },
    {
      company: "OCTRO INC",
      position: "Data Science Intern",
      location: "Noida, IND",
      period: "Aug 2021 – Oct 2021",
      responsibilities: [
        "Created ETL processes using Talend to integrate large datasets from various databases, saving 45 hours of manual work per week of in-game data collection by 10%.",
        "Developed predictive models to estimate the lifetime value of customers, identify and prioritize high-value players for personalized retention strategies.",
        "Implemented customer segmentation model based on behavior, preferences, and spending habits, to tailor game features for different player groups, improving player engagement by 18%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-theme-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-6 mt-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-theme-blue">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <CardTitle className="text-xl font-bold text-theme-dark-blue">
                    {exp.company} | <span className="text-theme-blue">{exp.position}</span>
                  </CardTitle>
                  <div className="text-theme-gray text-sm mt-1 md:mt-0">
                    {exp.location} | {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-theme-gray">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
