import { ru } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function TechStack() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={ru.techStack.eyebrow} title={ru.techStack.title} />
        <Reveal delay={0.1}>
          {/* бегущая строка; пауза при наведении, дубль скрыт от скринридеров */}
          <div className="marquee mt-10">
            <div className="marquee-track">
              {[false, true].map((hidden) => (
                <ul
                  key={String(hidden)}
                  aria-hidden={hidden || undefined}
                  className="flex shrink-0 gap-3"
                >
                  {ru.techStack.items.map((tech) => (
                    <li
                      key={tech}
                      className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-5 py-2.5 font-mono text-sm font-medium text-ink shadow-sm transition hover:border-emerald/40 hover:text-emerald-deep"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
