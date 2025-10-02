import React from "react";
import { User, Briefcase, Code, Music } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-4 md:section-padding  "
     
    >
      <div className="md:mx-auto">
        <h2 className=" text-white text-3xl font-bold text-center my-[40px]">About Me</h2>
        <div className="md:max-w-7xl mx-auto">
          <div className="flex justify-center items-center w-full">
              <p className="text-lg max-w-3xl text-gray-100 mb-8 text-center">
            I'm a dedicated frontend developer with hands-on experience in
            building real-world applications that combine functionality with
            elegant design. I enjoy turning ideas into digital solutions, and my
            journey has allowed me to work on impactful projects across different
            domains.
          </p>

          </div>
       
          <div className="flex flex-col md:flex-row justify-center px-3 gap-3 w-full items-center mt-12">
        
            <div className=" md:w-[33%] md:h-[400px] max-w-3xl bg-black/40 rounded-md shadow-sm shadow-slate-700 p-6 text-center">
              <div className="w-16 h-16 rounded-full flex items-center bg-red-300/30 justify-center mx-auto mb-4">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">Personal Info</h3>
              <ul className="space-y-2 text-gray-200">
                <li>Name: Delight Vincent</li>
                <li>Languages: English</li>
                <li>
                  Passion: football, Coding & Music – I love expressing creativity both in
                  code and sound.
                </li>
              </ul>
            </div>

         
            <div  className=" md:w-[33%] md:h-[400px] max-w-3xl py-4 bg-black/40 rounded-md shadow-sm shadow-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-teal/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-portfolio-teal" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">Experience</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  Frontend Developer for{" "}
                  <a
                    href="https://feroevent.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-blue underline"
                  >
                    Fero Event
                  </a>{" "}
                  – a live streaming event platform.
                </li>
                <li>
                 frontend developer of{" "}
                  <a
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-blue underline"
                  >
                   Aces
                  </a>{" "}, a student referral
                  system built to streamline academic referrals.
                </li>
                <li>
                  Internship experience at Cinfores Limited – worked on real
                  frontend projects and team collaborations.
                </li>
              </ul>
            </div>
            <div className="md:w-[33%] md:h-[400px] max-w-3xl  rounded-md shadow-sm bg-black/40 shadow-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-2">Education</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  Graduate in Computer Science, University of Port Harcourt
                </li>
                <li>Completed a Web Development Bootcamp</li>
                <li>Hands-on project experience in React, Next.js & TypeScript</li>
              </ul>
            </div>
             <div className="md:w-[33%] md:h-[400px] max-w-3xl bg-black/40 rounded-md shadow-sm shadow-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music size={24} className="text-purple-500" />
              </div>
              <h3 className="text-2xl  text-white font-bold mb-2">My Love for Music</h3>
              <p className="text-gray-200">
                Beyond coding, music is a big part of my life. It fuels my
                creativity and inspires the way I approach solving problems and
                building user-centered applications.
              </p>
            </div>
          </div>
         

          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
