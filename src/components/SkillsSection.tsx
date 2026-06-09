import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#f06529]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#2965f1]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f0db4f]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#3c873a]" /> },
  { name: "Git", icon: <SiGit className="text-[#f1502f]" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#ffffff]" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative section-padding overflow-hidden bg-[#020916]">
      <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="section-heading">My Skills</h2>
        <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-lg">
          I create polished digital products with a full-stack mindset, blending frontend design, backend logic, and fast deployable applications.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card group p-8 text-center"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-4xl shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-105">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            <p className="mt-2 text-sm text-slate-300">Modern tooling, clean architecture, and beautiful interactions.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
