import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AI Market Intelligence Agent",
      description: "Architected an AI platform using FastAPI and TypeScript, reducing market research time by 85% through automated scraping. Leveraged Gemini 1.5 Flash to process 1,000+ data points for automated SWOT analysis with 95% accuracy. Engineered a Recharts dashboard visualizing 5+ competitive metrics in real-time.",
      technologies: ["FastAPI", "TypeScript", "Gemini 1.5 Flash", "Recharts", "AI/ML"],
      github: "#",
      live: "#",
      image: "/ai-market-intelligence.svg",
      startDate: "Jan 2026",
      endDate: "Present"
    },
    {
      title: "Scalable Job Portal",
      description: "Designed a secure full-stack platform with role-based authentication using JWT tokens and password encryption. Automated application tracking and built an admin dashboard to visualize recruitment statistics.",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Express.js"],
      github: "https://github.com/Garimajunejaa/jobportall-main",
      live: "https://jobportall-main.vercel.app/",
      image: "/carrerconnect.png",
      startDate: "Jan 2025",
      endDate: "April 2025"
    },
    {
      title: "Guild Hub – Event Platform",
      description: "Implemented caching mechanisms to accelerate data loading and added real-time chat for user communication. Enhanced user experience by developing advanced search and filtering options for the 'Local Events' module.",
      technologies: ["React.js", "Flutter", "Dart", "Firebase", "Caching"],
      github: "https://github.com/Garimajunejaa/Guildhubb",
      live: "#",
      image: "/guildhub.png",
      startDate: "April 2025",
      endDate: "Aug 2025"
    }
  ];
  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
         
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-5xl font-bold text-white mb-8 text-center"
          >
            Projects.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl text-center mx-auto"
          >
            A showcase of my technical projects featuring AI-driven solutions, scalable web architectures, 
            and innovative applications. Each project demonstrates expertise in modern technologies and 
            a commitment to solving real-world problems through intelligent design.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden h-48">
                  {project.image && project.image !== "#" ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🚀</div>
                        <p className="text-gray-400 text-sm">Project Image</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && project.github !== "#" && (
                      <motion.a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-black/70 p-2 rounded-full hover:bg-blue-600/80 transition-all duration-200"
                      >
                        <FaGithub className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.live && project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="bg-black/70 p-2 rounded-full hover:bg-blue-600/80 transition-all duration-200"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                      {project.startDate} - {project.endDate}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 h-16 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-blue-400 text-xs rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;