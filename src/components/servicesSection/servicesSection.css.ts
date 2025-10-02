import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

export const servicesContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "64px",
  marginTop: "64px",
  marginBottom: "128px",
  "@media": {
    "screen and (max-width: 675px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
    },
    "screen and (max-width: 550px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "repeat(3, 1fr)",
    },
  },
});

export const firstCardColor = style({
  backgroundColor: colors.firstCardColor,
});

export const secondCardColor = style({
  backgroundColor: colors.secondCardColor,
});

export const thirdCardColor = style({
  backgroundColor: colors.thirdCardColor,
});

export const firstRow = style({
    "@media": {
    "screen and (max-width: 550px)": {
      gridArea: "auto",
      marginInline: "20%"
    },
  },
});

export const secondRow = style({
    "@media": {
    "screen and (max-width: 675px)": {
      gridArea: "2 / 1 / 3 / 3",
      marginInline: "25%"
    },
    "screen and (max-width: 550px)": {
      gridArea: "auto",
      marginInline: "20%"
    },
  },
});
