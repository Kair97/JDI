'use client';

import { useEffect, useState } from 'react';
import { ru } from '@/data/content';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-wrap items-center justify-between px-4 sm:px-6"
        aria-label="Главная навигация"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Just Do It — на главную">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/JDI.png`}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl shadow-sm"
          />
          <span className="font-display text-base font-bold text-ink">
            Just Do It<span className="text-emerald-bright">.</span>
          </span>
        </a>

        {/* десктоп */}
        <ul className="hidden items-center gap-8 md:flex">
          {ru.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-body transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-bright hover:shadow-md md:inline-block"
        >
          {ru.nav.cta}
        </a>

        {/* мобильное меню */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200/60 bg-white/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {ru.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mintbg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-emerald px-5 py-3 text-center text-base font-semibold text-white shadow-sm"
          >
            {ru.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
