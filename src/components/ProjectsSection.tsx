
import React, { useState } from 'react';
import { Code, Link, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A fully responsive e-commerce platform built with React, Redux, and Stripe for payments.",
      demoLink: "#",
      codeLink: "#",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "app",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A beautiful task management application with drag-and-drop functionality and user authentication.",
      demoLink: "#",
      codeLink: "#",
      technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
      demoLink: "#",
      codeLink: "#",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A clean and modern portfolio website to showcase projects and skills.",
      demoLink: "#",
      codeLink: "#",
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    }
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
    { id: "design", name: "UI/UX Design" }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">My Projects</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-portfolio-blue text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
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
                    <a 
                      href={project.codeLink} 
                      className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                      aria-label="View code"
                    >
                      <Code size={18} />
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
                  className="inline-flex items-center text-portfolio-blue font-medium hover:text-portfolio-teal transition-colors"
                >
                  View Details <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary inline-block">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
