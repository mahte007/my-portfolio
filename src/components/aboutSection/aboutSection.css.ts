import { style } from "@vanilla-extract/css";

export const aboutSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "128px",
  marginBottom: "64px",
  "@media": {
    "screen and (max-width: 675px)": {
      marginBottom: "128px",
    },
  },
});

export const mainContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "48px",
  marginTop: "48px",
  "@media": {
    "screen and (max-width: 675px)": {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "24px",
      marginTop: 0
    },
  },
});

export const imageWrapper = style({
  position: "relative",
  flexShrink: 0,
  width: "220px",
  height: "220px",
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 0 30px rgba(59, 130, 246, 0.15)",
});

export const image = style({
  objectFit: "cover",
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "640px",
  width: "100%",
  minWidth: 0,
});

export const paragraph = style({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#cbd5e1",
  margin: 0,
});
