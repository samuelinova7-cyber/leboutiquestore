import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export const PinkParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate initial floating particles with subtle, delicate properties
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      speedY: Math.random() * 0.08 + 0.03,
      speedX: (Math.random() - 0.5) * 0.05,
      opacity: Math.random() * 0.35 + 0.15
    }));

    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          y: p.y - p.speedY <= 0 ? 100 : p.y - p.speedY,
          x: (p.x + p.speedX + 100) % 100
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-linear-to-tr from-[#D4A5A5] to-[#F3E5AB] blur-[0.6px] transition-opacity duration-1000"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 6px rgba(212, 165, 165, 0.3)'
          }}
        />
      ))}
    </div>
  );
};
