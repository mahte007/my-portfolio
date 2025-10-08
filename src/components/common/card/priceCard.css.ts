import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  width: "25%",
  alignItems: "center",
  borderRadius: "16px",
  backgroundColor: "#0f1a25",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
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

export const priceContainer = style({
  color: "white",
  fontWeight: 500,
  fontSize: "1.75rem",
});

export const subTitleContainer = style({
  color: "white",
  fontWeight: 400,
  marginBottom: "1rem",
})

export const titleContainer = style({
  margin: 0,
})

export const glow = style({
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
})
