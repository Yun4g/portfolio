
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-portfolio-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-gray-dark font-heading mb-4">
              Hi, I'm <span className="text-portfolio-blue">Delight vincent</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-teal mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              I build responsive web applications with modern technologies and a focus on user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-blue mx-auto overflow-hidden border-4 border-white shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-teal flex items-center justify-center text-white text-9xl font-bold">
                   <img src="/Delight.PNG" alt= "" />
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                <span className="text-portfolio-teal font-bold">2+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
