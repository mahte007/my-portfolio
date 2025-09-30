'use client'

import React, { useEffect } from "react";
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

export default function PortfolioPage() {
  useEffect(() => {
    let firstScrollDown = false;

    function handleFirstScroll(e: { preventDefault: () => void; }) {
      if (!firstScrollDown) {
        e.preventDefault();
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
        firstScrollDown = true;
      }
    }

    window.addEventListener("wheel", handleFirstScroll, { passive: false });
    window.addEventListener("touchstart", handleFirstScroll, { passive: false });

    return () => {
      window.addEventListener("wheel", handleFirstScroll);
      window.addEventListener("touchstart", handleFirstScroll);
    }
  }, [])

  return (
    <div className="min-h-screen text-gray-200 antialiased">
      <div className="max-w-7xl mx-auto p-6 pt-0 lg:p-12 lg:pt-0">
        {/* Header */}
        <Header />

        {/* Hero */}
        <main>
        <div className="h-screen">
          <HeroSection />
          <ServicesSection />
        </div>

        {/* About & Projects */}
          {/* <AboutSection /> */}
          {/* <ProjectsSection /> */}
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
