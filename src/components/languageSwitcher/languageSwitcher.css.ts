import { style } from "@vanilla-extract/css";

export const languageSwitcherContainer = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
});

export const separator = style({
  fontSize: "0.9rem",
  color: "#475569",
});

export const languageLink = style({
  fontSize: "0.9rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "#94a3b8",
  textDecoration: "none",
  transition: "color 0.2s ease",
  selectors: {
    "&:hover": {
      color: "white",
    },
  },
});

export const activeLanguageLink = style({
  color: "#60a5fa",
  fontWeight: 700,
  pointerEvents: "none",
});
