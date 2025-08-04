import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaEnvelope,FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const contactLinks = [
    {
      href: "mailto:mo.asadali007@gmail.com",
      icon: <FaEnvelope size={24} />,
      label: "Email",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
     {
      href: "https://github.com/asadali-07",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      color: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    {
      href: "https://www.linkedin.com/in/mohd-asad-ali-1a7693257/",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto p-8 rounded-xl shadow-lg bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-800 hover:border-blue-400 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-10 text-blue-500 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Feel free to reach out through any of these platforms. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-6 justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <Link
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <motion.div 
                    className={`flex flex-col items-center p-6 rounded-xl ${link.color} text-white cursor-pointer w-20 h-20 md:w-24 md:h-24 justify-center shadow-md`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="mt-2 text-xs md:text-sm font-medium">{link.label}</span>
                  </motion.div>
                </Link>
                <motion.div 
                  className="absolute -inset-1 rounded-xl z-[-1] bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 blur-md"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Currently available for freelance work and full-time positions.</p>
            <p className="mt-2">Based in India, open to remote opportunities worldwide.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;