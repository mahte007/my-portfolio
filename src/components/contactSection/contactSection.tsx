import Button from "../common/button/button";
import CustomTitle from "../common/customTitle/customTitle";
import GlowCard from "../common/glowCard/glowCard";

import github from "/public/github.svg";
import linkedin from "/public/linkedin.svg";
import mail from "/public/mail.svg";
import instagram from "/public/instagram.svg";
import { motion } from "framer-motion";
import * as styles from "./contactSection.css";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contactSectionContainer}>
      <CustomTitle
        subTitle="Contact Information"
        heading="h2"
        position="center"
        subTitlePosition="above"
      >
        Contact
      </CustomTitle>

      <div className={styles.glowCardsContainer}>
        <GlowCard icon={mail}>
          <CustomTitle heading="h4" className={styles.titleContainer}>Email</CustomTitle>
          <Button id="emailButton" variant="outline" copy>
            mahte007@gmail.com
          </Button>
          <p className={styles.glowCardMessage}>Write me an Email!</p>
        </GlowCard>

        <GlowCard className={styles.iconGlowCard}>
          <a href="https://www.instagram.com/mate.horvath7/" target="_blank">
            <Image
              className={styles.glowCardIcon}
              alt="instagram"
              src={instagram}
              width={25}
              height={25}
            />
          </a>
          <a href="https://github.com/mahte007" target="_blank">
            <Image
              className={styles.glowCardIcon}
              alt="github"
              src={github}
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.linkedin.com/in/horvath-mate3/" target="_blank">
            <Image
              className={styles.glowCardIcon}
              alt="linkedin"
              src={linkedin}
              width={25}
              height={25}
            />
          </a>
        </GlowCard>
      </div>
    </section>
  );
}
