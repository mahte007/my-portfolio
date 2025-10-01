import { style } from "@vanilla-extract/css";

export const titleCardContainer = style({
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
})

export const titleCardHeader = style({
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "16px",
    gap: "12px",
    color: "black",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "1"
})

export const titleCardMainContainer = style({
    padding: "16px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    height: "60%",
    backgroundColor: "#040a11"
})