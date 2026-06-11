import { ru } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { OrnamentDivider } from './Ornament';
import { ZapIcon } from './icons';

export default function Process() {
  const p = ru.process;

  return (
    <section id="process" className="bg-white/60 py-20 md:py-28">
      <div className="mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} />

        <Reveal className="mt-6 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-2 font-mono text-sm font-semibold text-emerald-deep">
            <ZapIcon className="h-4 w-4" />
            {p.timelineNote}
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* соединительная линия на десктопе */}
          <span
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-emerald/15 via-emerald/40 to-emerald/15 md:block"
            aria-hidden="true"
          />
          {p.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex gap-4 md:flex-col md:gap-0 md:text-center">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald font-mono text-base font-bold text-white shadow-lg shadow-emerald/25 md:mx-auto">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="md:mt-5">
                  <h3 className="font-display text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <OrnamentDivider className="mt-16" />
      </div>
    </section>
  );
}
