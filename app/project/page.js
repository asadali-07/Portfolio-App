"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {SiSocketdotio, SiNextdotjs, SiPrisma } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GiMagicHat } from "react-icons/gi"; // for GSAP (no official icon)
import { VscSymbolNamespace } from "react-icons/vsc"; // for Vector DB (generic DB fallback)

import {
  FaGithub,
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaEye,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    title: "VibeTalks",
    description:
      "A real-time chat application using socket.io. Built with Express and React, Tailwind Css, MongoDb and Zustand using RESTful API principles.",
    githubLink: "https://github.com/asadali-07/chatapp-frontend", 
    liveLink: "https://vibetalks.netlify.app/",
    imageUrl: "/vibetalks.png",
    techStack: ["react", "tailwind", "mongodb","zustand","socket.io","express"],
  },
  {
    title: "LuxePerfume Store",
    description:
      "A luxurious perfume e-commerce landing page designed to showcase premium fragrances and user-centric product layout.",
    githubLink: "https://github.com/asadali-07/influencer-starup-website", 
    liveLink: "https://2407luxeperfume.netlify.app/",
    imageUrl: "/luxeperfume.png", 
    techStack: ["react", "tailwind", "zustand","framer-motion","gsap"],
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service that converts long URLs into short, shareable links. Built using MERN stack with Vercel deployment.",
    githubLink: "https://github.com/asadali-07/UrlShortner", 
    liveLink: "https://url-shortner-eight-eta.vercel.app/",
    imageUrl: "/url-shortner.png", 
    techStack: ["nextjs","mongodb"],
  },
  {
    title: "Asad's Blog",
    description:
      "A personal blog platform to share technical articles and project insights. Built with Next.js and Markdown support.",
    githubLink: "https://github.com/asadali-07/BlogApp", 
    liveLink: "https://asad-blog.vercel.app/",
    imageUrl: "/asad-blog.png", 
    techStack: ["nextjs", "react", "tailwind","prisma-highlighter"],
  },
  {
    title: "Terminal Portfolio",
    description:
      "A terminal-style personal portfolio with animated background and command-line interface to explore skills, projects, and contact info.",
    githubLink: "https://github.com/asadali-07/terminal-portfolio", 
    liveLink: "https://terminal-portfolio-phi-ten.vercel.app/",
    imageUrl: "/terminal-portfolio.png", 
    techStack: ["react", "tailwind", "framer-motion"],
  },
  {
    title: "Recommendation ",
    description:
      "A Product recommendation system when user add product in cart then similar products shows using vector db",
    githubLink: "https://github.com/asadali-07", 
    liveLink: "https://github.com/asadali-07", 
    imageUrl: "/recommendationSystem.png", 
    techStack: ["react", "tailwind", "vectordb","longchain"],
  },
  {
    title: "PassOP",
    description:
      "A password manager that securely stores website URLs, usernames, and passwords using MongoDB, Express, and React.",
    githubLink: "https://github.com/asadali-07/PasswordManager",
    liveLink: "https://passsop.netlify.app/",
    imageUrl: "/Screenshot 2024-09-07 181548.png",
    techStack: ["react", "express", "mongodb", "node"],
  },
  {
    title: "iTask",
    description:
      "A todo app with task management capabilities including marking tasks as done and filtering incomplete tasks. Built with Express, MongoDB and React.",
    githubLink: "https://github.com/asadali-07/ToDoApp",
    liveLink: "http://itassk.netlify.app/",
    imageUrl: "/Screenshot 2024-09-07 181829.png",
    techStack: ["react", "express", "mongodb", "node"],
  },
  {
    title: "Music Player",
    description:
      "An interactive music player with playback controls, duration adjustment, and volume control. Built with HTML, CSS, JavaScript, and Bootstrap.",
    githubLink: "https://github.com/asadali-07/SpotifyClone",
    liveLink: "https://github.com/asadali-07/SpotifyClone",
    imageUrl: "/Screenshot 2024-09-07 182348.png",
    techStack: ["html", "css", "javascript", "bootstrap"],
  },
  {
    title: "iWeather",
    description:
      "A weather application that provides forecasts for any city. Built with Tailwind CSS and React, using a weather API for backend data.",
    githubLink: "https://github.com/asadali-07/minorproject",
    liveLink: "http://iweatherr.netlify.app/",
    imageUrl: "/Screenshot 2024-09-07 182100.png",
    techStack: ["react", "tailwind", "javascript"],
  },
  {
    title: "Simon Game",
    description:
      "A memory game that tests pattern recognition skills. Built with HTML, CSS, and JavaScript, demonstrating DOM manipulation concepts.",
    githubLink: "https://github.com/asadali-07/SimonGame",
    liveLink: "https://github.com/asadali-07/SimonGame",
    imageUrl: "/Screenshot 2024-09-07 182936.png",
    techStack: ["html", "css", "javascript"],
  },
  {
    title: "Chat App Without Socket.io",
    description:
      "A real-time chat application with message editing and deletion capabilities. Built with Express and EJS templates using RESTful API principles.",
    githubLink: "https://github.com/asadali-07/chat-app",
    liveLink: "https://github.com/asadali-07/chat-app",
    imageUrl: "/Screenshot 2024-09-07 183741.png",
    techStack: ["express", "node", "javascript"],
  },
  {
    title: "Social App",
    description:
      "A social networking application with user search functionality and detailed profile views. Implements Express RESTful APIs for data handling.",
    githubLink: "https://github.com/asadali-07/Instagram",
    liveLink: "https://github.com/asadali-07/Instagram",
    imageUrl: "/Screenshot 2024-09-07 215534.png",
    techStack: ["express", "node", "javascript", "mongodb"],
  },
  {
    title: "Hamburger Menu",
    description:
      "A CSS-only hamburger menu implementation, showcasing CSS checkbox functionality and absolute positioning techniques.",
    githubLink: "https://github.com/asadali-07/SidebarMenu",
    liveLink: "https://github.com/asadali-07/SidebarMenu",
    imageUrl: "/Screenshot 2024-09-07 182858.png",
    techStack: ["html", "css"],
  },
  {
    title: "Subscription Cards",
    description:
      "A responsive pricing section featuring three membership tiers, styled with Bootstrap for a clean, modern look.",
    githubLink: "https://github.com/asadali-07/SubscriptionCard",
    liveLink: "https://github.com/asadali-07/SubscriptionCard",
    imageUrl: "/Screenshot 2024-09-07 183112.png",
    techStack: ["html", "css", "bootstrap"],
  },
  {
    title: "Wanderlust Travel Site",
    description:"Built a modern hotel listing platform enabling seamless browsing, smart filtering, secure user accounts, and customer reviews.",
    githubLink: "https://github.com/asadali-07/Wanderlust",
    liveLink: "https://wanderlust-gxsq.onrender.com/listings",
    imageUrl: "/Screenshot 2024-09-07 175435.png",
    techStack: ["express", "ejs", "node", "mongodb","css","html","passport.js","multer","cloudinary" ],
  }
];


