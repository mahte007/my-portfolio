"use client";

import CustomTitle from "../common/customTitle/customTitle";
import WorkTimeline from "../common/workTimeline/workTimeline";
import EducationCard from "../common/educationCard/educationCard";
import * as styles from "./experienceSection.css";
import { useTranslations } from "next-intl";
import { work } from "../../data/work";
import { education } from "../../data/education";

export default function ExperienceSection() {
  const CV = "/files/Mate_Horvath_CV.pdf";
  const t = useTranslations("ExperienceSection");

  return (
    <section id="experience" className={styles.experienceSectionContainer}>
      <CustomTitle
        subTitle={t("subTitle")}
        heading="h2"
        position="left"
        subTitlePosition="above"
        eyebrow
      >
        {t("title")}
      </CustomTitle>
      <div className={styles.mainContainer}>
        <WorkTimeline content={work} />
        <EducationCard content={education} cvHref={CV} />
      </div>
    </section>
  );
}
