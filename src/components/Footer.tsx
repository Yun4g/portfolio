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
    <footer className="bg-portfolio-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Delight vincent Aberage </span>
            <p className="mt-2 text-blue-100">Frontend Developer</p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-wrap text-center justify-center space-x-6">
              <li><a href="#home" className="hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="hover:text-blue-300 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-300 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="bg-white text-portfolio-blue p-3 rounded-full hover:bg-blue-100 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />

          </button>
        </div>
        <div className="mt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} DTECH.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
