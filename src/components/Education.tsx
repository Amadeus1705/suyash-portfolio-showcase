
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <Card className="shadow-md hover:shadow-lg transition-shadow mt-8 border-l-4 border-l-theme-blue">
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-theme-blue">
                  <School size={24} />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-theme-dark-blue">
                    MSc. Mathematics + B.E Chemical Engineering
                  </CardTitle>
                  <div className="text-theme-blue font-medium mt-1">
                    Birla Institute of Technology and Science
                  </div>
                </div>
              </div>
              <div className="text-theme-gray text-sm mt-2 md:mt-0">
                Pilani, IND | July 2017-June 2022
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4">
              <h3 className="font-semibold text-theme-dark-blue mb-2">Coursework</h3>
              <p className="text-theme-gray">
                Data Structures and Algorithms; Operating Systems; Cryptography; Graph Theory; Applied Statistical Methods; Statistical Inference
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-10">
          <h3 className="text-xl font-bold text-theme-dark-blue mb-4">Awards</h3>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="font-medium text-theme-dark-blue">
                  First place in TechSHack hackathon by Nasscom and Tamil Nadu government
                </div>
                <div className="text-theme-gray mt-1 md:mt-0">2021</div>
              </div>
              <p className="text-theme-gray mt-2">
                Won first place out of 2000+ idea submissions by working with three colleagues to develop an app that leverages Computer Vision and Deep Learning to prevent workplace safety.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
