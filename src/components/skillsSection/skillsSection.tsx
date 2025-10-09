import { useCallback, useEffect, useLayoutEffect, useState } from "react";

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

import { skills } from "../../data/skills";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedTech, changeSelectedTech] = useState(skills[0].id);
  const [pageIndexes, setPageIndexes] = useState<{ [key: string]: number }>({});
  const [direction, setDirection] = useState(0);
  const [isSwipe, setIsSwipe] = useState(false);

  const t = useTranslations("SkillsSection");

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

      setDirection(dir === "next" ? 1 : -1);
      return { ...prev, [techId]: newPage };
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setIsSwipe(true);
      handleSlide(selectedTech, "prev");
    },
    onSwipedRight: () => {
      setIsSwipe(true);
      handleSlide(selectedTech, "next");
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getTechImage = useCallback((tech: string) => {
    switch (tech) {
      case "frontend":
        return <Image src={brackets} alt="frontend" width={30} height={30} />;
      case "backend":
        return <Image src={server} alt="backend" width={30} height={30} />;
      case "other":
        return <Image src={gitBranch} alt="other" width={30} height={30} />;
    }
  }, []);

  const selectedCategory = skills.find((tech) => tech.id === selectedTech);
  const skillsPerPage = 3;
  const totalPages = selectedCategory
    ? Math.ceil(selectedCategory.skills.length / skillsPerPage)
    : 0;
  const currentPage = pageIndexes[selectedTech] ?? 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="skills" className={styles.skillsSectionContainer}>
      <CustomTitle
        heading="h2"
        position="center"
        subTitle={t("subTitle")}
        subTitlePosition="above"
      >
        {t("title")}
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
                  <span>{t(`tech.${tech.nameKey}`)}</span>
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
            initial={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
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
          {width <= 675 && (
            <div className={styles.swipe}>
              {t("swipeText")}
              <Image alt="swipe" src={swipe} width={25} height={25} />
            </div>
          )}
          {width > 675 &&
            selectedCategory?.skills.length &&
            selectedCategory?.skills.length > 3 && (
              <div className="relative z-50">
                <button
                  className="absolute left-5 -top-3 cursor-pointer text-2xl"
                  onClick={() => {
                    setIsSwipe(false);
                    handleSlide(selectedTech, "prev");
                  }}
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
                  className="absolute right-5 -top-3 cursor-pointer text-2xl"
                  onClick={() => {
                    setIsSwipe(false);
                    handleSlide(selectedTech, "next");
                  }}
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
