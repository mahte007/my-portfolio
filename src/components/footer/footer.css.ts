import { style } from "@vanilla-extract/css";

export const footerContainer = style({
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    color: "#6a7282",
})

export const mainContainer = style({
    display: "flex",
    justifyContent: "space-between",
    marginInline: "128px",
    padding: "32px",
    "@media": {
    "screen and (max-width: 675px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "16px"
    },
  },
})

export const bottomLine = style({
    height: '1px',
    width: '100%',
    background: 'linear-gradient(to right, transparent, #e0e0e0, transparent)',
    marginTop: '8px',
})

export const linkContainer = style({
    display: "flex",
    gap: "16px",
    "@media": {
    "screen and (max-width: 675px)": {
      flexDirection: "column",
    },
  },
})