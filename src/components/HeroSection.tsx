
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingEffect } from "./useTypingEffect";

const HeroSection: React.FC = () => {
  const typedText = useTypingEffect( ["Software Developer", "User Experience Enthusiast", "Problem Solver"],
    120,
    4000
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6] text-slate-100"
    >
      <div className="container  px-6">
        <div>
          <motion.div
            className="w-[100]  space-y-6 flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-blue-400">Delight Vincent</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400">
              {typedText}
              <span className="border-r-2 border-emerald-400 animate-pulse ml-1" />
            </h2>
            <p className="text-slate-300 text-center text-lg max-w-md">
              I craft responsive and modern web applications with a strong
              focus on performance and delightful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                View My Work <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-center"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
  


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
