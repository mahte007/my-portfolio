import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

export const experienceSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "64px",
  marginBottom: "64px",
  "@media": {
    "screen and (max-width: 675px)": {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "128px"
    },
  },
});

export const mainContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "64px",
  marginTop: "64px",
  marginBottom: "64px",
  alignItems: "stretch",
  "@media": {
    "screen and (max-width: 675px)": {
      flexDirection: "column",
      marginTop: "0px",
    },
  },
});
