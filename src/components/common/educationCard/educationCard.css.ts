import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  height: "fit-content",
  borderRadius: "16px",
  padding: "24px 48px 24px 48px",
  gap: "96px",
  backgroundColor: "rgba(15, 26, 41, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.1)",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  paddingBottom: "8px",
  marginBottom: "16px"
});

export const iconBadge = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: "10px",
});

export const headerTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "white",
  margin: 0,
});

export const entries = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flexGrow: 1,
});

export const entry = style({
  display: "flex",
  flexDirection: "row",
  paddingTop: "16px",
  gap: "16px"
});

export const entryContent = style({
  display: "flex",
  flexDirection: "column",
});

export const school = style({
  fontSize: "1.25rem",
  fontWeight: 700,
  color: "white",
});

export const major = style({
  fontSize: "1rem",
  color: "#cbd5e1",
  marginTop: "4px",
});

export const time = style({
  fontSize: "0.8rem",
  color: "#94a3b8",
  marginTop: "4px",
});

export const specialization = style({
  fontSize: "1rem",
  color: "#60a5fa",
  marginTop: "4px",
});

export const cvButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  alignSelf: "flex-start",
  borderRadius: "8px",
  borderColor: "#60a5fa",
  color: "#60a5fa",
});

export const marker = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "6px",
});

export const dot = style({
  width: "5px",
  height: "5px",
  borderRadius: "9999px",
  backgroundColor: "#60a5fa",
  flexShrink: 0,
});

export const line = style({
  width: "1px",
  flexGrow: 1,
  minHeight: "32px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});

export const downloadButton = style({
  fill: "#60a5fa !important"
});
