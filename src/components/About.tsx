
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-theme-dark-blue mb-3">Data Analysis</h3>
              <p className="text-theme-gray">
                Experienced in analyzing large datasets to extract valuable insights using various statistical methods and tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-theme-dark-blue mb-3">Machine Learning</h3>
              <p className="text-theme-gray">
                Proficient in developing predictive models using advanced machine learning algorithms to solve complex business problems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-theme-dark-blue mb-3">Automation</h3>
              <p className="text-theme-gray">
                Skilled in developing automated pipelines and workflows to streamline data processes and improve efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-theme-light-gray p-6 rounded-lg">
          <p className="text-theme-gray leading-relaxed">
            I am a data professional with a passion for transforming raw data into meaningful insights. With a background in both mathematics and engineering, I bring a unique analytical perspective to solve complex business challenges. 
            My experience spans across financial services, pharmaceutical analytics, and gaming industries, where I've applied my expertise in data analysis, machine learning, and automation to drive business growth and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
