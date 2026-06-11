'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ru } from '@/data/content';

const t = ru.hero.terminal;

/**
 * Фирменный hero-момент: мини-терминал «печатает» команду и шипит проект.
 * При prefers-reduced-motion весь вывод показывается сразу, без анимации.
 */
export default function HeroTerminal() {
  const reduce = useReducedMotion();
  const [typedCount, setTypedCount] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  const totalLines = t.lines.length + 1; // строки + итоговая

  useEffect(() => {
    if (reduce) {
      setTypedCount(t.command.length);
      setVisibleLines(totalLines);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let i = 0;

    const startTyping = setTimeout(() => {
      const typing = setInterval(() => {
        i += 1;
        setTypedCount(i);
        if (i >= t.command.length) {
          clearInterval(typing);
          t.lines.forEach((_, idx) => {
            timers.push(setTimeout(() => setVisibleLines(idx + 1), 450 + idx * 380));
          });
          timers.push(
            setTimeout(() => setVisibleLines(totalLines), 450 + t.lines.length * 380 + 250),
          );
        }
      }, 42);
      timers.push(typing as unknown as ReturnType<typeof setTimeout>);
    }, 500);
    timers.push(startTyping);

    return () => timers.forEach(clearTimeout);
  }, [reduce, totalLines]);

  const doneTyping = typedCount >= t.command.length;

  // лёгкий 3D-наклон за курсором (только desktop, выключен при reduced-motion)
  const wrapRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 8);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={wrapRef}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="w-full max-w-md rounded-card bg-ink shadow-[0_24px_60px_rgba(15,23,42,0.3),0_0_80px_rgba(34,197,94,0.12)] ring-1 ring-white/10"
    >
      {/* шапка окна */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-white/40">jdi — deploy</span>
      </div>

      <div className="min-h-[200px] px-5 py-5 font-mono text-[13px] leading-7 sm:text-sm" aria-live="off">
        <p className="text-white">
          <span className="select-none text-emerald-bright">$ </span>
          {t.command.slice(0, typedCount)}
          {!doneTyping && (
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-bright" aria-hidden="true" />
          )}
        </p>

        {t.lines.map((line, idx) => (
          <p
            key={line}
            className={`text-white/75 transition-opacity duration-300 ${
              visibleLines > idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-emerald-bright">{line.slice(0, 1)}</span>
            {line.slice(1)}
          </p>
        ))}

        <p
          className={`mt-1 font-semibold text-emerald-bright transition-opacity duration-300 ${
            visibleLines >= totalLines ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.result}
          {visibleLines >= totalLines && (
            <span className="ml-1.5 inline-block h-4 w-2 translate-y-0.5 bg-emerald-bright" style={{ animation: 'caret-blink 1.1s steps(1,end) infinite' }} aria-hidden="true" />
          )}
        </p>
      </div>
    </motion.div>
  );
}
