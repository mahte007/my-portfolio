import { motion } from "framer-motion";
import ImageCard from "../common/imageCard/imageCard";
import CustomTitle from "../common/customTitle/customTitle";

export default function ProjectsSection() {
  const projects = [
    {
      title: "My Portfolio",
      desc: "Personal portfolio website built with React, featuring animations and responsive design.",
      tags: ["React", "Vanilla CSS", "TypeScript"],
      buttonText: "You Are Here",
      imageLink: "/MyPortfolio.png",
    },
    {
      title: "Architech Portfolio Template",
      desc: "Template for architects and designers — clean layout, image gallery, and easy customization.",
      tags: ["React", "NextJS", "LocalStorage"],
      buttonText: "View Project",
      imageLink: "/ArchitectPortfolio.png",
      link: "https://architect-portfolio.netlify.app/",
    },
    {
      title: "Be my next project",
      desc: "Looking for a modern, fast website for your business? Let’s work together.",
      tags: ["React", "TypeScript", "NextJS"],
      buttonText: "Contact Me",
      imageLink: "/Filler.png",
      link: "#contact",
    },
  ];

  return (
    <section id="projects" className="mb-14 mt-16">
      <CustomTitle
        subTitle="Recent Projects"
        heading="h2"
        position="center"
        subTitlePosition="above"
      >
        Portfolio
      </CustomTitle>
      <div className="flex justify-center w-full mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ImageCard
              key={i}
              image={p.imageLink}
              buttonText={p.buttonText}
              title={p.title}
              href={p.link}
              tags={p.tags}
            >
              {p.desc}
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
