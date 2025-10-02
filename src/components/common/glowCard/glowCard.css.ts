import { style } from "@vanilla-extract/css";

export const glowCardContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "25%",
  borderRadius: "16px",
  backgroundColor: "#0f1a25",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
  gap: "8px",
  padding: "16px",
  "@media": {
    "screen and (max-width: 865px)": {
      width: "30%",
    },
    "screen and (max-width: 767px)": {
      width: "40%",
    },
    "screen and (max-width: 675px)": {
      width: "40%",
    },
    "screen and (max-width: 550px)": {
      width: "60%",
    },
  },
});
