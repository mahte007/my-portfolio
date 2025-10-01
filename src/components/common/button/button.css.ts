import { style } from "@vanilla-extract/css";

export const button = style({
  borderRadius: "16px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const primary = style({
  backgroundColor: "#006cee",
  color: "white",
  padding: "10px",
});

export const secondary = style({
  backgroundColor: "#f2f4f7",
  color: "#1a1a1a",
  padding: "10px 16px",
  border: "1px solid #d0d5dd",
  selectors: {
    "&:hover": { backgroundColor: "#e5e7eb" },
    "&:active": { backgroundColor: "#d1d5db" },
  },
});

export const ghost = style({
  backgroundColor: "transparent",
  color: "#006cee",
  padding: "10px 16px",
  border: "none",
  selectors: {
    "&:hover": { backgroundColor: "rgba(0, 108, 238, 0.1)" },
    "&:active": { backgroundColor: "rgba(0, 108, 238, 0.2)" },
  },
});

export const link = style({
  backgroundColor: "transparent",
  color: "#006cee",
  padding: 0,
  border: "none",
  textDecoration: "underline",
  selectors: {
    "&:hover": { color: "#0056c7" },
    "&:active": { color: "#0045a3" },
  },
});

export const outline = style({
  backgroundColor: "transparent",
  color: "white",
  padding: "10px",
  border: "2px solid white",
});

export const rounded = style({
  borderRadius: "32px",
  paddingInline: "32px",
});

export const disabled = style({
  opacity: 0.5,
  pointerEvents: "none",
  cursor: "not-allowed",
});
