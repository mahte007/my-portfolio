import { useTranslations } from "next-intl";
import TitleCard from "../common/titleCard/titleCard";
import * as styles from "./servicesSection.css"
import browser from "/public/browser.svg";
import code from "/public/code.svg";
import tablet from "/public/tablet.svg";
import { colors } from "@/theme/colors"

export default function ServicesSection() {
    const t = useTranslations("ServicesSection");

    return (
        <section className={styles.servicesContainer}>
            <TitleCard 
                title={t("titles.webDesign")}
                titleHeaderBg={styles.firstCardColor} 
                titleIcon={browser}
                borderColor={colors.firstCardColor}
                className={styles.firstRow}
            >
                {t("messages.webDesign")}
            </TitleCard>
            <TitleCard 
                title={t("titles.webDevelopment")}
                titleHeaderBg={styles.secondCardColor} 
                titleIcon={code}
                borderColor={colors.secondCardColor}
                className={styles.firstRow}
            >
                {t("messages.webDevelopment")}
            </TitleCard>
            <TitleCard 
                title={t("titles.uiDesign")}
                titleHeaderBg={styles.thirdCardColor}  
                titleIcon={tablet}
                borderColor={colors.thirdCardColor}
                className={styles.secondRow}
            >
                {t("messages.uiDesign")}
            </TitleCard>
        </section>
    )
}