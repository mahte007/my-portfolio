import Image from "next/image";
import CustomTitle from "../common/customTitle/customTitle";
import * as styles from "./contractSection.css";
import Button from "../common/button/button";
import { useTranslations } from "next-intl";

export default function ContractSection() {
  const CV = "/files/MateHorvathCV.pdf";
  const t = useTranslations("ContractSection");

  return (
    <section id="contract" className={styles.contractSectionContainer}>
      <CustomTitle
        heading="h2"
        subTitle={t("subTitle")}
        position="center"
        subTitlePosition="above"
      >
        {t("title")}
      </CustomTitle>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <p className={styles.paragraphContainer}>
            {t("message")}
          </p>
          <ul className={styles.listContainer}>
            <li>{t("list.pixelPerfect")}</li>
            <li>{t("list.typescript")}</li>
            <li>{t("list.deadling")}</li>
            <li>{t("list.remote")}</li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button
              variant="outline"
              className={styles.button}
              href={CV}
              target="_blank"
              link
            >
              {t("checkOutCV")}
            </Button>
            <Button variant="primary" className={styles.button} href="#contact">
              {t("collaborate")}
            </Button>
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
