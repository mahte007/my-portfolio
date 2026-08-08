"use client";

import { Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import mail from "/public/mail.svg";
import github from "/public/github.svg";
import linkedin from "/public/linkedin.svg";
import OrbBackground from "../common/orbs/orbs";
import CustomTitle from "../common/customTitle/customTitle";
import Button from "../common/button/button";
import * as styles from "./maintenancePage.css";

export default function MaintenancePage() {
  const t = useTranslations("MaintenancePage");

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #040a11 0%, #1b0a2a 50%, #040a11 100%)",
      }}
      className="relative text-gray-200 antialiased"
    >
      <OrbBackground />
      <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <Wrench size={32} />
          </div>

          <CustomTitle
            subTitle={t("subTitle")}
            heading="h1"
            position="center"
            subTitlePosition="above"
          >
            {t("title")}
          </CustomTitle>

          <p className={styles.message}>{t("message")}</p>

          <div className={styles.actions}>
            <Button id="maintenanceEmailButton" variant="outline" copy>
              mahte007@gmail.com
            </Button>

            <div className={styles.socialsContainer}>
              <a
                href="https://github.com/mahte007"
                target="_blank"
                aria-label="GitHub"
              >
                <Image
                  className={styles.socialIcon}
                  alt="github"
                  src={github}
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/horvath-mate3/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Image
                  className={styles.socialIcon}
                  alt="linkedin"
                  src={linkedin}
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="mailto:mahte007@gmail.com"
                aria-label="Email"
              >
                <Image
                  className={styles.socialIcon}
                  alt="mail"
                  src={mail}
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

