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
        { icon: <SiHtml5 className="text-orange-600" /> } ,
        { icon: <SiCss3 className="text-blue-600" /> },
        { icon: <SiJavascript className="text-yellow-400" /> },
        { icon: <SiTypescript className="text-blue-500" /> },
        {  icon: <SiReact className="text-cyan-400" /> },
        { icon: <SiNextdotjs className="text-black" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Git", icon: <SiGit className="text-red-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-black" /> },
        { name: "Responsive Design", icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
 
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="md:container mx-auto">
        <h2 className="section-heading text-center">My Skills</h2>
        <p className="text-lg text-gray-200 mb-12 text-center md:max-w-2xl mx-auto">
          I specialize in frontend development but also work with backend and database technologies to build complete web applications.
        </p>

        <div className="w-full gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4  flex justify-center  gap-10 flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className=" items-center text-gray-700"
                  >
                    <span className="text-[120px] text-center rounded-2xl  animate-accordion-down">{skill.icon}</span>
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
