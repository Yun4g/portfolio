import React from "react";
import { User, Briefcase, Code, Music } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-[#03081a]">
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 top-28 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="section-heading">About Me</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a passionate full-stack developer building modern, responsive applications with a strong focus on polished UI, performance, and delightful interactions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          <div className="glass-card p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                <User size={28} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Personal Info</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Who I am</h3>
              </div>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li><strong className="text-white">Name:</strong> Delight Vincent</li>
              <li><strong className="text-white">Languages:</strong> English</li>
              <li><strong className="text-white">Passions:</strong> Football, Coding & Music</li>
            </ul>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  <Briefcase size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Experience</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Production-ready projects</h3>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>Frontend Developer at <a href="https://feroevent.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-white">Fero Event</a> building live streaming platforms.</li>
                <li>Built Aces, a referral management system for student networking.</li>
                <li>Internship at Cinfores Limited, delivering polished frontend features in a team environment.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                  <Code size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Education</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Built on strong fundamentals</h3>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li>Graduate in Computer Science from University of Port Harcourt.</li>
                <li>Web development training in React, TypeScript, and modern frameworks.</li>
                <li>Experience building highly interactive web products from end to end.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
