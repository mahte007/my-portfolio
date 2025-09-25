'use client'

import React from "react";
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

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-gray-200 antialiased">
      <div className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Header */}
        <Header />

        {/* Hero */}
        <HeroSection />

        <ServicesSection />

        {/* About & Projects */}
        <main>
          <AboutSection />
          {/* <ProjectsSection /> */}
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
