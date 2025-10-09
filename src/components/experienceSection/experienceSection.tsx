import CustomTitle from "../common/customTitle/customTitle";
import TimelineCard from "../common/timelineCard/timelineCard";
import educationIcon from "/public/education.svg";
import workIcon from "/public/work.svg";
import download from "/public/download.svg";
import * as styles from "./experienceSection.css";
import Button from "../common/button/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { work } from "../../data/work";
import { education } from "../../data/education";

export default function ExperienceSection() {
  const CV = "/files/MateHorvathCV.pdf";
  const [downloaded, setDownloaded] = useState(false);
  const t = useTranslations("ExperienceSection");

  const handleDownload = useCallback(() => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  }, []);

  return (
    <section id="experience" className={styles.experienceSectionContainer}>
      <CustomTitle
        subTitle={t("subTitle")}
        heading="h2"
        position="center"
        subTitlePosition="above"
      >
        {t("title")}
      </CustomTitle>
      <div className={styles.mainContainer}>
        <TimelineCard
          content={education}
          cardTitle={t("educationTitle")}
          titleIcon={educationIcon}
          contentType="education"
        />
        <TimelineCard
          content={work}
          cardTitle={t("workTitle")}
          titleIcon={workIcon}
          contentType="work"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button variant="outline" href={CV} target="_blank" link>
          {t("checkCV")}
        </Button>
        <motion.a
          className={clsx(downloaded && "pointer-events-none")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          href={CV}
          download
          onClick={handleDownload}
        >
          <Image alt="downloadButton" src={download} width={25} height={25} />
        </motion.a>
      </div>
    </section>
  );
}
