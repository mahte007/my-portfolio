import { useCallback, useState } from "react";

import * as styles from "./skillsSection.css";
import Image from "next/image";
import chevronRight from "/public/right-chevron.svg";
import clsx from "clsx";
import CustomTitle from "../common/customTitle/customTitle";

export default function SkillsSection() {
  const skills = [
    {
      id: "frontend",
      name: "FrontEnd",
      skills: [
        { id: "react", name: "React", short: "React", level: 80 },
        { id: "html", name: "HTML5", short: "HTML", level: 90 },
        { id: "css", name: "CSS3", short: "CSS", level: 85 },
        { id: "javascript", name: "JavaScript", short: "JS", level: 80 },
        { id: "typescript", name: "TypeScript", short: "TS", level: 75 },
        { id: "nextjs", name: "NextJs", short: "Next", level: 75 },
        { id: "talwind", name: "Tailwind", short: "Tailwind", level: 70 },
        { id: "bootstrap", name: "BootStrap5", short: "BootStrap", level: 65 },
        {
          id: "reactnative",
          name: "React Native",
          short: "React Native",
          level: 50,
        },
      ],
    },
    {
      id: "backend",
      name: "BackEnd",
      skills: [
        { id: "java", name: "Java", short: "Java", level: 45 },
        { id: "node", name: "NodeJS", short: "NodeJS", level: 50 },
        { id: "mysql", name: "MySql", short: "MySQL", level: 40 },
        { id: "oracle", name: "Oracle Sql", short: "Oracle SQL", level: 35 },
        { id: "oracle2", name: "Oracle Sql", short: "Oracle SQL", level: 35 },
      ],
    },
    {
      id: "other",
      name: "Other",
      skills: [
        { id: "git", name: "Git", short: "Git", level: 85 },
        { id: "wordpress", name: "WordPress", short: "WP", level: 30 },
        { id: "jquery", name: "JQuery", short: "JQuery", level: 45 },
      ],
    },
  ];

  const [selectedTech, changeSelectedTech] = useState(skills[0].id);
  const [pageIndexes, setPageIndexes] = useState<{ [key: string]: number }>({});

  const changeTech = useCallback((id: string) => {
    changeSelectedTech(id);
  }, []);

  const handleSlide = (techId: string, direction: "prev" | "next") => {
    const tech = skills.find((t) => t.id === techId);
    if (!tech) return;

    const skillsPerPage = 3;
    const totalPages = Math.ceil(tech.skills.length / skillsPerPage);

    setPageIndexes((prev) => {
      const currentPage = prev[techId] ?? 0;
      let newPage = direction === "next" ? currentPage + 1 : currentPage - 1;

      if (newPage < 0) newPage = totalPages - 1;
      if (newPage >= totalPages) newPage = 0;

      return { ...prev, [techId]: newPage };
    });
  };

  const selectedCategory = skills.find((tech) => tech.id === selectedTech);
  const skillsPerPage = 3;
  const totalPages = selectedCategory
    ? Math.ceil(selectedCategory.skills.length / skillsPerPage)
    : 0;
  const currentPage = pageIndexes[selectedTech] ?? 0;

  return (
    <section id="skills" className={styles.skillsSectionContainer}>
      <CustomTitle
        heading="h2"
        position="center"
        subTitle="Technical"
        subTitlePosition="above"
      >
        Skills
      </CustomTitle>
      <div className={styles.mainContainer}>
        <div className={styles.techContainer}>
          {skills.map((tech) => (
            <div
              className={clsx(
                styles.techElement,
                selectedTech === tech.id && styles.highlightedElement
              )}
              onClick={() => changeTech(tech.id)}
              key={tech.id}
            >
              {tech.name}
              <Image
                alt="chevronIcon"
                src={chevronRight ?? ""}
                width={25}
                height={25}
                draggable={false}
                className={
                  selectedTech === tech.id
                    ? styles.rotatedChevron
                    : styles.chevron
                }
              />
            </div>
          ))}
        </div>
        <div className={styles.skillsContainer}>
          {selectedCategory?.skills
            .slice(
              currentPage * skillsPerPage,
              currentPage * skillsPerPage + skillsPerPage
            )
            .map((skill) => (
              <div className={styles.skillsElement} key={skill.id}>
                <span className="flex justify-between">
                  <span>{skill.name}</span>
                  <span>{`${skill.level}%`}</span>
                </span>
                <div className={styles.progressBarBase}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          {selectedCategory?.skills.length &&
            selectedCategory?.skills.length > 3 && (
              <div className="relative z-50">
                <button
                  className="absolute left-5 -top-3"
                  onClick={() => handleSlide(selectedTech, "prev")}
                >
                  ◀
                </button>
                <div className="flex justify-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <div
                      key={i}
                      className={clsx(
                        "w-3 h-3 rounded-full",
                        i === currentPage ? "bg-white" : "bg-gray-500"
                      )}
                    />
                  ))}
                </div>
                <button
                  className="absolute right-5 -top-3"
                  onClick={() => handleSlide(selectedTech, "next")}
                >
                  ▶
                </button>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
