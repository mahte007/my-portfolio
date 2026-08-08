"use client";

import * as styles from "./educationCard.css";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import Button from "../button/button";
import Image from "next/image";
import { useCallback, useState } from "react";
import clsx from "clsx";
import download from "/public/download.svg";

type EducationEntry = {
  id: string;
  schoolKey: string;
  majorKey: string;
  timeKey: string;
  specializationKey: string;
};

type EducationCardProps = {
  content: EducationEntry[];
  cvHref: string;
};

export default function EducationCard({ content, cvHref }: EducationCardProps) {
  const t = useTranslations("ExperienceSection");
  const CV = "/files/Mate_Horvath_CV.pdf";

  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = useCallback(() => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  }, []);

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.header}>
          <span className={styles.iconBadge}>
            <GraduationCap size={48} />
          </span>
          <h3 className={styles.headerTitle}>{t("educationTitle")}</h3>
        </div>
        <div className={styles.entries}>
          {content.map((entry, i) => (
            <div key={entry.id} className={styles.entry}>
              <div className={styles.marker}>
                <span className={styles.dot} />
                {i < content.length && <span className={styles.line} />}
              </div>
              <div className={styles.entryContent}>
                <span className={styles.school}>
                  {t(`education.${entry.id}.${entry.schoolKey}`)}
                </span>
                <span className={styles.major}>
                  {t(`education.${entry.id}.${entry.majorKey}`)}
                </span>
                <span className={styles.specialization}>
                  {t(`education.${entry.id}.${entry.specializationKey}`)}
                </span>
                <span className={styles.time}>
                  {t(`education.${entry.id}.${entry.timeKey}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          rounded
          link
          href={cvHref}
          target="_blank"
          className={styles.cvButton}
        >
          {t("checkCV")}
        </Button>
        <a
          className={clsx(styles.downloadLink, downloaded && "pointer-events-none")}
          href={CV}
          download
          onClick={handleDownload}
        >
          <Image className={styles.downloadButton} alt="downloadButton" src={download} width={25} height={25} />
        </a>
      </div>
    </div>
  );
}
