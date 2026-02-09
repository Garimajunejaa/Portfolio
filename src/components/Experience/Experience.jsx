import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      period: "June 2025 – July 2025",
      title: "Technical Intern | DishTV",
      tech: "React.js, Java, RESTful APIs, Postman",
      icon: <FaCode />,
      points: [
        "Optimized front-end module performance by 25% using React.js and Java, significantly enhancing UI responsiveness",
        "Integrated 10+ complex RESTful APIs, reducing data synchronization latency by 40% through optimized Postman workflows",
        "Collaborated on 4 production-level modules, maintaining 100% version control accuracy within a 10-member technical team"
      ]
    },
    {
      period: "June 2024 – July 2024",
      title: "Web Developer Intern | InternPe",
      tech: "HTML, CSS, JavaScript, GitHub",
      icon: <FaCode />,
      points: [
        "Developed user-friendly, responsive web interfaces using HTML, CSS, and JavaScript",
        "Managed version control and collaborative coding practices using GitHub repositories",
        "Built interactive applications with modern web development best practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">Experience</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 to-cyan-400">
                  <motion.div 
                    className="absolute -left-[10px] w-[22px] h-[22px] rounded-full bg-blue-500 border-4 border-slate-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                </div>
                
                <motion.div 
                  className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
                >
                  <span className="text-blue-400 font-medium text-base sm:text-lg">{exp.period}</span>
                  <div className="flex items-center gap-2 mt-1">
                    {exp.icon && <span className="text-blue-400">{exp.icon}</span>}
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mt-3">
                    {exp.tech}
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {exp.points.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-gray-300 flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <span className="text-blue-400 text-xl">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;