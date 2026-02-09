import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaCode, FaBriefcase } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden pt-24">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.02) 25%, rgba(255, 255, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.02) 75%, rgba(255, 255, 255, 0.02) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.02) 25%, rgba(255, 255, 255, 0.02) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.02) 75%, rgba(255, 255, 255, 0.02) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 pt-16 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div className="flex items-center justify-center gap-2 mb-8 mt-4">
              <FaCode className="text-blue-400 text-2xl " />
              <span className="text-blue-400 font-medium tracking-wide">FULL-STACK DEVELOPER & AI ENGINEER</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Garima</span>
              <br />
              <span className="text-gray-300">Juneja</span>
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
            >
              I'm a Full-Stack Developer and AI Engineer who loves building scalable web applications 
              and intelligent solutions. Currently studying at NorthCap University with a CGPA of <span className="text-blue-400 font-medium">8.37</span>, 
              I enjoy creating projects that make a real impact.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
                <FaBriefcase className="text-blue-400" />
                <span className="text-gray-300 font-medium">Open to Opportunities</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
                <span className="text-gray-400">🎓</span>
                <span className="text-gray-300">Graduating 2026</span>
              </div>
            </motion.div>
        
        <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://github.com/Garimajunejaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/50 p-4 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <FaGithub className="text-xl text-gray-300 hover:text-blue-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/garima-juneja-598056268/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800/50 p-4 rounded-full border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-gray-300 hover:text-blue-400" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('/Garima___CV.pdf', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-medium flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;