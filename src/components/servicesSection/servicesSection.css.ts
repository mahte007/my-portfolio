import { style } from "@vanilla-extract/css";
import { colors } from "@/theme/colors";

export const servicesContainer = style({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "64px",
})

export const firstCardColor = style({
    backgroundColor: colors.firstCardColor,
})

export const secondCardColor = style({
    backgroundColor: colors.secondCardColor,
})

export const thirdCardColor = style({
    backgroundColor: colors.thirdCardColor,
})