
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
              <p className="text-white/80">
                Experienced in analyzing complex datasets to extract actionable insights using advanced statistical methods and visualization techniques.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-3">Data Science</h3>
              <p className="text-white/80">
                Proficient in developing predictive models and implementing machine learning algorithms to solve complex business problems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow glass-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-3">GenAI</h3>
              <p className="text-white/80">
                Skilled in leveraging cutting-edge generative AI technologies to create innovative solutions and automate complex workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
