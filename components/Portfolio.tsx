import { ru, type Project } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowUpRightIcon, GitHubIcon } from './icons';

/**
 * Стилизованное превью проекта — тёмный мини-браузер со скелетоном интерфейса,
 * в той же манере, что и фирменные постеры студии. Раскладка скелетона
 * варьируется по типу проекта, чтобы карточки не выглядели клонами.
 */
function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const accent = project.visualHex;
  // четыре варианта скелетона: dashboard / forum / shop / landing
  const variant = index % 4;

  return (
    <div className="relative h-44 overflow-hidden bg-ink sm:h-48" aria-hidden="true">
      <div className="dot-grid-light absolute inset-0" />
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: accent }}
      />

      {/* окно браузера; чуть приподнимается при наведении на карточку */}
      <div className="absolute inset-x-6 bottom-0 top-6 rounded-t-xl bg-white/[0.05] ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1.5 sm:inset-x-8">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]/80" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/80" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]/80" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
        </div>

        <div className="space-y-2 p-3.5">
          <div className="h-2.5 w-1/2 rounded-full" style={{ backgroundColor: accent }} />
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
          {variant === 0 && (
            /* dashboard: график-столбики */
            <div className="flex items-end gap-1.5 pt-1">
              {[10, 18, 8, 22, 14, 26, 17].map((h, i) => (
                <span
                  key={i}
                  className="w-3 rounded-sm"
                  style={{ height: h, backgroundColor: i % 2 ? `${accent}66` : accent }}
                />
              ))}
            </div>
          )}
          {variant === 1 && (
            /* forum: треды с аватарами */
            <div className="space-y-1.5 pt-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-4 w-4 shrink-0 rounded-full" style={{ backgroundColor: `${accent}55` }} />
                  <span className={`h-2 rounded-full bg-white/15 ${i === 0 ? 'w-2/3' : i === 1 ? 'w-1/2' : 'w-3/5'}`} />
                </div>
              ))}
            </div>
          )}
          {variant === 2 && (
            /* магазин: сетка товаров */
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1 rounded-md bg-white/5 p-1.5 ring-1 ring-white/10">
                  <div className="h-5 rounded" style={{ backgroundColor: `${accent}33` }} />
                  <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                </div>
              ))}
            </div>
          )}
          {variant === 3 && (
            /* лендинг: hero-блок с кнопкой */
            <div className="space-y-2 pt-1">
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
              <div className="h-5 w-20 rounded-md" style={{ backgroundColor: accent }} />
            </div>
          )}
        </div>
      </div>

      <span className="absolute bottom-2.5 right-4 font-mono text-[10px] tracking-wider text-white/35">
        {'//'} {project.name.toUpperCase()}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <article className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <ProjectVisual project={project} index={index} />

        <div className="flex flex-1 flex-col p-6 sm:p-8 sm:pt-6">
          <span
            className="inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-wider"
            style={{ backgroundColor: `${project.visualHex}14`, color: project.categoryHex }}
          >
            {project.category}
          </span>

          <h3 className="mt-4 font-display text-xl font-bold text-ink">{project.name}</h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-body">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Технологии проекта ${project.name}`}>
            {project.tech.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-body"
              >
                {tag}
              </li>
            ))}
          </ul>

          {(project.github || project.demoUrl) && (
            <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  <GitHubIcon />
                  {ru.portfolio.githubLabel}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-emerald px-4 text-sm font-semibold text-white transition hover:bg-emerald-bright"
                >
                  {ru.portfolio.demoLabel}
                  <ArrowUpRightIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={ru.portfolio.eyebrow} title={ru.portfolio.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {ru.portfolio.items.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
