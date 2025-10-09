import Image from "next/image";

import * as styles from "./aboutSection.css";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection")
  
  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <div className={styles.mainContainer}>
        <div>
            <Image className="rounded-full" alt="ProfPic" src={"/ProfilePic.png"} width={200} height={200} />
        </div>
          <p className={styles.paragraphContainer}>
            {t("message")}
          </p>
      </div>
    </section>
  );
}
