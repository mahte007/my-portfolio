import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

export const skillsSectionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "64px",
  marginBottom: "64px",
});

export const mainContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "64px",
  marginTop: "64px",
  marginBottom: "64px",
  alignItems: "stretch",
  height: "200px"
});

export const techContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "25%",
  borderRadius: "16px",
  padding: "16px",
  backgroundColor: "#0f1a25",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
  gap: "8px",
});

export const techElement = style({
  padding: "8px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
});

export const highlightedElement = style({
  backgroundColor: "rgba(6, 182, 212, 0.1)",
  borderRadius: "8px",
})

export const skillsContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "25%",
  borderRadius: "16px",
  padding: "16px",
  backgroundColor: "#0f1a25",
  boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
  gap: "8px",
});

export const skillsElement = style({
  padding: "8px 0",
  height: "100%"
});

export const rotatedChevron = style({
  transform: "rotate(90deg)",
  transition: "transform 0.3s ease",
});

export const chevron = style({
  transition: "transform 0.3s ease",
});

export const progressBarBase = style({
  width: "100%",
  height: "8px",
  borderRadius: "calc(infinity * 1px)",
  backgroundColor: "grey",
  overflow: "hidden"
})

export const progressBar = style({
  height: "8px",
  backgroundColor: "white"
})