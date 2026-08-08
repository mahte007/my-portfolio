import Image from "next/image";

import * as styles from "./heroSection.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("HeroSection")
  
  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <div className={styles.aboutMainContainer}>
        <div>
            <Image className="rounded-full" alt="ProfPic" src={"/Profile.png"} width={200} height={200} />
        </div>
          <p className={styles.aboutParagraphContainer}>
            {t("aboutMessage")}
          </p>
      </div>
    </section>
  );
}
