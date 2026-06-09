import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[1000]">
      <div className={`mx-auto flex h-20 max-w-6xl items-center justify-between px-4 transition-all duration-300 ${isScrolled ? "backdrop-blur-2xl bg-slate-950/80 shadow-2xl shadow-black/20" : "bg-transparent"}`}>
        <a href="#home" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/10 shadow-lg shadow-violet-500/10">
            <img src="/MY logo.jpg" alt="Logo" className="h-9 w-9 rounded-full object-cover" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">Delight</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 transition hover:text-white">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/08060329362" target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400/10 p-3 text-cyan-300 transition hover:bg-cyan-400/20">
            <SiWhatsapp size={20} />
          </a>
          <button onClick={() => setIsMenuOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-white transition hover:border-white/20 md:hidden">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mx-4 mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white/90 text-base font-medium transition hover:text-white" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="/CV.pdf" download="/CV.pdf" className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
