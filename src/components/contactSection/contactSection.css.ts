import { style } from "@vanilla-extract/css";

export const contactSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "160px",
  marginBottom: "96px",
});

export const eyebrow = style({
  fontSize: "0.9rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  color: "#60a5fa",
  marginBottom: "16px",
});

export const title = style({
  fontSize: "clamp(2rem, 5vw, 3.25rem)",
  fontWeight: 700,
  lineHeight: 1.15,
  color: "white",
  margin: 0,
  maxWidth: "100%",
  overflowWrap: "break-word",
});

export const message = style({
  fontSize: "1.15rem",
  color: "#94a3b8",
  marginTop: "16px",
  maxWidth: "560px",
  width: "100%",
  overflowWrap: "break-word",
});

export const emailLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "16px",
  width: "fit-content",
  maxWidth: "90%",
  fontSize: "clamp(1.75rem, 8vw, 4.5rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: "white",
  textDecoration: "none",
  marginTop: "48px",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: "#60a5fa",
    },
  },
  "@media": {
    "screen and (max-width: 675px)": {
      fontSize: "1.75rem"
    },
  },
});

export const arrow = style({
  fontWeight: 400,
  color: "#60a5fa",
});

export const socialRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  marginTop: "40px",
});

export const socialLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#e2e8f0",
  textDecoration: "none",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: "#60a5fa",
    },
  },
});
