'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ru } from '@/data/content';

function CountUpValue({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (inView) setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-20" aria-label="Ключевые цифры">
      <div className="dot-grid-light absolute inset-0" aria-hidden="true" />
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-bright/60 to-transparent"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-bright/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-wrap grid-cols-2 gap-x-6 gap-y-10 px-4 sm:px-6 md:grid-cols-4">
        {ru.stats.items.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="stat-glow font-display text-4xl font-extrabold text-emerald-bright sm:text-5xl">
              {'countTo' in stat && stat.countTo ? (
                <CountUpValue to={stat.countTo} suffix={stat.suffix} />
              ) : (
                stat.value
              )}
            </p>
            <p className="mt-2.5 text-sm text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
