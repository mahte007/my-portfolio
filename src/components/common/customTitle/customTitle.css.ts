import { style } from "@vanilla-extract/css";

const baseHeading = style({
    fontWeight: 700,
    lineHeight: 1.2,
    color: "white",
    margin: 0,
});

export const titleContainer = style({
    display: "flex",
    flexFlow: "column",
    "@media": {
    "screen and (max-width: 675px)": {
      marginBottom: "64px",
    },
  },
})

export const h1 = style([
  baseHeading,
  {
    fontSize: "2.5rem", // 40px
    marginBottom: "1.5rem",
  },
]);

export const h2 = style([
  baseHeading,
  {
    fontSize: "2rem", // 32px
    marginBottom: "1.25rem",
  },
]);

export const h3 = style([
  baseHeading,
  {
    fontSize: "1.75rem", // 28px
    marginBottom: "1rem",
  },
]);

export const h4 = style([
  baseHeading,
  {
    fontSize: "1.5rem", // 24px
    marginBottom: "0.75rem",
  },
]);

export const h5 = style([
  baseHeading,
  {
    fontSize: "1.25rem", // 20px
    marginBottom: "0.5rem",
  },
]);

export const h6 = style([
  baseHeading,
  {
    fontSize: "1rem", // 16px
    marginBottom: "0.25rem",
    fontWeight: 600,
  },
]);

export const subTitle = style({
    fontSize: "1rem",
    marginBottom: "0.25rem",
    fontWeight: 500,
    color: "rgba(59, 130, 246, 1)",
})
