import React, { useState } from 'react';
import { Code, Link, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Online Ticket Generator",
      category: "web",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A web application that allows users to generate tickets for events.",
      demoLink: "https://ticket-gen-five.vercel.app",
      codeLink: "#",
      technologies: ["React", "Tailwind CSS", "Cloudinary"]
    },
    {
      id: 2,
      title: "Public IP Address Tracker",
      category: "web",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A web application that tracks and displays the public IP address of the user in real-time.",
      demoLink: "https://ipfy-track.vercel.app",
      codeLink: "#",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Leap On Mentorship Project",
      category: "web",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A mentorship platform that connects mentors and mentees for skill development.",
      demoLink: "https://leapon.com.ng",
      codeLink: "#",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"]
    },
     {
      id: 4,
      title: "Movie browser",
      category: "web",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A web application that allows users to browse and search for movies.",
      demoLink: "https://movie-world-iota.vercel.app",
      codeLink: "#",
      technologies: ["Nextjs", "Tailwind CSS", "Typescript",  "MongoDB"]
    },
  
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  


  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">My Projects</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">i wn
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card overflow-hidden group animate-fade-in">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink} 
                      className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                      aria-label="View demo"
                    >
                      <Link size={18} />
                    </a>
                   
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-portfolio-blue/10 text-portfolio-blue text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  className="inline-flex items-center text-portfolio-blue font-medium hover:text-portfolio-teal transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
     
      </div>
    </section>
  );
};

export default ProjectsSection;
