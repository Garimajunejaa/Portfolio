import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGithub, FaJava, FaGit 
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostman, SiVisualstudiocode,
  SiSpringboot, SiMysql, SiTypescript, SiPython,
  SiFirebase, SiTailwindcss, SiExpress, SiFastapi
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'Recharts', icon: <SiVisualstudiocode className="text-[#FF6C37]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express.js', icon: <SiExpress className="text-[#000000]" /> },
    { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
    { name: 'RESTful APIs', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
    { name: 'SQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'Git', icon: <FaGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'JWT Auth', icon: <SiFastapi className="text-[#009688]" /> }
  ];

  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: 'Git', icon: <FaGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> }
  ];

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-16">
            <span className="text-white">Skills</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-gray-300 text-xs font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-16 sm:mt-20 mb-8 sm:mb-12 text-center"
          >
            <span className="text-white">Tools &</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Software</span>
          </motion.h3>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-5xl mb-3">{tool.icon}</div>
                <p className="text-gray-300 text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;