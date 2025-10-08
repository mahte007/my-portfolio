import { style } from "@vanilla-extract/css";

export const imageCardContainer = style({
  borderRadius: "16px",
  backgroundColor: "#0f1a25",
  gap: "8px",
  width: "100%",
  "@media": {
  },
});

export const mainContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "16px",
  padding: "16px",
});

export const titleContainer = style({
  paddingLeft: "16px",
  paddingTop: "16px",
  margin: 0,
});
