"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaScroll, FaRegCopyright, FaShieldAlt, FaHandPaper, FaEnvelope } from 'react-icons/fa';

const Terms = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 20 
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100,
        delay: 0.2 
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 70 
      }
    }
  };

  const sections = [
    {
      id: 1,
      title: "Use of the Website",
      content: "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
      icon: <FaScroll className="text-blue-500 text-2xl" />
    },
    {
      id: 2,
      title: "Intellectual Property",
      content: "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited.",
      icon: <FaRegCopyright className="text-blue-500 text-2xl" />
    },
    {
      id: 3,
      title: "Limitation of Liability",
      content: "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.",
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />
    },
    {
      id: 4,
      title: "Termination",
      content: "We reserve the right to terminate your use of the website for any reason, without notice, at any time.",
      icon: <FaHandPaper className="text-blue-500 text-2xl" />
    },
    {
      id: 5,
      title: "Contact Us",
      content: "If you have any questions about these terms, please contact us at mo.asadali007@gmail.com.",
      icon: <FaEnvelope className="text-blue-500 text-2xl" />
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white/5 to-blue-50/5 dark:from-gray-900/10 dark:to-blue-900/5">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={titleVariants}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block mb-4">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to My Portfolio! By using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </motion.div>
        
        <motion.div 
          className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/20 p-6 md:p-10 rounded-2xl border border-blue-200/20 dark:border-blue-800/20 shadow-xl"
          variants={cardVariants}
        >
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              className={`mb-10 ${index !== sections.length - 1 ? "pb-8 border-b border-blue-100/20 dark:border-blue-900/20" : ""}`}
              variants={textVariants}
              whileHover={{ 
                x: 5, 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 rounded-full bg-blue-100/30 dark:bg-blue-900/20 flex items-center justify-center">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 text-blue-500 flex items-center">
                    {section.id}. {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="mt-12 p-6 rounded-xl bg-blue-50/30 dark:bg-blue-900/10 border border-blue-100/30 dark:border-blue-800/30"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Last updated: May 28, 2025. These terms are subject to change without notice.
              <br />
              <span className="text-blue-500 font-medium mt-2 block">
                By continuing to use this website, you acknowledge that you have read and understood these terms.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Terms;