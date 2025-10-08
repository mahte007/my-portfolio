import Image from "next/image";
import CustomTitle from "../common/customTitle/customTitle";
import * as styles from "./contractSection.css";
import Button from "../common/button/button";
import { style } from "@vanilla-extract/css";

export default function ContractSection() {
    const CV = "/files/MateHorvathCV.pdf";

  return (
    <section id="contract" className={styles.contractSectionContainer}>
      <CustomTitle
        heading="h2"
        subTitle="Contract Work"
        position="center"
        subTitlePosition="above"
      >
        For Angencies
      </CustomTitle>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <p className={styles.paragraphContainer}>
            I also collaborate with agencies and studios as a freelance
            front-end developer. I can join your team for short- or long-term
            projects — implementing responsive layouts, animations, and UI
            components using React, Next.js, and TypeScript.
          </p>
          <ul className={styles.listContainer}>
            <li>✅ Pixel-perfect Figma → code</li>
            <li>✅ Clean, modular TypeScript components</li>
            <li>✅ Deadline-focused and communicative</li>
            <li>✅ Available for remote work</li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button variant="outline" className={styles.button} href={CV} target="_blank" link>Check out My CV</Button>
            <Button variant="primary" className={styles.button} href="#contact">{"Let's Collaborate"}</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="FrontendTechnologies"
            src={"/FETechnologies.png"}
            width={1500}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
