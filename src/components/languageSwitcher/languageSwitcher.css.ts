import {style} from "@vanilla-extract/css"

export const languageSwitcherContainer = style({
    position: "relative",
    display: "inline-block",
    textAlign: "left",
})

export const switcherButton = style({
    display: "inline-flex",
    justifyContent: "space-between",
    width: "fit-content",
    borderRadius: "6px",
    paddingInline: "16px",
    paddingBlock: "8px",
    backgroundColor: "#0f1a25",
    cursor: "pointer",
    ":hover": {
        backgroundColor: "#385e85"
    },
})

export const dropDownContainer = style({
    transformOrigin: "top right",
    position: "absolute",
    marginTop: "8px",
    width: "fit-content",
    borderRadius: "6px",
    backgroundColor: "#0f1a25",
    zIndex: 10,
})

export const link = style({
    display: "block",
    width: "100%",
    paddingInline: "16px",
    paddingBlock: "8px",
})

export const activeLink = style({
    backgroundColor: "#2e4259"
})

export const hoverLink = style({
    ":hover": {
        backgroundColor: "#385e85"
    },
})