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
    <section className="py-20">
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
                  src="/Reviore.png"
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
              REVOIRÉ
            </motion.h3>

            <motion.p
              className="mt-2 mb-4 text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Reviore is a production-grade full-stack e-commerce platform featuring
              role-based access control, secure payments, AI-driven interactions, and an
              event-driven architecture for scalability and reliability.
              <b>
                {" "}
                Built using React, Tailwind CSS, Framer Motion, Zustand, Express.js,
                MongoDB, Redis, CloudAMQP, Razorpay, and LangChain with Gemini API.
              </b>
            </motion.p>


            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link
                  href="https://revoire.netlify.app"
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
                  src="/NeuralMind.png"
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
              NEURALMIND-AI
            </motion.h3>

            <motion.p
              className="mt-2 mb-4 text-center text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Neuralmind AI is a context-aware AI chatbot with short-term and long-term
              memory, designed to deliver intelligent responses by combining LLMs,
              vector databases, and real-time web search.
              <b>
                {" "}
                Built using React, Tailwind CSS, Express.js, MongoDB, PineconeDB,
                Socket.io, JWT authentication, Tavily Web Search API, and Google Gemini API.
              </b>
            </motion.p>


            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link
                  href="https://neuralmind.netlify.app"
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
                  src="/Aximo.png"
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
              Aximo is a no-code website builder that allows users to visually create,
              edit, and deploy static websites with real-time preview using HTML, CSS,
              and JavaScript—without writing code manually.
              <b>
                {" "}
                Built using React.js, Tailwind CSS, Monaco Editor for real-time code
                editing, and an Express backend with Netlify integration for one-click
                deployment.
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