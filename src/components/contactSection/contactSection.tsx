"use client";

import * as styles from "./contactSection.css";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("ContactSection");

  return (
    <section id="contact" className={styles.contactSectionContainer}>
      <span className={styles.eyebrow}>{t("subTitle")}</span>
      <h2 className={styles.title}>{t("title")}</h2>
      <p className={styles.message}>{t("message")}</p>

      <a href="mailto:mahte007@gmail.com" className={styles.emailLink}>
        mahte007@gmail.com
        <span className={styles.arrow}>↗</span>
      </a>

      <div className={styles.socialRow}>
        <a
          href="https://github.com/mahte007"
          target="_blank"
          className={styles.socialLink}
        >
          {t("github")}
          <span className={styles.arrow}>↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/horvath-mate3/"
          target="_blank"
          className={styles.socialLink}
        >
          {t("linkedin")}
          <span className={styles.arrow}>↗</span>
        </a>
      </div>
    </section>
  );
}
