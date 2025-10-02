'use client'

import { motion } from "framer-motion";

import * as styles from "./heroSection.css";
import Image from "next/image";
import Button from "../common/button/button";
import { useScreenWidth } from "@/utils/useScreenWidth";

export default function HeroSection() {
  const width = useScreenWidth();

  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.mainContainer}>
        <motion.h2
          initial={{ y: -6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={styles.titleContainer}
        >
          Hi — I’m
          <span className="text-pastel-green"> Máté, Front-End </span>
          <br />
          <span className="text-pastel-green">Developer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className={styles.textContainer}
        >
          I build modern, accessible frontends with a focus on performance and
          UX. I enjoy turning design systems into production-ready interfaces
          and shipping delightful interactions.
        </motion.p>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            variant="outline"
            rounded
            href="#projects"
          >
            View my work
          </Button>
          <Button
            className={styles.button}
            variant="primary"
            rounded
            href="#contact"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {width > 550 && 
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
      }
    </section>
  );
}
