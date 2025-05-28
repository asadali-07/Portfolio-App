"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    }
  };
  
  const socialLinkVariants = {
    hover: { 
      scale: 1.2, 
      y: -3,
      transition: { type: "spring", stiffness: 400 }
    },
    tap: { scale: 0.9 }
  };

  const glowVariants = {
    initial: { opacity: 0.2 },
    animate: { 
      opacity: [0.2, 0.5, 0.2], 
      transition: { 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <footer className="relative py-8 overflow-hidden">
      {/* Blurred background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10 dark:from-blue-900/10 dark:to-purple-900/10 backdrop-blur-sm border-t border-blue-100/20 dark:border-blue-900/20 z-0"></div>
      
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-[-50px] left-[10%] w-60 h-60 rounded-full bg-blue-400/10 blur-3xl z-[-1]"
        animate={{
          x: [0, 30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[-100px] right-[5%] w-80 h-80 rounded-full bg-purple-400/10 blur-3xl z-[-1]"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and copyright section */}
          <motion.div 
            className="w-full md:w-1/3 text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Asad Ali
            </motion.h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              &copy; {currentYear} All rights reserved
            </p>
            <p className="text-xs mt-2 text-gray-500 dark:text-gray-400 flex items-center justify-center md:justify-start gap-1">
              Made with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & Tailwind
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="w-full md:w-1/3"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4 text-blue-500 text-center">Quick Links</h2>
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <motion.li whileHover={{ scale: 1.1, color: "#3b82f6" }}>
                <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, color: "#3b82f6" }}>
                <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, color: "#3b82f6" }}>
                <Link href="project" className="hover:text-blue-500 transition-colors">Projects</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1, color: "#3b82f6" }}>
                <Link href="termcondition" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="w-full md:w-1/3 text-center md:text-right"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4 text-blue-500">Connect With Me</h2>
            <div className="flex justify-center md:justify-end space-x-5">
              <motion.a 
                href="https://github.com/asadali-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full text-white shadow-md hover:shadow-lg"
                variants={socialLinkVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-600/20 blur-md z-[-1]"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/mohdasadali" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-full text-white shadow-md hover:shadow-lg"
                variants={socialLinkVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/20 blur-md z-[-1]"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />
              </motion.a>
              <motion.a 
                href="https://twitter.com/asadali-07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-full text-white shadow-md hover:shadow-lg"
                variants={socialLinkVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/20 blur-md z-[-1]"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative mt-8 pt-4 border-t border-blue-100/10 dark:border-blue-900/10 text-center text-xs text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm"
            animate={{
              width: ["30%", "50%", "30%"],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <p>Thank you for visiting my portfolio. Let&apos;s build something amazing together!</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;