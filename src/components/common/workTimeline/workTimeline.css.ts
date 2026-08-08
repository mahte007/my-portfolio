import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const item = style({
  display: "flex",
  gap: "16px",
  marginBottom: "16px"
});

export const marker = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "6px",
});

export const dot = style({
  width: "10px",
  height: "10px",
  borderRadius: "9999px",
  backgroundColor: "rgba(255, 255, 255, 1)",
  flexShrink: 0,
});

export const line = style({
  width: "2px",
  flexGrow: 1,
  minHeight: "32px",
  backgroundColor: "rgba(255, 255, 255, 1)",
});

export const itemContent = style({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "28px",
});

export const time = style({
  fontSize: "0.85rem",
  color: "#94a3b8",
  marginBottom: "4px",
});

export const company = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "white",
});

export const role = style({
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#60a5fa",
});

export const description = style({
  fontSize: "1.2rem",
  fontWeight: 400,
  marginTop: "10px"
})
