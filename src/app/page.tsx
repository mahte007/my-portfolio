'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Menu } from "lucide-react";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import AboutSection from "@/components/aboutSection/aboutSection";
import ProjectsSection from "@/components/projectsSection/projectsSection";
import SkillsSection from "@/components/skillsSection/skillsSection";
import ContactSection from "@/components/contactSection/contactSection";
import Footer from "@/components/footer/footer";
import ServicesSection from "@/components/servicesSection/servicesSection";
import Button from "@/components/common/button/button";
import ExperienceSection from "@/components/experienceSection/experienceSection";
import OrbBackground from "@/components/common/orbs/orbs";

export default function PortfolioPage() {

  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = document.documentElement.scrollHeight;
      setPageHeight(height);
    };

    updateHeight(); // run on mount
    window.addEventListener("resize", updateHeight); // update on resize

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  console.log(pageHeight)

  return (
    <div className="min-h-screen text-gray-200 antialiased">
      <OrbBackground pageHeight={pageHeight} />
      <Header />
      <div className="max-w-7xl mx-auto p-6 pt-0 lg:p-12 lg:pt-0 z-10">
        <main>
        <div>
          <HeroSection />
          <ServicesSection />
        </div>
          {/* <AboutSection /> */}
          {/* <ProjectsSection /> */}
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
