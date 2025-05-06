
import { School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white mb-12">Education</h2>
        
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="text-theme-blue">
              <School size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">
                MSc. Mathematics + B.E Chemical Engineering
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-white/80 text-lg">Birla Institute of Technology and Science</p>
                <p className="text-white/60">Pilani, IND | July 2017-June 2022</p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white text-lg font-medium mb-2">Coursework</h4>
                <p className="text-white/80">
                  Data Structures and Algorithms; Operating Systems; Cryptography; Graph Theory; Applied Statistical Methods; Statistical Inference
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Awards</h3>
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <h4 className="text-lg font-medium text-white">First place in TechSHack hackathon by Nasscom and Tamil Nadu government</h4>
              <span className="text-white/60">2021</span>
            </div>
            <p className="text-white/80">
              Won first place out of 2000+ idea submissions by working with three colleagues to develop an app that leverages Computer Vision and Deep Learning to prevent workplace safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
