
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  category: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: ["Python", "C++", "Java", "C", "R"]
    },
    {
      category: "Databases",
      skills: ["SQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Frameworks",
      skills: ["OpenCV", "TensorFlow", "PyTorch", "Keras", "Scikit-Learn"]
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Mac-OS", "Windows"]
    },
    {
      category: "Web Development",
      skills: ["JavaScript", "React", "Node.js", "HTML/CSS"]
    },
    {
      category: "Others",
      skills: ["PowerBI", "Git", "Flask", "Excel", "Docker", "AWS", "PySpark"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-theme-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-theme-dark-blue mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-white px-3 py-1 rounded-full text-sm text-theme-blue border border-theme-blue shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
