import { keyframes, style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";


export const aboutSectionContainer = style({
    marginTop: "64px",
    marginBottom: "128px"
})

export const mainContainer = style({
    display: "flex",
    gap: "32px",
    '@media': {
        '(max-width: 550px)': {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "justify",
            gap: "16px",
        },
    },
})

export const paragraphContainer = style({
    marginTop: "24px",
    width: "40%",
    '@media': {
        '(max-width: 550px)': {
            width: "60%",
        },
    },
})