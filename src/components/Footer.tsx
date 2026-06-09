import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="section-padding bg-[#020712] text-slate-300">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">Delight Vincent Aberage</p>
            <p className="mt-2 text-slate-400">Software Developer</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <li><a href="#home" className="transition hover:text-white">Home</a></li>
            <li><a href="#about" className="transition hover:text-white">About</a></li>
            <li><a href="#skills" className="transition hover:text-white">Skills</a></li>
            <li><a href="#projects" className="transition hover:text-white">Projects</a></li>
            <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
          </ul>
          <button onClick={scrollToTop} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-2xl shadow-cyan-500/20 transition hover:-translate-y-1" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dtech (Delight Vincent). </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
