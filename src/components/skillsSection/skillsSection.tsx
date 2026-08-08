import { useEffect, useState } from "react";

import * as styles from "./skillsSection.css";
import clsx from "clsx";
import CustomTitle from "../common/customTitle/customTitle";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, Code2, Database, Puzzle, ChevronRight } from "lucide-react";

import { skills } from "../../data/skills";
import { useTranslations } from "next-intl";

const categoryIcons: Record<string, React.ReactNode> = {
  core: <Layers size={18} />,
  frontend: <Code2 size={18} />,
  backendData: <Database size={18} />,
  other: <Puzzle size={18} />,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(skills[0].id);
  const [activeTechId, setActiveTechId] = useState(skills[0].skills[0].id);

  const t = useTranslations("SkillsSection");

  const selectedCategoryData = skills.find(
    (tech) => tech.id === selectedCategory,
  );
  const activeSkill = selectedCategoryData?.skills.find(
    (s) => s.id === activeTechId,
  );

  useEffect(() => {
    if (selectedCategoryData && !activeSkill) {
      setActiveTechId(selectedCategoryData.skills[0].id);
    }
  }, [selectedCategoryData, activeSkill]);

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
        <div className={styles.categoryList}>
          {skills.map((category) => (
            <button
              type="button"
              key={category.id}
              className={clsx(
                styles.categoryItem,
                selectedCategory === category.id && styles.categoryItemActive,
              )}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={styles.categoryIcon}>
                {categoryIcons[category.id]}
              </span>
              <span className={styles.categoryText}>
                <span className={styles.categoryName}>
                  {t(`tech.${category.nameKey}`)}
                </span>
                <span
                  className={styles.categoryCount}
                >{`${category.skills.length} skills`}</span>
              </span>
              <ChevronRight
                size={18}
                className={clsx(
                  styles.chevron,
                  selectedCategory === category.id && styles.chevronActive,
                )}
              />
            </button>
          ))}
        </div>

        <div className={styles.detailPanel}>
          <div className={styles.techList}>
            {selectedCategoryData?.skills.map((skill) => (
              <button
                type="button"
                key={skill.id}
                className={clsx(
                  styles.techPill,
                  activeTechId === skill.id && styles.techPillActive,
                )}
                onFocus={() => setActiveTechId(skill.id)}
                onClick={() => setActiveTechId(skill.id)}
              >
                {skill.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {activeSkill && (
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className={styles.techDetail}
              >
                <div className={styles.activeSkillContainer}>
                  <div className={styles.techDetailContainer}>
                    <h4 className={styles.techDetailName}>
                      {activeSkill.name}
                    </h4>
                    <h5 className={styles.techDetailSubtitle}>
                      {t(`skillDetails.${activeSkill.id}.subTitle`)}
                    </h5>
                    <p className={styles.techDetailDescription}>
                      {t(`skillDetails.${activeSkill.id}.description`)}
                    </p>
                  </div>
                  {activeSkill.usedIn && (
                  <div className={styles.usedInContainer}>
                    <ul>
                    {activeSkill.usedIn.map((project) => {
                      const descriptionKey = `skillDetails.${activeSkill.id}.usedIn.${project.id}.description`;
                      return (
                        <li key={project.id} className={styles.projectListItem}>
                          <p className="text-white text-lg font-semibold">
                            {t(`skillDetails.${activeSkill.id}.usedIn.${project.id}.name`)}
                          </p>
                          {t.has(descriptionKey) && (
                            <p className="text-foreground">{t(descriptionKey)}</p>
                          )}
                        </li>
                      );
                    })}
                    </ul>
                  </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
