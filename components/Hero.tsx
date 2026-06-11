import { CONTACTS, ru } from '@/data/content';
import HeroTerminal from './HeroTerminal';
import Reveal from './Reveal';
import { OrnamentFlourish } from './Ornament';
import { TelegramIcon, WhatsAppIcon, ZapIcon } from './icons';

export default function Hero() {
  const h = ru.hero;

  return (
    <section id="top" className="bg-brand-gradient relative overflow-hidden">
      {/* живой фон: дрейфующие пятна цвета под точечной сеткой */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="blob animate-blob -left-24 -top-24 h-[440px] w-[440px] bg-emerald-bright/25" />
        <div className="blob animate-blob -right-16 top-16 h-[400px] w-[400px] bg-sky-400/20 [animation-delay:-7s]" />
        <div className="blob animate-blob -bottom-32 left-1/3 h-[380px] w-[380px] bg-violet-400/15 [animation-delay:-14s]" />
      </div>
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <OrnamentFlourish className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] opacity-[0.07]" />
      <OrnamentFlourish className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rotate-180 opacity-[0.05]" />

      <div className="relative mx-auto grid max-w-wrap items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-40">
        <div>
          <Reveal>
            <p className="code-caret font-mono text-[13px] font-medium tracking-wider text-emerald-deep">
              {h.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-ink">
              <span className="block text-xl font-semibold text-slate-body sm:text-2xl">
                {h.preHeadline}
              </span>
              <span className="mt-2 block font-display text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl">
                {h.headlineLine1}
              </span>
              <span className="text-gradient-emerald block font-display text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl">
                {h.headlineLine2}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-body sm:text-lg">
              {h.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-white/70 px-4 py-2 font-mono text-sm font-medium text-emerald-deep shadow-sm">
              <ZapIcon className="h-4 w-4" />
              {h.badge}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-emerald px-7 text-base font-semibold text-white shadow-lg shadow-emerald/25 transition hover:-translate-y-0.5 hover:bg-emerald-bright hover:shadow-xl hover:shadow-emerald/30"
              >
                <WhatsAppIcon />
                {h.whatsappLabel} · {CONTACTS.phoneDisplay}
              </a>
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex min-h-[52px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#3B82F6] px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-xl"
              >
                <TelegramIcon />
                {h.telegramLabel} · {CONTACTS.telegramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="flex justify-center lg:justify-end">
          <HeroTerminal />
        </Reveal>
      </div>
    </section>
  );
}
