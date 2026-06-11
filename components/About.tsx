import { ru } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="bg-white/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow={ru.about.eyebrow} title={ru.about.title} />
        <div className="mt-8 space-y-5">
          {ru.about.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-center text-base leading-relaxed text-slate-body sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-8 flex justify-center">
          <p className="font-mono text-sm text-slate-body/80">
            Астана <span className="text-emerald-deep">//</span> весь Казахстан
          </p>
        </Reveal>
      </div>
    </section>
  );
}
