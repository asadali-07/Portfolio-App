"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-blue-500 origin-left z-[60] transform-gpu"
      style={{ scaleX }}
      initial={{ scaleX: 0 }}
    />
  );
};

export default ScrollProgress;