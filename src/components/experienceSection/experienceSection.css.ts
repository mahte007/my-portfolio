import { style } from "@vanilla-extract/css";

export const experienceSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "128px",
  marginBottom: "64px",
  "@media": {
    "screen and (max-width: 675px)": {
      justifyContent: "center",
      marginBottom: "128px"
    },
  },
});

export const mainContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "128px",
  marginTop: "64px",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
      gap: "48px",
      marginTop: 0
    },
  },
});


