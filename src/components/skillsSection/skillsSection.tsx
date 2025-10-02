import { useCallback, useLayoutEffect, useState } from "react";

import * as styles from "./skillsSection.css";
import Image from "next/image";
import chevronRight from "/public/right-chevron.svg";
import brackets from "/public/brackets.svg";
import gitBranch from "/public/git-branch.svg";
import server from "/public/server.svg";
import swipe from "/public/swipe-right.svg";
import clsx from "clsx";
import CustomTitle from "../common/customTitle/customTitle";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { useScreenWidth } from "@/utils/useScreenWidth";

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
  const [direction, setDirection] = useState(0);

  const width = useScreenWidth();

  useLayoutEffect(() => {}, [direction]);

  const changeTech = useCallback((id: string) => {
    changeSelectedTech(id);
  }, []);

  const handleSlide = (techId: string, dir: "prev" | "next") => {
    const tech = skills.find((t) => t.id === techId);
    if (!tech) return;

    const skillsPerPage = 3;
    const totalPages = Math.ceil(tech.skills.length / skillsPerPage);

    setPageIndexes((prev) => {
      const currentPage = prev[techId] ?? 0;
      let newPage = dir === "next" ? currentPage + 1 : currentPage - 1;

      if (newPage < 0) newPage = totalPages - 1;
      if (newPage >= totalPages) newPage = 0;

      setDirection(dir === "next" ? 1 : -1); // <-- set direction at the same time
      return { ...prev, [techId]: newPage };
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSlide(selectedTech, "next"),
    onSwipedRight: () => handleSlide(selectedTech, "prev"),
    preventScrollOnSwipe: true,
    trackMouse: true, // enables dragging with mouse too
  });

  const getTechImage = useCallback((tech: string) => {
    switch (tech) {
      case "frontend":
        return <Image src={brackets} alt="asd" width={30} height={30} />;
      case "backend":
        return <Image src={server} alt="asd" width={30} height={30} />;
      case "other":
        return <Image src={gitBranch} alt="asd" width={30} height={30} />;
    }
  }, []);

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
              <span className="flex gap-3">
                {getTechImage(tech.id)}
                <span className="flex flex-col">
                  <span>{tech.name}</span>
                  <span className="text-xs">{`${tech.skills.length} skills`}</span>
                </span>
              </span>
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
          <motion.div
            {...swipeHandlers}
            key={currentPage}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            className={styles.skillsContent}
          >
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
          </motion.div>
          {width <= 675 &&
            <div className={styles.swipe}>
              Swipe to see more
              <Image alt="swipe" src={swipe} width={25} height={25} />
            </div>
          }
          {width > 675 &&
            selectedCategory?.skills.length &&
            selectedCategory?.skills.length > 3 && (
              <div className="relative z-50">
                <button
                  className="absolute left-5 -top-3 cursor-pointer"
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
                  className="absolute right-5 -top-3 cursor-pointer"
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
