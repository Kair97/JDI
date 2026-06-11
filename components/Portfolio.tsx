import { ru, type Project } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { ArrowUpRightIcon, GitHubIcon } from './icons';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <article className="group flex h-full flex-col rounded-card bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8">
        <span
          className="inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold tracking-wider"
          style={{ backgroundColor: `${project.categoryHex}14`, color: project.categoryHex }}
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
