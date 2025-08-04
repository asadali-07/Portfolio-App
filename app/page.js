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
      <div className="flex flex-col justify-between overflow-hidden">
          <HeroSection />
          <SkillsSection />
          <ProjectSection />
        <section id="contact">
          <ContactSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
      </div>
    </>
  );
}

export default Home;