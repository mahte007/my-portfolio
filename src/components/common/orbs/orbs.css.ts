import { style, keyframes } from '@vanilla-extract/css';

const float = keyframes({
  '0%': { transform: 'translateY(0) translateX(0) scale(1)' },
  '50%': { transform: 'translateY(-50px) translateX(30px) scale(1.2)' },
  '100%': { transform: 'translateY(0) translateX(0) scale(1)' },
});

export const orb = style({
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0.6,
  animationName: float,
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  mixBlendMode: 'screen',
});

export const orbWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'visible',
  zIndex: -1,
  pointerEvents: 'none',
});

export const content = style({
  position: 'relative',
  zIndex: 10,
  color: 'white',
  textAlign: 'center',
  padding: '4rem',
});
