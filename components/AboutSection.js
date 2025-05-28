import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa'

const AboutSection = () => {
  const skillItems = [
    { icon: <FaCode size={20} />, label: "Frontend Development" },
    { icon: <FaServer size={20} />, label: "Backend Systems" },
    { icon: <FaMobile size={20} />, label: "Responsive Design" },
    { icon: <FaDatabase size={20} />, label: "Database Management" }
  ]
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Profile Image with Animation */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-gradient-to-br from-blue-400 to-purple-600 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2024-09-07 at 5.31.19 PM.jpeg"
                    alt="Profile"
                    height={256}
                    width={256}
                    className="w-full h-full object-cover"
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
          
          {/* Right Column - Text Content */}
          <motion.div 
            className="w-full lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-800 hover:border-blue-400 transition-all duration-300 shadow-lg"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
            >
              <motion.span 
                className="inline-block text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Hello, I&apos;m
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-500 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Asad Ali
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl font-medium mb-6 text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                FullStack Developer (MERN)
              </motion.p>
              
              <motion.p 
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Passionate Full-Stack Developer with expertise in front-end
                design, back-end development, and scalable web solutions. I create
                impactful, efficient websites and applications that bring ideas
                to life. Let&apos;s collaborate to turn your vision into reality.
              </motion.p>
              
              {/* Skills Section */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {skillItems.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      show: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "rgba(59, 130, 246, 0.05)"
                    }}
                  >
                    <div className="text-blue-500 mb-2">{skill.icon}</div>
                    <span className="text-xs md:text-sm text-center text-gray-600 dark:text-gray-300">{skill.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection