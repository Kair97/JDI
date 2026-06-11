'use client';

import { useRef, useState, type ReactNode } from 'react';

interface SpotlightCardProps {
  accentHex: string;
  className?: string;
  children: ReactNode;
}

/**
 * Карточка с «прожектором»: мягкое пятно акцентного цвета следует за курсором.
 * На тач-устройствах эффекта просто нет (нет mousemove) — карточка обычная.
 */
export default function SpotlightCard({ accentHex, className, children }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${accentHex}17, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}
