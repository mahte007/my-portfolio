import dynamic from "next/dynamic";
import Header from "@/components/header/header";
import HeroSection from "@/components/heroSection/heroSection";
import AboutSection from "@/components/aboutSection/aboutSection";
import ProjectsSection from "@/components/projectsSection/projectsSection";
import ContactSection from "@/components/contactSection/contactSection";
import Footer from "@/components/footer/footer";
import ExperienceSection from "@/components/experienceSection/experienceSection";
import OrbBackground from "@/components/common/orbs/orbs";

const SkillsSection = dynamic(
  () => import("@/components/skillsSection/skillsSection"),
);

export default function PortfolioPage() {
  return (
    <div
      id="home"
      style={{
        background:
          "linear-gradient(180deg, #040a11 0%, #1b0a2a 50%, #040a11 100%)",
      }}
      className="relative min-h-screen text-gray-200 antialiased"
    >
      <OrbBackground />
      <Header />
      <div className="max-w-7xl mx-auto p-6 pt-0 lg:p-12 lg:pt-0 z-10">
        <main className="z-10 relative">
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
