
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 75 },
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Git/GitHub", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "REST APIs", level: 80 },
        { name: "Testing", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-gray-light">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          I specialize in frontend development with a focus on creating responsive and accessible web applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-8 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-teal"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
