/**
 * Казахский орнаментальный мотив «қошқар мүйіз» (бараний рог) —
 * перекликается с крылом в логотипе. Используется как тонкий разделитель
 * секций и как фоновый росчерк в hero.
 */

export function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <svg
        width="260"
        height="28"
        viewBox="0 0 260 28"
        fill="none"
        className="text-emerald/40"
      >
        <line x1="0" y1="14" x2="92" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="168" y1="14" x2="260" y2="14" stroke="currentColor" strokeWidth="1.5" />
        {/* левый рог */}
        <path
          d="M92 14c10 0 16-3 16-8 0-3.5-3-5-5.5-3.5-2.3 1.4-1.5 5 1.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M92 14c10 0 16 3 16 8 0 3.5-3 5-5.5 3.5-2.3-1.4-1.5-5 1.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* правый рог (зеркально) */}
        <path
          d="M168 14c-10 0-16-3-16-8 0-3.5 3-5 5.5-3.5 2.3 1.4 1.5 5-1.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M168 14c-10 0-16 3-16 8 0 3.5 3 5 5.5 3.5 2.3-1.4 1.5-5-1.5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* центральный ромб */}
        <rect
          x="126"
          y="10"
          width="8"
          height="8"
          transform="rotate(45 130 14)"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

/** Крупный угловой росчерк для фона hero — очень бледный. */
export function OrnamentFlourish({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="#16A34A" strokeWidth="2" strokeLinecap="round" opacity="0.45">
        <path d="M390 390C390 250 320 180 180 180c-60 0-90-26-90-62 0-28 22-44 44-36 18 6.5 16 32-6 32" />
        <path d="M390 390C250 390 180 320 180 180" opacity="0.5" />
        <path d="M330 390c0-90-50-140-140-140-40 0-62-18-62-44 0-20 16-32 32-26 13 4.7 12 23-4 23" />
      </g>
    </svg>
  );
}
