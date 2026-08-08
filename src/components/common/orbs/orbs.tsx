import React from 'react';
import { orb, orbWrapper } from './orbs.css';

type OrbConfig = {
  size: number;
  color: string;
  top: string;
  left: string;
  duration: string;
};

const OrbBackground: React.FC = () => {
  const orbs: OrbConfig[] = [
    { size: 400, color: '#3b82f6', top: '5%', left: '10%', duration: '35s' },
    { size: 350, color: '#8b5cf6', top: '20%', left: '70%', duration: '40s' },
    { size: 300, color: '#60a5fa', top: '45%', left: '30%', duration: '32s' },
    { size: 380, color: '#a855f7', top: '65%', left: '75%', duration: '38s' },
    { size: 320, color: '#3b82f6', top: '85%', left: '15%', duration: '34s' },
    { size: 280, color: '#60a5fa', top: '95%', left: '55%', duration: '30s' },
  ];

  return (
    <div className={orbWrapper}>{/* fills nearest positioned ancestor via inset:0 */}
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
