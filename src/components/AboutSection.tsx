
import React from 'react';
import { User, Briefcase, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center">
            I'm a passionate frontend developer with experience in creating responsive and interactive web applications. 
            I love solving complex problems and turning ideas into reality through elegant code.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Info</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Name: Delight</li>
                <li>Age: 21</li>
                <li>Location: port harcourt Nigeria</li>
                <li>Languages: English, </li>
              </ul>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-portfolio-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Frontend Developer Intern at cinfores Limited </li>
                <li>Team Lead on Leapn on mentorship project</li>
               
              </ul>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Undergraduate in Computer Science, at the University of port harcourt </li>
                <li>Web Development Bootcamp </li>
             
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary inline-block">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
