import { style, keyframes } from "@vanilla-extract/css";

const fadeInDown = keyframes({
    from: { opacity: 0, transform: "translateY(-6px)" },
    to: { opacity: 1, transform: "translateY(0)" },
});

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});

export const heroSectionContainer = style({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "48px",
    flexDirection: "column",
})

export const buttonContainer = style({
    display: "flex",
    marginTop: "24px",
    gap: "16px",
    alignItems: "center",
    '@media': {
        '(max-width: 675px)': {
            alignItems: "start",
        },
        '(max-width: 550px)': {
            flexDirection: "column",
            alignItems: "center",
        }
    }
})

export const textContainer = style({
    marginTop: "16px",
    maxWidth: "576px",
    color: "#d1d5dc",
    animation: `${fadeIn} 0.3s ease-out 0.15s both`,
})

export const titleContainer = style({
    fontWeight: "800",
    fontSize: "60px",
    maxWidth: "100%",
    overflowWrap: "break-word",
    animation: `${fadeInDown} 0.4s ease-out both`,
    '@media': {
        '(max-width: 768px)': {
            fontSize: "36px",
        },
        '(max-width: 400px)': {
            fontSize: "30px",
        },
    }
})

export const mainContainer = style({
    width: "60%",
    minWidth: 0,
    '@media': {
        '(max-width: 768px)': {
            width: "100%",
        }
    }
})

export const imageContainer = style({
    display: "block",
    width: "max-content",
    '@media': {
        '(max-width: 550px)': {
            display: "none",
        },
    },
})

export const button = style({
    '@media': {
        '(max-width: 768px)': {
            width: "50%",
        }
    }
})

export const aboutSectionContainer = style({
    marginBottom: "128px"
})

export const aboutMainContainer = style({
    display: "flex",
    gap: "32px",
    '@media': {
        '(max-width: 550px)': {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "16px",
        },
    },
})

export const aboutParagraphContainer = style({
    marginTop: "24px",
    width: "40%",
    '@media': {
        '(max-width: 550px)': {
            width: "60%",
        },
    },
})
