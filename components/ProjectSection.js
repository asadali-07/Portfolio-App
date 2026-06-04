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
      y: -8,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl text-blue-500 font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Top 4 Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              title: "RESQMEAL",
              img: "/ResQmeal.png",
              desc: "Full-stack food donation platform that bridges restaurants, NGOs, and volunteers, enabling real-time food rescue, location-based pickups, and efficient distribution to reduce food waste.",
              tech: "React, Tailwind, Redux, Express.js, MongoDB, Redis, MapBox, Socket.io",
              link: "https://resqmeal.netlify.app"
            },
            {
              title: "REVOIRÉ",
              img: "/Reviore.png",
              desc: "Production-grade full-stack e-commerce platform featuring role-based access control, secure payments, and AI-driven interactions.",
              tech: "React, Tailwind, Zustand, Express.js, MongoDB, Redis, Razorpay",
              link: "https://revoire.in"
            },
            {
              title: "NEURALMIND-AI",
              img: "/NeuralMind.png",
              desc: "Context-aware AI chatbot with short-term & long-term memory, delivering intelligent responses via LLMs & web search.",
              tech: "React, Tailwind, Express.js, MongoDB, PineconeDB, Socket.io, Gemini",
              link: "https://neuralmind.netlify.app"
            },
            {
              title: "Aximo",
              img: "/Aximo.png",
              desc: "No-code website builder that allows users to test, visually create, edit, and deploy static websites with real-time preview.",
              tech: "React.js, Tailwind, Monaco, Express, Netlify",
              link: "https://aximo-ai.netlify.app/"
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              className="group rounded-2xl flex flex-col w-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 relative"
              variants={projectVariants}
              whileHover="hover"
            >
              {/* Image Header with bleed edge */}
              <div className="w-full overflow-hidden h-48 relative border-b border-gray-100 dark:border-gray-800">
                <motion.div variants={imageVariants} whileHover="hover" className="w-full h-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Gradient overlay for slick modern look */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 truncate group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.split(',').map((techItem, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/40"
                    >
                      {techItem.trim()}
                    </span>
                  ))}
                </div>

                <Button asChild variant="outline">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection