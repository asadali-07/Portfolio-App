import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ProjectSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      y: -10, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#3b82f6",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  const imageVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 } 
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl text-blue-500 font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Top 3 Projects
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap gap-6 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project 1 */}
          <motion.div 
            className="rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-700"
            variants={projectVariants}
            whileHover="hover"
          >
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <motion.div variants={imageVariants} whileHover="hover">
                <Image
                  src="/Screenshot 2024-09-07 175435.png"
                  alt="Project 1"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl font-semibold text-blue-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Wanderlust
            </motion.h3>
            
            <motion.p 
              className="mt-2 mb-4 text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Developed a hotel listing platform with features for browsing,
              filtering, listing hotels, integrating user accounts, and a
              customer review system for an optimal experience.
              <b>
                {" "}
                Built with Express.js, EJS templating, and various npm
                packages (Passport, Multer, Cloudinary).
              </b>
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link
                  href="https://wanderlust-gxsq.onrender.com/listings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-700"
            variants={projectVariants}
            whileHover="hover"
          >
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <motion.div variants={imageVariants} whileHover="hover">
                <Image
                  src="/Screenshot 2025-03-01 165004.png"
                  alt="Project 2"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl font-semibold text-blue-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              SANS-AI
            </motion.h3>
            
            <motion.p 
              className="mt-2 mb-4 text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Built a platform to help users grow their careers with
              AI-powered tools like interview prep, resume building, and cover
              letter generation.
              <b>
                {" "}
                Built using Next.js, Clerk, Inngest, Prisma, NeonDB, Google
                Gemini API, Tailwind CSS, Shadcn UI.
              </b>
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link
                  href="https://sans-ai-gold.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className="rounded-lg flex flex-col justify-center items-center shadow-lg p-6 w-96 bg-white/5 backdrop-blur-sm border border-transparent dark:border-gray-700"
            variants={projectVariants}
            whileHover="hover"
          >
            <div className="w-full overflow-hidden rounded-lg mb-4">
              <motion.div variants={imageVariants} whileHover="hover">
                <Image
                  src="/Screenshot 2025-07-18 004125.png"
                  alt="Project 3"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl font-semibold text-blue-500 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Aximo
            </motion.h3>
            
            <motion.p 
              className="mt-2 mb-4 text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
            Built Aximo, a no-code builder that lets users create and deploy static websites using HTML, CSS, and JavaScript—no coding required
              <b>
                {" "}
                Built with React.js, Tailwind CSS, and backend with Express using Google Gemini API features like Live Preview, Publishing Websites Live on Netlify.
              </b>
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link
                  href="https://aximo-ai.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection