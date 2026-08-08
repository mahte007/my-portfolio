import * as styles from "./workTimeline.css";
import { useTranslations } from "next-intl";

type WorkEntry = {
  id: string;
  companyKey: string;
  titleKey: string;
  timeKey: string;
  descriptionKey: string;
};

type WorkTimelineProps = {
  content: WorkEntry[];
};

export default function WorkTimeline({ content }: WorkTimelineProps) {
  const t = useTranslations("ExperienceSection.work");

  return (
    <div className={styles.container}>
      {content.map((entry, i) => (
        <div key={entry.id} className={styles.item}>
          <div className={styles.marker}>
            <span className={styles.dot} />
            {i < content.length && <span className={styles.line} />}
          </div>
          <div className={styles.itemContent}>
            <span className={styles.time}>
              {t(`${entry.id}.${entry.timeKey}`)}
            </span>
            <span className={styles.company}>
              {t(`${entry.id}.${entry.companyKey}`)}
            </span>
            <span className={styles.role}>
              {t(`${entry.id}.${entry.titleKey}`)}
            </span>
            <span className={styles.description}>
              {t(`${entry.id}.${entry.descriptionKey}`)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
