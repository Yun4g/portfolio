import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,

} from "react-icons/si";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Git", icon: <SiGit className="text-red-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-black" /> },
        { name: "Responsive Design", icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-gray-light">
      <div className="md:container mx-auto">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="text-lg text-gray-600 mb-12 text-center md:max-w-2xl mx-auto">
          I specialize in frontend development but also work with backend and database technologies to build complete web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
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
