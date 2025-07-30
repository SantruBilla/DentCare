import React, { FC } from 'react';

const circles = [
  {
    size: 340,
    left: '-8%',
    top: '-10%',
    color: 'rgba(173, 216, 230, 0.35)', // light blue
    blur: 60,
  },
  {
    size: 260,
    left: '60%',
    top: '-12%',
    color: 'rgba(255, 255, 255, 0.28)', // white
    blur: 48,
  },
  {
    size: 220,
    left: '10%',
    top: '60%',
    color: 'rgba(200, 230, 255, 0.22)', // very light blue
    blur: 36,
  },
  {
    size: 180,
    left: '70%',
    top: '70%',
    color: 'rgba(173, 216, 230, 0.18)', // light blue
    blur: 32,
  },
];

const GlassmorphismBackground: FC = () => (
  <div className="pointer-events-none absolute inset-0 w-full h-full z-0" aria-hidden="true">
    {circles.map((c, i) => (
      <span
        key={i}
        style={{
          position: 'absolute',
          left: c.left,
          top: c.top,
          width: c.size,
          height: c.size,
          background: c.color,
          borderRadius: '50%',
          filter: `blur(${c.blur}px)`,
          opacity: 1,
        }}
      />
    ))}
  </div>
);

export default GlassmorphismBackground; 