import { style } from "@vanilla-extract/css";

export const heroSectionContainer = style({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "48px",
    flexDirection: "column"
})

export const buttonContainer = style({
    display: "flex",
    marginTop: "24px",
    gap: "16px",
    alignItems: "center",
    '@media': {
        '(max-width: 675px)': {
            alignItems: "start",
        },
        '(max-width: 550px)': {
            flexDirection: "column",
            alignItems: "center",
        }
    }
})

export const textContainer = style({
    marginTop: "16px",
    maxWidth: "576px",
    color: "#d1d5dc",
})

export const titleContainer = style({
    fontWeight: "800",
    fontSize: "60px",
    '@media': {
        '(max-width: 768px)': {
            fontSize: "36px",
        }
    }
})

export const mainContainer = style({
    width: "60%",
    '@media': {
        '(max-width: 768px)': {
            width: "100%",
        }
    }
})

export const imageContainer = style({
    display: "block",
    width: "max-content",
    '@media': {
        '(max-width: 550px)': {
            display: "none",
        },
    },
})

export const button = style({
    '@media': {
        '(max-width: 768px)': {
            width: "50%",
        }
    }
})

export const aboutSectionContainer = style({
    marginBottom: "128px"
})

export const aboutMainContainer = style({
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

export const aboutParagraphContainer = style({
    marginTop: "24px",
    width: "40%",
    '@media': {
        '(max-width: 550px)': {
            width: "60%",
        },
    },
})