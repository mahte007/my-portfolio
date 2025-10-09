import calendar from "/public/calendar.svg";

import * as styles from "./timelineCard.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ContentType = {
  id: string;
  companyKey?: string;
  schoolKey?: string;
  titleKey?: string;
  majorKey?: string;
  timeKey: string;
};

type TimelineCardProps = {
  content: ContentType[];
  cardTitle?: string;
  titleIcon?: string;
  contentType: "work" | "education";
};

export default function TimelineCard({
  content,
  cardTitle,
  titleIcon,
  contentType,
}: TimelineCardProps) {
  const t = useTranslations(`ExperienceSection.${contentType}`);

  return (
    <div className={styles.timelineCardContainer}>
      <h3 className={styles.titleContainer}>
        <Image alt="titleIcon" src={titleIcon ?? ""} width={30} height={30} />
        {cardTitle}
      </h3>
      {content.map((element) => (
        <div key={element.id} className="flex gap-3">
          <div className="flex justify-start mt-1 ml-3">
            <span className="flex flex-col items-center">
              <div className="w-3 h-3 bg-white rounded-full" />
              <div className="w-px h-full bg-white" />
            </span>
          </div>
          <div className={styles.cardContentContainer}>
            <div className={styles.mainContent}>
              <span className={styles.contentTitle}>
                {element.companyKey
                  ? t(`${element.id}.${element.companyKey}`)
                  : t(`${element.id}.${element.schoolKey}`)}
              </span>
              <span className={styles.contentSubTitle}>
                {element.titleKey
                  ? t(`${element.id}.${element.titleKey}`)
                  : t(`${element.id}.${element.majorKey}`)}
              </span>
            </div>
            <div className={styles.contentTime}>
              <Image alt="calendarIcon" src={calendar} width={15} height={15} />
              {t(`${element.id}.${element.timeKey}`)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
