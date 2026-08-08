"use client";

import * as styles from "./heroSection.css";
import Image from "next/image";
import Button from "../common/button/button";
import { useTranslations } from "next-intl";
import About from "./about";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className={styles.heroSectionContainer}>
      <div className="flex flex-row">
        <div className={styles.mainContainer}>
          <h2 className={styles.titleContainer}>
            {t("title.hi")}
            <span className="text-pastel-green">{t("title.name")}</span>
            <br />
            <span className="text-pastel-green">{t("title.frontend")}</span>
          </h2>

          <p className={styles.textContainer}>{t("heroMessage")}</p>

          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              variant="outline"
              rounded
              href="#projects"
            >
              {t("viewWork")}
            </Button>
            <Button
              className={styles.button}
              variant="primary"
              rounded
              href="#contact"
            >
              {t("getInTouch")}
            </Button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            alt="FeImage"
            src={"/FrontendGraphic.webp"}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
            draggable={false}
          />
        </div>
      </div>
      <About />
    </section>
  );
}
