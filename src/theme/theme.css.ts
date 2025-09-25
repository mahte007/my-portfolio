import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    background: null,
    text: null,
  },
  spacing: {
    small: null,
    medium: null,
    large: null,
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: "#60a5fa",
    secondary: "#c084fc",
    background: "#111827",
    text: "#f9fafb",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    primary: "#2563eb",
    secondary: "#9333ea",
    background: "#ffffff",
    text: "#111827",
  },
  spacing: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
});