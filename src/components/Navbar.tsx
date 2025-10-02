import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    
      if (window.scrollY > 200) {
         setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }

      
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

  const WhatsappContact = () => {
    
  }
  return (
    <header className="w-full z-[1000] fixed top-0 flex  items-center pt-4">
      <nav
        className={`w-full max-w-xl md:max-w-6xl h-[70px]  rounded-full relative mx-auto transition-all duration-300 px-4 md:py-3 flex justify-center items-center ${
          isScrolled === true ? "bg-black/50 shadow-md" : "bg-transparent"
        }`}
      >

        <div className="absolute left-6 top-4">
          <img src="/MY logo.jpg" className="h-10 w-10 rounded-full object-contain"/>
        </div>

        <div className="absolute right-6 top-4 cursor-pointer">
          <a
            href="https://wa.me/08060329362"
            target="_blank">
               <SiWhatsapp className="h-full text-4xl text-green-500"/>
            </a>
        
          </div>

        <div className="hidden md:flex items-center  space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors text-white hover:text-gray-200`}
            >
              {link.name}
            </a>
          ))}

         
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X
              className={`${isScrolled ? "text-[white]" : "text-white"}`}
              size={24}
            />
          ) : (
            <Menu
              className={`${isScrolled ? "text-[white]" : "text-white"}`}
              size={24}
            />
          )}
        </button>
      </nav>

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
              <button className="w-full h-[50px] flex justify-center gap-2 items-center rounded-2xl text-white bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6] hover:scale-105 transition-transform">
                <Download className="h-5 w-5" />
                Download CV
              </button>
            </a>
             <div className="absolute right-6 top-4 cursor-pointer">
      
        
          </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
