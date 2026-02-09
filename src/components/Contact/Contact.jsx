import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

  const handleDownloadResume = () => {
    const resumeUrl = '/GarimaJuneja__CV.pdf'; // Make sure this file exists in your public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'GarimaJuneja__CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            <span className="text-white">.</span>
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-center mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>

          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="space-y-6 sm:space-y-8 bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 sm:mb-8">Let's Connect</h3>
              
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(157, 78, 221, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 mb-8 w-full justify-center hover:shadow-lg hover:shadow-blue-500/25"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.button>

              <div className="space-y-6">
                <motion.a 
                  href="mailto:junejag51@gmail.com"
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 p-3 rounded-lg hover:bg-slate-700/50"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="text-blue-400 text-xl sm:text-2xl" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">Email</div>
                    <div className="text-xs sm:text-sm text-gray-400">junejag51@gmail.com</div>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://wa.me/919518013430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 p-3 rounded-lg hover:bg-slate-700/50"
                  whileHover={{ x: 10 }}
                >
                  <FaWhatsapp className="text-green-400 text-xl sm:text-2xl" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">WhatsApp</div>
                    <div className="text-xs sm:text-sm text-gray-400">+91 9518013430</div>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+919518013430"
                  className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 p-3 rounded-lg hover:bg-slate-700/50"
                  whileHover={{ x: 10 }}
                >
                  <FaPhone className="text-blue-400 text-xl sm:text-2xl" />
                  <div>
                    <div className="font-medium text-sm sm:text-base">Phone</div>
                    <div className="text-xs sm:text-sm text-gray-400">+91 9518013430</div>
                  </div>
                </motion.a>

                <motion.div 
                  className="flex items-center space-x-4 text-gray-300 p-3 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-400">Gurgaon, Haryana, 122017</div>
                  </div>
                </motion.div>
              </div>
              
              <div className="flex space-x-6 pt-6 justify-center">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/garima-juneja-598056268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 p-3 rounded-full border border-slate-700/30 hover:border-blue-500 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl text-white hover:text-blue-400" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Garimajunejaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 p-3 rounded-full border border-slate-700/30 hover:border-blue-500 transition-all duration-300"
                >
                  <FaGithub className="text-2xl text-white hover:text-blue-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;