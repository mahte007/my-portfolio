import { style } from "@vanilla-extract/css";

export const wrapper = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "24px",
});

export const iconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  backgroundColor: "#0f1a25",
  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
  color: "#60a5fa",
  marginBottom: "32px",
});

export const message = style({
  maxWidth: "480px",
  fontSize: "16px",
  color: "#b2c4b7",
  marginBottom: "40px",
});

export const actions = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

export const socialsContainer = style({
  display: "flex",
  gap: "24px",
});

export const socialIcon = style({
  ":hover": {
    transform: "scale(1.2)",
    transition: "transform 0.3s ease",
  },
  cursor: "pointer",
});
