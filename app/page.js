"use client";
import React from "react";
import SkillsSection from "@/components/SkillsSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";

function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <AboutSection />
    </>
  );
}

export default Home;
