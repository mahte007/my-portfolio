import { style } from "@vanilla-extract/css";

export const heroSectionContainer = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "48px",
    '@media': {
        '(max-width: 768px)': {
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        }
    }
})