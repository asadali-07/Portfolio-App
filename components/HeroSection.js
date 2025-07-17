import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const HeroSection = () => {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Front-End Dev",
        "Back-End Dev",
        "Full-Stack Dev",
        "MERN Stack Dev",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="py-12 md:py-20 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-gradient-to-br from-blue-400 to-purple-600 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2024-09-07 at 5.31.19 PM.jpeg"
                    alt="Profile"
                    height={288}
                    width={288}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative circles */}
              <motion.div 
                className="absolute -z-10 top-1/2 left-1/2 w-full h-full rounded-full border-2 border-blue-300/30 -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <motion.div 
                className="absolute -z-10 top-1/2 left-1/2 w-[110%] h-[110%] rounded-full border-2 border-purple-300/20 -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotate: -360
                }}
                transition={{ 
                  duration: 25, repeat: Infinity, ease: "linear" 
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="p-6 md:p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-800 hover:border-blue-400 transition-all duration-300 shadow-lg"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <motion.span 
                className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hello, I&apos;m Asad Ali
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                I am a <span ref={el} className="text-blue-500"></span>
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Passionate Full-Stack Developer with expertise in front-end
                design, back-end development, and scalable web solutions. I
                create impactful, efficient websites and applications that bring
                ideas to life. Let&apos;s collaborate to turn your vision into
                reality.
              </motion.p>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center md:justify-start mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-blue-500 hover:bg-blue-600 px-6">
                    <Link href="#contact" className="flex items-center gap-2">
                      Contact Me
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6">
                    <a href="/files/asadResume.pdf" className="flex items-center gap-2" download>
                      <FaDownload size={16} />
                      Resume
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4 justify-center md:justify-start mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a 
                  href="https://github.com/asadali-07" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-md"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/mohd-asad-ali-1a7693257" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;