import { style } from "@vanilla-extract/css";

export const heroSectionContainer = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "48px",
})

export const buttonContainer = style({
    display: "flex",
    marginTop: "24px",
    gap: "16px",
    alignItems: "center",
    '@media': {
        '(max-width: 675px)': {
            flexDirection: "column",
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