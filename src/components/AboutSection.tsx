import React from "react";
import { User, Briefcase, Code, Music } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-4 md:section-padding bg-white">
      <div className="md:mx-auto">
        <h2 className="section-heading text-center">About Me</h2>
        <div className="md:max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center">
            I'm a dedicated frontend developer with hands-on experience in
            building real-world applications that combine functionality with
            elegant design. I enjoy turning ideas into digital solutions, and my
            journey has allowed me to work on impactful projects across different
            domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Personal Info */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Info</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Name: Delight Vincent</li>
                <li>Location: Port Harcourt, Nigeria</li>
                <li>Languages: English</li>
                <li>
                  Passion: Coding & Music – I love expressing creativity both in
                  code and sound.
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} className="text-portfolio-teal" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <ul className="space-y-2 text-gray-600">
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
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-portfolio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  Undergraduate in Computer Science, University of Port Harcourt
                </li>
                <li>Completed a Web Development Bootcamp</li>
                <li>Hands-on project experience in React, Next.js & TypeScript</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">My Love for Music</h3>
              <p className="text-gray-600">
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
