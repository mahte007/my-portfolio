import { motion } from "framer-motion";

import * as styles from "./heroSection.css";
import Image from "next/image";
import Button from "../common/button/button";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.mainContainer}>
        <motion.h2
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={styles.titleContainer}
        >
          {t("title.hi")}
          <span className="text-pastel-green">{t("title.name")}</span>
          <br />
          <span className="text-pastel-green">{t("title.frontend")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className={styles.textContainer}
        >
          {t("heroMessage")}
        </motion.p>

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
          src={"/FrontendGraphic.png"}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </div>
    </section>
  );
}
