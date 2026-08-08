"use client";

import Image from "next/image";

import * as styles from "./aboutSection.css";
import CustomTitle from "../common/customTitle/customTitle";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <CustomTitle
        heading="h2"
        position="left"
        subTitle={t("subTitle")}
        subTitlePosition="above"
        eyebrow
      >
        {t("title")}
      </CustomTitle>
      <div className={styles.mainContainer}>
        <div className={styles.imageWrapper}>
          <Image
            alt="Máté Horváth"
            src="/Profile.webp"
            fill
            sizes="220px"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>{t("paragraph1")}</p>
          <p className={styles.paragraph}>{t("paragraph2")}</p>
          <p className={styles.paragraph}>{t("paragraph3")}</p>
        </div>
      </div>
    </section>
  );
}
