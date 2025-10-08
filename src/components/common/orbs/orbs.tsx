import React from 'react';
import { orb, orbWrapper } from './orbs.css';

type OrbConfig = {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: string;
};

const OrbBackground: React.FC<{ pageHeight?: number }> = ({ pageHeight }) => {
  const orbs: OrbConfig[] = [
    { size: 100, color: '#ff6b6b', top: '5%', left: '15%', duration: '25s' },
    { size: 200, color: '#6bc1ff', top: '25%', left: '65%', duration: '30s' },
    { size: 80,  color: '#ffdd6b', top: '10%', left: '45%', duration: '20s' },
    { size: 120, color: '#9bff6b', top: '30%', left: '10%', duration: '28s' },
    { size: 90,  color: '#b76bff', top: '40%', left: '80%', duration: '22s' },
    { size: 130, color: '#6bffa1', top: '45%', left: '20%', duration: '26s' },
    { size: 100, color: '#ff6b6b', top: '60%', left: '40%', duration: '25s' },
    { size: 150, color: '#6bc1ff', top: '65%', left: '70%', duration: '30s' },
    { size: 80, color: '#ffdd6b', top: '80%', left: '20%', duration: '20s' },
    { size: 120, color: '#6bffa1', top: '85%', left: '70%', duration: '30s' },
    { size: 90, color: '#b76bff', top: '90%', left: '90%', duration: '25s' },
    { size: 60, color: '#9bff6b', top: '90%', left: '20%', duration: '28s' },
  ];

  return (
    <div
      className={orbWrapper}
      style={{ height: `${pageHeight && pageHeight + 500}px` }} // spreads across full scroll height
    >
      {orbs.map((o, index) => (
        <div
          key={index}
          className={orb}
          style={{
            width: `${o.size}px`,
            height: `${o.size}px`,
            background: o.color,
            top: o.top,
            left: o.left,
            animationDuration: o.duration,
          }}
        />
      ))}
    </div>
  );
};

export default OrbBackground;
