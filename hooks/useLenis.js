"use client";
import { useLenis } from 'lenis/react';

export const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollTo = (target, options = {}) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      });
    }
  };

  const scrollToTop = () => {
    scrollTo(0);
  };

  const scrollToSection = (sectionId) => {
    scrollTo(`#${sectionId}`, { offset: -80 });
  };

  return { scrollTo, scrollToTop, scrollToSection, lenis };
};