'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** Тонкая полоса прогресса чтения страницы — над шапкой. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-emerald via-teal-500 to-emerald-bright"
      style={{ scaleX }}
    />
  );
}
