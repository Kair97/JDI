import { ru } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function TechStack() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={ru.techStack.eyebrow} title={ru.techStack.title} />
        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {ru.techStack.items.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-mono text-sm font-medium text-ink shadow-sm transition hover:border-emerald/40 hover:text-emerald"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
