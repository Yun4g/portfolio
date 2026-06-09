
import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingEffect } from "./useTypingEffect";

const HeroSection: React.FC = () => {
  const typedText = useTypingEffect([
    "Software Developer",
    "User Experience Enthusiast",
    "Product-Focused Creator",
  ], 120, 4000);

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.2),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),transparent_20%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 flex justify-center pointer-events-none">
        <div className="h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-float" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="max-w-2xl space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur-sm">
            
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Delight Vincent</span>
          </h1>
          <div className="text-2xl font-semibold tracking-tight text-cyan-100 sm:text-3xl">
            {typedText}
            <span className="ml-2 inline-block h-8 w-1 rounded-full bg-cyan-300 animate-pulse" />
          </div>
          <p className="max-w-xl text-lg text-slate-300 sm:text-xl">
            I build immersive web experiences with clean animations, modern interfaces, and performance-first architecture.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.a
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1"
            >
              Let&apos;s Talk
            </motion.a>
            <a href="/dTechResume.docx" download="/dTechResume.docx" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl ring-1 ring-white/10 lg:p-8"
        >
          <div className="absolute -left-16 top-6 h-28 w-28 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 shadow-inner shadow-white/5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/90">Crafted for</p>
                <p className="mt-2 text-lg font-semibold text-white">High-impact interfaces</p>
              </div>
              <span className="rounded-full bg-cyan-300/15 px-4 py-2 text-sm text-cyan-100">2026</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "React", value: "Clean UI" },
                { label: "Tailwind", value: "Fast Styling" },
                { label: "TypeScript", value: "Robust Code" },
                { label: "Motion", value: "Smooth Flow" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-white/90">
                  <p className="text-sm text-cyan-200/80">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
