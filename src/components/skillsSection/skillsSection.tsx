import { useCallback, useState } from "react";

import * as styles from "./skillsSection.css";
import Image from "next/image";
import chevronRight from "/public/right-chevron.svg";
import clsx from "clsx";

export default function SkillsSection() {
  const skills = [
    {
      id: "frontend",
      name: "FrontEnd",
      skills: [
        { id: "react", name: "React", short: "React" },
        { id: "html", name: "HTML5", short: "HTML" },
        { id: "css", name: "CSS3", short: "CSS" },
        { id: "javascript", name: "JavaScript", short: "JS" },
      ],
    },
    {
      id: "backend",
      name: "BackEnd",
      skills: [
        { id: "java", name: "Java", short: "Java" },
        { id: "node", name: "NodeJS", short: "NodeJS" },
        { id: "mysql", name: "MySql", short: "MySQL" },
        { id: "oracle", name: "Oracle Sql", short: "Oracle SQL" },
      ],
    },
    {
      id: "other",
      name: "Other",
      skills: [
        { id: "git", name: "Git", short: "Git" },
        { id: "wordpress", name: "WordPress", short: "WP" },
        { id: "jquery", name: "JQuery", short: "JQuery" },
      ],
    },
  ];

  const [selectedTech, changeSelectedTech] = useState(skills[0].id);

  const changeTech = useCallback((id: string) => {
    changeSelectedTech(id);
  }, []);

  return (
    <section id="skills" className={styles.skillsSectionContainer}>
      <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
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
          {skills
            .find((tech) => tech.id === selectedTech)
            ?.skills.map((skill) => (
              <div className={styles.skillsElement} key={skill.id}>
                {skill.name}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
