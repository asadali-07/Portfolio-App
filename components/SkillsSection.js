import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "Languages" },
  { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Languages" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Languages" },
  { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", category: "Frontend" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
  { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Tools" },
  { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Tools" },
  { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", category: "Tools" },
  { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", category: "UI Libraries" },
  { name: "Tailwind CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", category: "UI Libraries" },
  { name: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", category: "UI Libraries" },
  { name: "Shadcn UI", src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", category: "UI Libraries" },
  { name: "Zustand", src: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4", category: "Frontend" },
];


export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
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
        damping: 12
      }
    }
  };

  // Group skills by category
  const categories = {};
  skills.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white/5 to-blue-50/5 dark:from-gray-900/10 dark:to-blue-900/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500  inline-block mb-4">
            My Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in, categorized by their function in the development process.
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category} className="mb-10">
              <motion.h3 
                className="text-xl font-semibold text-blue-500 mb-6 pl-2 border-l-4 border-blue-500"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {category}
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 border border-transparent hover:border-blue-300/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 relative flex items-center justify-center">
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        width={56}
                        height={56}
                        className="object-contain dark:filter dark:brightness-90 dark:contrast-125"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}