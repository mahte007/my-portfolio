import { style } from "@vanilla-extract/css";
import TitleCard from "../common/titleCard/titleCard";
import * as styles from "./servicesSection.css"
import browser from "/public/browser.svg";
import code from "/public/code.svg";
import tablet from "/public/tablet.svg";
import { colors } from "@/theme/colors"

export default function ServicesSection() {
    return (
        <section className={styles.servicesContainer}>
            <TitleCard 
                title="Web Design" 
                titleHeaderBg={styles.firstCardColor} 
                titleIcon={browser}
                borderColor={colors.firstCardColor}
                className={styles.firstRow}
            >
                Crafting modern, visually appealing, and responsive layouts that look great on any device.
            </TitleCard>
            <TitleCard 
                title="Web Development" 
                titleHeaderBg={styles.secondCardColor} 
                titleIcon={code}
                borderColor={colors.secondCardColor}
                className={styles.firstRow}
            >
                Building fast, scalable, and maintainable websites using the latest technologies.
            </TitleCard>
            <TitleCard 
                title="UI/UX Design" 
                titleHeaderBg={styles.thirdCardColor}  
                titleIcon={tablet}
                borderColor={colors.thirdCardColor}
                className={styles.secondRow}
            >
                Designing intuitive and user-focused digital experiences that delight and engage users.
            </TitleCard>
        </section>
    )
}