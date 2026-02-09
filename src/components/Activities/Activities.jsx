import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaCalendarAlt, FaMedal, FaStar, FaAward } from 'react-icons/fa';

const Activities = () => {
  const achievements = [
    {
      title: "Competitive Excellence",
      organization: "Younity.in Selection",
      description: "Selected among the top 400 of 7,000+ applicants for Younity.in (May 2024)",
      icon: <FaTrophy />
    },
    {
      title: "International Recognition",
      organization: "OPTICA Professional Society",
      description: "Awarded a 1-year membership to OPTICA, a professional society for optics and photonics",
      icon: <FaAward />
    }
  ];

  const leadership = [
    {
      title: "Event Coordination",
      organization: "SPORTIFY 3.0 & Digital Shield",
      description: "Managed SPORTIFY 3.0 and Digital Shield events, engaging over 200+ students",
      icon: <FaCalendarAlt />
    },
    {
      title: "Digital Engagement",
      organization: "Club Optica",
      description: "Increased Club Optica's social media engagement by 40% through strategic content planning",
      icon: <FaUsers />
    }
  ];

  const events = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 sm:mb-16 text-center"
          >
            Achievements & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Leadership</span>.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Leadership Roles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 border-b-2 border-blue-400/50 pb-2 inline-block text-center">
                Achievements & Recognition
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <motion.span 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-blue-400 text-3xl p-3 bg-blue-500/10 rounded-lg"
                      >
                        {achievement.icon}
                      </motion.span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                        <p className="text-blue-400 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Events & Social Work */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 border-b-2 border-blue-400/50 pb-2 inline-block text-center">
                Leadership & Impact
              </h3>
              <div className="space-y-6">
                {leadership.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <motion.span 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-blue-400 text-3xl p-3 bg-blue-500/10 rounded-lg"
                      >
                        {role.icon}
                      </motion.span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                        <p className="text-blue-400 font-medium mb-2">{role.organization}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;