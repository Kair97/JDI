import { ru, type Service } from '@/data/content';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import SpotlightCard from './SpotlightCard';
import { BuildingIcon, CartIcon, CheckIcon, SparklesIcon, ZapIcon } from './icons';

const serviceIcons: Record<Service['id'], (props: { className?: string }) => JSX.Element> = {
  landing: ZapIcon,
  business: BuildingIcon,
  shop: CartIcon,
  ai: SparklesIcon,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.id];

  return (
    <Reveal delay={index * 0.07}>
      <SpotlightCard
        accentHex={service.accentHex}
        className="group relative h-full overflow-hidden rounded-card bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8"
      >
        {/* тонкая акцентная полоса сверху — как на постерах; растёт при наведении */}
        <span
          className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: service.accentHex }}
          aria-hidden="true"
        />

        <article className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${service.accentHex}1A`, color: service.accentHex }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{service.name}</h3>
          </div>
          <p
            className="whitespace-nowrap pt-1 text-right font-mono text-sm font-bold sm:text-base"
            style={{ color: service.accentTextHex }}
          >
            {service.price}
          </p>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-body">{service.sub}</p>

        <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-body">
              <span className="mt-0.5 shrink-0" style={{ color: service.accentHex }}>
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-muted">
          {ru.services.idealForLabel}{' '}
          <em className="font-medium not-italic text-slate-body">{service.idealFor}</em>
        </p>

        {service.note && (
          <p className="mt-2 font-mono text-xs text-slate-body/80">// {service.note}</p>
        )}
        </article>
      </SpotlightCard>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={ru.services.eyebrow} title={ru.services.title} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {ru.services.items.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
