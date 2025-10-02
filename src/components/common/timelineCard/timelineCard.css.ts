import {style} from "@vanilla-extract/css"

export const timelineCardContainer = style({
    display: "flex",
    flexDirection: "column",
    width: "25%",
    borderRadius: "16px",
    backgroundColor: "#0f1a25",
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
    gap: "16px",
    padding: "16px",
    height: "fit-content",
    '@media': {
    'screen and (max-width: 865px)': {
      width: "30%"
    },
    'screen and (max-width: 675px)': {
        width: "100%"
    }
  }
})

export const titleContainer = style({
    display: "flex",
    fontSize: "24px",
    fontWeight: "600",
    padding: "8px",
    gap: "12px"
})

export const cardContentContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
})

export const mainContent = style({
    display: "flex",
    flexDirection: "column",
})

export const contentTitle = style({
    fontSize: "16px",
    fontWeight: "500",
})

export const contentSubTitle = style({
    fontSize: "12px",
})

export const contentTime = style({
    display: "flex",
    gap: "4px",
    fontSize: "12px",
})