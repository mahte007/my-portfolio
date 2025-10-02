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
  display: "none",
  gap: "24px",
  alignItems: "center",
  '@media': {
    '(min-width: 768px)': {
      display: "flex",
    },
    '(max-width: 768px)': {
      display: "flex",
      flexDirection: "column",
      position: "fixed", // <-- make it fixed
      top: "10%",
      right: "-100%", // <-- hide off-screen
      width: "200px",
      height: "100vh",
      backgroundColor: "#040a11",
      padding: "2rem",
      gap: "24px",
      transition: "right 0.3s ease",
      zIndex: 1000,
    },
  },
});

export const headerMenuItem = style({
    fontSize: "14px",
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
      right: "0", // slide in
    },
  },
});