const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "react":
      return <FaReact className="text-blue-400" />;
    case "node":
      return <FaNodeJs className="text-green-500" />;
    case "express":
      return <SiExpress className="text-gray-500" />;
    case "mongodb":
      return <SiMongodb className="text-green-600" />;
    case "html":
      return <FaHtml5 className="text-orange-500" />;
    case "css":
      return <FaCss3 className="text-blue-500" />;
    case "javascript":
      return <SiJavascript className="text-yellow-400" />;
    case "bootstrap":
      return <FaBootstrap className="text-purple-600" />;
    case "tailwind":
      return <SiTailwindcss className="text-teal-400" />;
    case "socket.io":
      return <SiSocketdotio className="text-gray-700" />;
    case "framer-motion":
      return <TbBrandFramerMotion className="text-pink-400" />;
    case "gsap":
      return <GiMagicHat className="text-green-400" />; 
    case "nextjs":
      return <SiNextdotjs className="text-white" />;
    case "prisma":
    case "prisma-highlighter":
      return <SiPrisma className="text-indigo-500" />;
    case "vectordb":
      return <VscSymbolNamespace className="text-cyan-400" />;
    default:
      return <FaCode className="text-gray-400" />;
  }
};


const Project = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Get unique tech categories for the filter
  const techCategories = [
    "all",
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];

  // Filter projects based on selected tech
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.techStack.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white/5 to-blue-50/5 dark:from-gray-900/10 dark:to-blue-900/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-500 inline-block mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            My Projects
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Explore my portfolio of web development projects, showcasing my
            skills and experience across various technologies.
          </motion.p>

          {/* Filter buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {techCategories.map((tech) => (
              <motion.button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tech
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white/10 dark:bg-gray-800/20 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  {tech !== "all" && getTechIcon(tech)}
                  <span className="capitalize">{tech}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl overflow-hidden border border-transparent hover:border-blue-300/30 dark:hover:border-blue-500/30 shadow-md hover:shadow-xl transition-all duration-300 group"
                variants={projectVariants}
                layout
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden">
                  <div className="h-52 relative cursor-pointer">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="GitHub Repository"
                        >
                          <FaGithub size={18} />
                        </motion.a>
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full text-white shadow-lg"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Live Demo"
                        >
                          <FaEye size={18} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {project.title}
                    </h2>
                    <div className="flex gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <motion.div
                          key={`${project.title}-${tech}`}
                          className="tooltip"
                          data-tip={
                            tech.charAt(0).toUpperCase() + tech.slice(1)
                          }
                          whileHover={{ y: -3, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {getTechIcon(tech)}
                        </motion.div>
                      ))}
                      {project.techStack.length > 3 && (
                        <div className="tooltip" data-tip="More technologies">
                          <span className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 px-2 py-1 rounded-full">
                            +{project.techStack.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 bg-white/5 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl border border-blue-100/10 dark:border-blue-900/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No projects found with the selected technology.
            </p>
            <motion.button
              onClick={() => setFilter("all")}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project;
