import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming & Data Structures",
      issuer: "PrepInsta",
      description: "Comprehensive certification covering Java fundamentals and advanced data structures",
      icon: <FaCertificate />,
      date: "2024"
    },
    {
      title: "MongoDB Professional",
      issuer: "MongoDB Learn",
      description: "Professional certification in MongoDB database design, development, and administration",
      icon: <FaAward />,
      date: "2024"
    },
    {
      title: "UI/UX Design",
      issuer: "Great Learning",
      description: "Certification in user interface and user experience design principles and practices",
      icon: <FaGraduationCap />,
      date: "2024"
    }
  ];

  return (
    <div id="certifications" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Certifications</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">.</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-center text-lg max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Professional certifications validating expertise in programming, database management, and design principles
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className="text-blue-400 text-4xl p-3 bg-blue-500/10 rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <span className="text-blue-400 text-sm font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                <p className="text-blue-400 font-medium mb-4">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                
                <motion.div 
                  className="mt-6 pt-6 border-t border-slate-700/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">Verified Certification</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
