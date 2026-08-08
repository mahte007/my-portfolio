import { style } from "@vanilla-extract/css";

export const wrapper = style({
  paddingTop: "48px",
  paddingBottom: "48px",
});

export const backLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#94a3b8",
  fontSize: "0.9rem",
  fontWeight: 500,
  textDecoration: "none",
  marginBottom: "32px",
  selectors: {
    "&:hover": { color: "white" },
  },
});

export const hero = style({
  maxWidth: "760px",
});

export const eyebrow = style({
  fontSize: "0.9rem",
  marginBottom: "16px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  color: "#60a5fa",
  textTransform: "uppercase",
});

export const title = style({
  fontSize: "2.75rem",
  lineHeight: 1.15,
  fontWeight: 700,
  color: "white",
  margin: 0,
  marginBottom: "16px",
  "@media": {
    "screen and (max-width: 675px)": {
      fontSize: "2rem",
    },
  },
});

export const tagline = style({
  fontSize: "1.15rem",
  lineHeight: 1.6,
  color: "#94a3b8",
  margin: 0,
  marginBottom: "24px",
});

export const metaRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  marginBottom: "20px",
});

export const metaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const metaLabel = style({
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#64748b",
});

export const metaValue = style({
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "#e2e8f0",
});

export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginBottom: "28px",
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
  gap: "16px",
  marginBottom: "8px",
});

export const linkButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 20px",
});

export const imageWrapper = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 20px 60px -20px rgba(0, 108, 238, 0.25)",
  marginTop: "48px",
  marginBottom: "64px",
});

export const image = style({
  objectFit: "cover",
});

export const section = style({
  maxWidth: "760px",
  marginBottom: "56px",
});

export const sectionTitle = style({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "white",
  margin: 0,
  marginBottom: "20px",
});

export const paragraph = style({
  fontSize: "1rem",
  lineHeight: 1.75,
  color: "#94a3b8",
  margin: 0,
  marginBottom: "16px",
});

export const highlightsGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const highlightCard = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  padding: "18px 20px",
  borderRadius: "14px",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  color: "#e2e8f0",
  fontSize: "0.95rem",
  lineHeight: 1.5,
});

export const highlightIcon = style({
  color: "#60a5fa",
  flexShrink: 0,
  marginTop: "2px",
});

export const challengesList = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const challengeCard = style({
  padding: "20px 24px",
  borderRadius: "14px",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
});

export const challengeTitle = style({
  fontSize: "1.05rem",
  fontWeight: 600,
  color: "white",
  margin: 0,
  marginBottom: "8px",
});

export const challengeDescription = style({
  fontSize: "0.95rem",
  lineHeight: 1.65,
  color: "#94a3b8",
  margin: 0,
});

export const projectNav = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "16px",
  marginTop: "64px",
  paddingTop: "40px",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  "@media": {
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "20px 24px",
  borderRadius: "14px",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  textDecoration: "none",
  transition: "border-color 0.15s ease-out",
  selectors: {
    "&:hover": { borderColor: "rgba(96, 165, 250, 0.5)" },
  },
});

export const navLinkNext = style({
  justifyContent: "flex-end",
  textAlign: "right",
  "@media": {
    "screen and (min-width: 640px)": {
      gridColumnStart: 2,
    },
  },
});

export const navLabel = style({
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#64748b",
  marginBottom: "4px",
});

export const navTitle = style({
  display: "block",
  fontSize: "1rem",
  fontWeight: 600,
  color: "white",
});
