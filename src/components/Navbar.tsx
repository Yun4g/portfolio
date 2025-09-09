import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full z-[1000] fixed top-0 flex items-center pt-4">
      <nav
        className={`w-full max-w-6xl border rounded-full mx-auto transition-all duration-300 px-4 py-3 flex justify-between items-center ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
       
        <a
          href="#home"
          className={`text-2xl font-bold font-heading ${
            isScrolled ? "text-portfolio-blue" : "text-white"
          }`}
        >
          DTECH
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-portfolio-blue" : "text-white hover:text-gray-200"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* CV Download Button */}
          <a href="/Delight-CV.pdf" download="Delight-Vincent-CV.pdf">
            <button className="w-[190px] h-[50px] flex justify-center gap-2 items-center rounded-xl text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6] hover:scale-105 transition-transform">
              <Download className="h-5 w-5" />
              Download CV
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X
              className={`${isScrolled ? "text-[#040479]" : "text-white"}`}
              size={24}
            />
          ) : (
            <Menu
              className={`${isScrolled ? "text-[#040479]" : "text-white"}`}
              size={24}
            />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 bg-white shadow-md rounded-lg animate-fade-in mx-4">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium hover:text-portfolio-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a href="/CV.pdf" download="/CV.pdf">
              <button className="w-full h-[50px] flex justify-center gap-2 items-center rounded-xl text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6] hover:scale-105 transition-transform">
                <Download className="h-5 w-5" />
                Download CV
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
