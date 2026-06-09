import React from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 0,
    title: "Whatsapp Manajer",
    image: "/scheduleMessage.PNG",
    description: "A management platform for WhatsApp groups with smart tools for organization and messaging.",
    demoLink: "https://manajer.vercel.app/",
    technologies: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 1,
    title: "CinAnalytics",
    image: "/cinAnalytics.PNG",
    description: "A performance-focused analytics dashboard for modern web applications.",
    demoLink: "https://cinalytics.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Express"],
  },
  {
    id: 2,
    title: "Chat Application",
    image: "/chat app.PNG",
    description: "A real-time chat platform built for seamless communication and connection.",
    demoLink: "https://d-chat-one.vercel.app",
    technologies: ["React", "Tailwind", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Online Ticket Generator",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A sleek ticket generator for events, ready for customer-facing workflows.",
    demoLink: "https://ticket-gen-five.vercel.app",
    technologies: ["React", "Tailwind", "Cloudinary"],
  },
  {
    id: 4,
    title: "IP Address Tracker",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A dashboard that discovers and visualizes public IP information in real time.",
    demoLink: "https://ipfy-track.vercel.app",
    technologies: ["React", "Firebase", "Tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative section-padding overflow-hidden bg-[#020816]">
      <div className="absolute -right-16 top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 flex flex-col items-center gap-3 text-sm text-slate-300 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Yun4g?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:border-cyan-300/30 hover:text-white">
            Visit my GitHub <SiGithub className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative h-72 overflow-hidden rounded-t-[2rem]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                    </div>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition hover:bg-cyan-400/20 hover:text-white">
                      <ArrowRight size={18} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
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
