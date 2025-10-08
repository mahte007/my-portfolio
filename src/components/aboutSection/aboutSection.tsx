import Image from "next/image";
import CustomTitle from "../common/customTitle/customTitle";

import * as styles from "./aboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <div className={styles.mainContainer}>
        <div>
            <Image className="rounded-full" alt="ProfPic" src={"/ProfilePic.png"} width={200} height={200} />
        </div>
          <p className={styles.paragraphContainer}>
            👋 Hi, I’m Máté — a front-end developer based in Pécs, Hungary. I
            specialize in creating lightweight, performant websites for small
            businesses and agencies. I focus on clean design, maintainable code,
            and collaboration with creative teams.
          </p>
      </div>
    </section>
  );
}
