"use client";
import Link from "next/link";
import { ModeToggle } from "./themeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <motion.nav 
          className={`relative backdrop-blur-xl ${
            scrolled 
              ? 'bg-white/20 dark:bg-black/20 shadow-lg' 
              : 'bg-white/10 dark:bg-black/10'
          } rounded-full px-2 py-2 transition-all duration-300 max-w-fit mx-auto border border-white/20 dark:border-gray-800/40`}
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
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1 px-4"
            variants={navbarVariants}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className="mx-1"
              >
                <Link
                  href={link.href}
                  className="relative px-3 py-2 text-blue-400 font-medium rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
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
              className="ml-2 text-blue-500"
            >
              <ModeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center px-2">
            <motion.span 
              className="mx-2" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ModeToggle />
            </motion.span>
            
            <Sheet>
              <SheetTrigger asChild>
                <motion.button
                  className="p-2 ml-1 text-blue-500 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </motion.button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="border-l border-blue-100/20 dark:border-blue-900/20 backdrop-blur-xl bg-white/20 dark:bg-black/20 w-[280px] sm:w-[350px] max-w-[90vw] overflow-y-auto"
              >
                <SheetHeader className="mb-6">
                  <SheetTitle>
                    <div className="text-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        AsadAli
                      </span>
                    </div>
                  </SheetTitle>
                  <SheetDescription className="relative">
                    {/* Decorative background elements */}
                    <div className="absolute top-10 right-5 w-20 h-20 rounded-full bg-blue-400/10 blur-xl -z-10"></div>
                    <div className="absolute bottom-20 left-5 w-32 h-32 rounded-full bg-purple-400/10 blur-xl -z-10"></div>
                    
                    <div className="flex flex-col justify-center gap-6 items-center mt-8 relative z-10">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={link.href}
                            className="text-lg font-medium text-blue-400 hover:text-blue-500 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5"
                            onClick={() => document.querySelector('[data-state="open"]')?.click()}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="mt-12 pt-6 border-t border-blue-100/20 dark:border-blue-900/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>© {new Date().getFullYear()} AsadAli</p>
                        <p className="mt-1">Full Stack Developer</p>
                      </div>
                    </motion.div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </motion.nav>
      </div>
      
      {/* Spacer to push content below the floating navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;