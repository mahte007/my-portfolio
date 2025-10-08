import {style} from "@vanilla-extract/css"

export const contractSectionContainer = style({
    marginTop: "128px"
})

export const mainContainer = style({
    display: "flex",
    width: "100%",
    marginTop: "32px",
})

export const contentContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
})

export const paragraphContainer = style({
    textAlign: "justify",
})

export const buttonContainer = style({
    display: "flex",
    gap: "16px",
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

export const imageContainer = style({
    width: "max-content",
    display: "block",
    '@media': {
        '(max-width: 550px)': {
            display: "none",
        },
    },
})

export const listContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
})

export const button = style({
    textAlign: "center",
    '@media': {
        '(max-width: 768px)': {
            width: "50%",
        }
    }
})