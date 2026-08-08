import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  gap: "32px",
  width: "100%",
  "@media": {
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
      gap: "64px",
    },
  },
});

export const imageWrapper = style({
  position: "relative",
  order: 0,
  width: "100%",
  aspectRatio: "3 / 2",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 20px 60px -20px rgba(0, 108, 238, 0.25)",
  "@media": {
    "screen and (max-width: 1024px)": {
      order: 1,
    },
  },
});

export const imageWrapperReversed = style({
  order: 1,
});

export const image = style({
  objectFit: "cover",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  order: 1,
  justifyContent: "space-between",
  height: "100%",
  padding: "10px 0 50px 0",
  "@media": {
    "screen and (max-width: 1024px)": {
      order: 0
    },
  },
});

export const contentReversed = style({
  order: 0,
});

export const index = style({
  color: "#006cee",
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
  marginBottom: "8px",
});

export const title = style({
  fontSize: "1.75rem",
  lineHeight: 1.2,
  fontWeight: 700,
  color: "white",
  margin: 0,
  marginBottom: "12px",
});

export const description = style({
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#94a3b8",
  margin: 0,
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "20px",
});

export const tag = style({
  padding: "6px 12px",
  fontSize: "0.8rem",
  fontWeight: 500,
  borderRadius: "8px",
  color: "#e2e8f0",
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
});

export const links = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "24px",
  marginTop: "24px",
});

export const link = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "0.95rem",
  fontWeight: 600,
  textDecoration: "none",
  selectors: {
    "&:hover": { textDecoration: "underline" },
  },
});
