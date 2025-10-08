import {style} from "@vanilla-extract/css"

export const contactSectionContainer = style({
    display: "flex",
    flexDirection: "column",
    marginTop: "128px",
    marginBottom: "64px",
})

export const mainContainer = style({
    display: "flex",
    justifyContent: "center",
})

export const glowCardsContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "center",
    marginTop: "64px",
    marginBottom: "64px",
    "@media": {
    "screen and (max-width: 675px)": {
      marginTop: "0px",
    },
  },
})

export const glowCardMessage = style({
    marginBlock: "8px",
    fontSize: "16px",
})

export const iconGlowCard = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
})

export const glowCardIcon = style({
    ":hover": {
        transform: "scale(1.2)",
        transition: "transform 0.3s ease",
    },
    cursor: "pointer"
})

export const titleContainer = style({
    marginBottom: "0px"
})