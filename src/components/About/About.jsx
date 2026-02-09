import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaAward, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">About</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Me.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-center text-lg max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full-Stack Developer and AI Engineer with expertise in Agentic AI frameworks and scalable web architectures
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div 
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FaCode className="text-blue-400" />
                  Who I Am
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm <span className="text-blue-400 font-semibold">Garima Juneja</span>, 
                  a Full-Stack Developer and AI Engineer at NorthCap University with a CGPA of <span className="text-green-400 font-semibold">8.37</span>. 
                  I specialize in Agentic AI frameworks, MERN stack development, and creating scalable digital solutions 
                  that enhance user engagement and drive business value.
                </p>
              </motion.div>

              <motion.div 
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                  <FaLaptopCode className="text-blue-400" />
                  What I Do
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My focus is on modern web technologies including React, Node.js, and AI frameworks. 
                  I specialize in building scalable architectures, implementing LLM orchestration, and creating 
                  responsive web designs that improve user engagement. I love solving complex problems and 
                  turning innovative ideas into reality through code.
                </p>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaGraduationCap className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-xl text-blue-400 font-medium">Bachelor of Technology (BTech) – Computer Science</p>
                  <span className="text-blue-400 font-medium">The NorthCap University, Gurgaon</span>
                  <p className="text-gray-400">2022 - 2026</p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                      <FaAward className="text-cyan-400" />
                      <span className="text-gray-300 text-sm">CGPA: 8.37</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">🎓</span>
                      <span className="text-gray-300 text-sm">Expected Graduation: 2026</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-slate-800/30 rounded-lg">
                    <p className="text-sm text-gray-400">Senior Secondary Education</p>
                    <p className="text-blue-400 font-medium">S.R.S Public School, Rohtak</p>
                    <p className="text-gray-300 text-sm">Percentage: 93%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaLaptopCode className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">Interests</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <FaCode className="text-blue-400" />
                    <span className="text-gray-300">Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <FaCode className="text-cyan-400" />
                    <span className="text-gray-300">AI Engineering</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
                    <FaCode className="text-blue-400" />
                    <span className="text-gray-300">Agentic AI Frameworks</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;