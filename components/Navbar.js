"use client";
import Link from "next/link";
import { ModeToggle } from "./themeButton";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useLenis";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const router = useRouter();
  const pathname = usePathname();
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation with smooth scroll
  const handleNavClick = (href, e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathname !== '/') {
        // If not on home page, navigate to home first
        router.push('/');
        setTimeout(() => {
          scrollToSection(href.substring(1));
        }, 100);
      } else {
        // If on home page, scroll directly
        scrollToSection(href.substring(1));
      }
    }
  };

  // Navbar link items
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/project", label: "Projects" }
  ];

  // Animation variants
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 } 
    },
    hover: { 
      scale: 1.1, 
      color: "#3b82f6", 
      transition: { type: "spring", stiffness: 300 } 
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <div className="fixed top-2 sm:top-4 left-2 right-2 sm:left-0 sm:right-0 z-50 flex justify-center">
        <motion.nav 
          className={`relative backdrop-blur-xl ${
            scrolled 
              ? 'bg-white/20 dark:bg-black/20 shadow-lg' 
              : 'bg-white/10 dark:bg-black/10'
          } rounded-full px-2 sm:px-3 py-2 transition-all duration-300 max-w-fit mx-auto border border-white/20 dark:border-gray-800/40 w-full sm:w-auto`}
          initial="initial"
          animate="animate"
          variants={navbarVariants}
        >
          {/* Animated background blob */}
          <motion.div 
            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Unified Navigation for Desktop and Mobile */}
          <motion.div 
            className="flex items-center justify-center space-x-1 px-1 sm:px-4"
            variants={navbarVariants}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex-shrink-0"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="relative px-1.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base text-blue-400 font-medium rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "80%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            <motion.div 
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-1 sm:ml-2 text-blue-500 flex-shrink-0"
            >
              <div className="scale-75 sm:scale-100">
                <ModeToggle />
              </div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
      
      {/* Spacer to push content below the floating navbar */}
      <div className="h-12 sm:h-16"></div>
    </>
  );
};

export default Navbar;