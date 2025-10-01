import calendar from "/public/calendar.svg";

import * as styles from "./timelineCard.css";
import { useMemo } from "react";
import Image from "next/image";

type ContentType = {
  id: string;
  company?: string;
  school?: string;
  title?: string;
  major?: string;
  time: string;
};

type TimelineCardProps = {
  content: ContentType[];
  cardTitle?: string;
  titleIcon?: string;
};

export default function TimelineCard({
  content,
  cardTitle,
  titleIcon,
}: TimelineCardProps) {
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
              <span className={styles.contentTitle}>{element.company ?? element.school}</span>
              <span className={styles.contentSubTitle}>{element.title ?? element.major}</span>
            </div>
            <div className={styles.contentTime}>
                <Image alt="calendarIcon" src={calendar} width={15} height={15} />
                {element.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
