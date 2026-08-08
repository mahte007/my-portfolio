import { style } from "@vanilla-extract/css";

export const skillsSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "128px",
  marginBottom: "64px",
  "@media": {
    "screen and (max-width: 675px)": {
      alignItems: "center",
      marginBottom: "128px",
    },
  },
});

export const mainContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  marginTop: "64px",
  marginBottom: "64px",
  alignItems: "stretch",
  "@media": {
    "screen and (min-width: 676px)": {
      gridTemplateColumns: "1fr 2fr",
      gap: "32px",
    },
  },
});

export const categoryList = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  gap: "8px",
  borderRadius: "16px",
  padding: "16px",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.1)",
});

export const categoryItem = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "transparent",
  color: "#cbd5e1",
  cursor: "pointer",
  textAlign: "left",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(96, 165, 250, 0.08)",
    },
  },
});

export const categoryItemActive = style({
  backgroundColor: "rgba(96, 165, 250, 0.12)",
  color: "white",
});

export const categoryIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  flexShrink: 0,
  borderRadius: "8px",
  color: "#60a5fa",
  backgroundColor: "rgba(96, 165, 250, 0.12)",
});

export const categoryText = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const categoryName = style({
  fontSize: "0.95rem",
  fontWeight: 600,
});

export const categoryCount = style({
  fontSize: "0.75rem",
  color: "#94a3b8",
});

export const chevron = style({
  flexShrink: 0,
  transition: "transform 0.3s ease",
  color: "#64748b",
});

export const chevronActive = style({
  transform: "rotate(90deg)",
  color: "#60a5fa",
});

export const detailPanel = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: "#0f1a25",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.1)",
});

export const techList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const techPill = style({
  padding: "8px 16px",
  fontSize: "0.9rem",
  fontWeight: 500,
  borderRadius: "9999px",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  color: "#e2e8f0",
  cursor: "pointer",
  transition: "border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: "rgba(96, 165, 250, 0.5)",
    },
  },
});

export const techPillActive = style({
  backgroundColor: "rgba(96, 165, 250, 0.15)",
  borderColor: "#60a5fa",
  color: "white",
});

export const techDetail = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingTop: "20px",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
});

export const techDetailName = style({
  fontSize: "2rem",
  fontWeight: 700,
  color: "white",
  margin: 0,
});

export const techDetailSubtitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "16px"
});

export const techDetailDescription = style({
  fontSize: "0.95rem",
  color: "#cbd5e1",
  margin: 0,
});

export const techDetailMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  marginTop: "8px",
});

export const techDetailMetaItem = style({
  fontSize: "0.85rem",
  color: "#60a5fa",
});

export const activeSkillContainer = style({
  display: "flex",
  gap: "64px"
});

export const techDetailContainer = style({
  width: "50%"
});

export const usedInContainer = style({
  paddingLeft: "48px",
  borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
});

export const projectListItem = style({
  listStyleType: "disc",
  color:"green",
  marginBottom: "8px"
})
