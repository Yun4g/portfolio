
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
                <li>Name: Your Name</li>
                <li>Age: 28</li>
                <li>Location: New York, USA</li>
                <li>Languages: English, Spanish</li>
              </ul>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-portfolio-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Frontend Developer at XYZ (2021-Present)</li>
                <li>UI Designer at ABC (2019-2021)</li>
                <li>Internship at DEF (2018)</li>
              </ul>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>BSc Computer Science, University of XYZ (2017-2021)</li>
                <li>Web Development Bootcamp (2018)</li>
                <li>UI/UX Certificate (2019)</li>
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
