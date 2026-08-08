"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import AboutSection from "@/components/aboutSection/aboutSection";
import ProjectsSection from "@/components/projectsSection/projectsSection";
import SkillsSection from "@/components/skillsSection/skillsSection";
import ContactSection from "@/components/contactSection/contactSection";
import Footer from "@/components/footer/footer";
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

  return (
    <>
      <OrbBackground pageHeight={pageHeight} />
      <div
        id="home"
        style={{
          background:
            "linear-gradient(180deg, #040a11 0%, #1b0a2a 50%, #040a11 100%)",
        }}
        className="min-h-screen text-gray-200 antialiased"
      >
        <Header />
        <div className="max-w-7xl mx-auto p-6 pt-0 lg:p-12 lg:pt-0 z-10">
          <main className="z-10 relative">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            {/* <AboutSection /> */}
            <SkillsSection />
            <ContactSection />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
