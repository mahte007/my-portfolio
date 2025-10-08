import { style } from "@vanilla-extract/css";

export const mainContainer = style({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "64px",
  marginBottom: "64px",
  "@media": {
    "screen and (max-width: 675px)": {
        flexDirection: "column",
        alignItems: "center",
        gap: "32px"
    },
  },
});
