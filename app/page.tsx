"use client";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import InfiniteScrollProjects from "@/components/sections/InfiniteScrollProjects";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import Footer from "@/components/ui/Footer";
import { useRef } from "react";

export default function HomePage() {
  const portfolioForJob = true; // can be for freelancing the service section and others will work
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        sectionRefs={{
          Home: homeRef,
          About: aboutRef,
          Projects: projectsRef,
          Skills: skillsRef,
        }}
        portfolioForJob={portfolioForJob}
      />

      <HeroSection ref={homeRef} portfolioForJob={portfolioForJob} />

      <InfiniteScrollProjects />

      <AboutSection ref={aboutRef} />

      <ProjectsSection ref={projectsRef} />

      {!portfolioForJob ? (
        <ServicesSection ref={skillsRef} />
      ) : (
        <SkillsSection ref={skillsRef} />
      )}

      <ContactSection />

      <Footer />
    </div>
  );
}
