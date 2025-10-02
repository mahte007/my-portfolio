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
  display: 'flex',
  gap: '1rem',
  alignItems: "center",
  '@media': {
    'screen and (max-width: 768px)': {
      position: 'absolute',
      top: '100%',
      right: 0,
      flexDirection: 'column',
      background: '#0f1a25',
      width: '200px',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      color: "white",
      borderBottomLeftRadius: "16px",
      padding: "16px",
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
    'screen and (max-width: 768px)': {
      transform: 'translateX(0)',
    },
  },
});