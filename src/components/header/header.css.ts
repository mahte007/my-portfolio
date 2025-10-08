import { style } from "@vanilla-extract/css";

export const headerSticky = style({
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#040a11",
})

export const headerContainer = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#040a11",
    paddingBlock: "16px",
    maxWidth: "1280px",
    marginInline: "auto",
    paddingInline: "48px",
    paddingBlockEnd: "12px"
})

export const title = style ({
    fontSize: "24px",
    lineHeight: "1.33",
    fontWeight: "600",
    cursor: "pointer",
    color: "white",
    '@media': {
        '(max-width: 768px)': {
            fontSize: "30px",
        }
    }
})

export const subTitle = style({
    fontSize: "14px",
    color: "white",
})

export const headerMenuContainer = style({
  display: "none", // hidden by default
  gap: "24px",
  alignItems: "center",
  '@media': {
    '(min-width: 768px)': {
      display: "flex", // desktop menu
    },
    '(max-width: 768px)': {
      display: "flex",
      flexDirection: "column",
      position: "absolute", // remove from normal flow
      top: "101%",          // below header
      right: 0,
      width: "200px",
      backgroundColor: "#0f1a25",
      padding: "2rem",
      gap: "24px",
      visibility: "hidden",   // hidden by default
      opacity: 0,             // transparent
      transition: "opacity 0.3s ease, visibility 0.3s ease",
      borderBottomLeftRadius: "16px"
    },
  },
});

export const headerMenuItem = style({
    fontSize: "14px",
    cursor: "pointer",
    ":hover": {
        color: "white",
    },
})

export const headerMenuGit = style({
    marginLeft: "14px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "4px",
    paddingInline: "12px",
    paddingBlock: "8px",
    borderWidth: "1px",
    borderColor: "#364153",
})

export const hamburgerMenuIcon = style({
    padding: "8px",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "#364153",
    '@media': {
        '(min-width: 768px)': {
            display: "none",
        }
    },
})

export const bottomLine = style({
    height: '1px',
    width: '100%',
    background: 'linear-gradient(to right, transparent, #e0e0e0, transparent)',
    marginTop: '8px',
})

export const headerMenuOpen = style({
  '@media': {
    '(max-width: 768px)': {
      visibility: "visible",
      opacity: 1,
    },
  },
});