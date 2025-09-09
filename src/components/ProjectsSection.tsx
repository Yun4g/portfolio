import React from "react";
import { ArrowRight, Link, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectsSection = () => {
  const projects = [
    {
      id: 0,
      title: "Fero Event - Live Streaming Platform",
      category: "web",
      image: "/section 3.PNG", 
      description:
        "A live streaming event platform that allows users to host and participate in online events in real-time.",
      demoLink: "https://feroevent.com",
      technologies: ["Reactjs", "Tailwind CSS", "nodejs", "WebRTC", "Mongo DB"],
    },
    {
      id: 1,
      title: "Aces - Student Referral System",
      category: "web",
      image: "/checkemail.PNG", 
      description:
        "A referral system built for student engagement and tracking. Features dashboards, referral tracking, and authentication.",
      demoLink: "https://aces-pre.vercel.app",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    },
    {
      id: 2,
      title: "Full Stack Exam Management System",
      category: "web",
      image: "/quizImage.jpg",
      description:
        "A full stack exam management system that allows users to create, manage, and take quizzes online.",
      demoLink: "https://ease-quiz.vercel.app",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    },
    {
      id: 3,
      title: "Online Ticket Generator",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A web application that allows users to generate tickets for events.",
      demoLink: "https://ticket-gen-five.vercel.app",
      technologies: ["React", "Tailwind CSS", "Cloudinary"],
    },
    {
      id: 4,
      title: "Public IP Address Tracker",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A web application that tracks and displays the public IP address of the user in real-time.",
      demoLink: "https://ipfy-track.vercel.app",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "Movie Browser",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A web application that allows users to browse and search for movies.",
      demoLink: "https://movie-world-iota.vercel.app",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="md:container mx-auto">
        <motion.h2
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
         className=" text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Yun4g?tab=repositories" target="blank" className="text-center text-[blue]">Click here to go to my Github</a>
        </motion.div>

        <motion.p
          className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills and
          experience.
        </motion.p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000,  }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="card overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                    >
                      <Link size={18} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-portfolio-blue/10 text-portfolio-blue text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-portfolio-blue font-medium hover:text-portfolio-teal transition-colors"
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSection;
