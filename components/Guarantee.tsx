import { ru } from '@/data/content';
import Reveal from './Reveal';
import { CheckIcon } from './icons';

export default function Guarantee() {
  return (
    <section
      aria-label="Гарантия"
      className="relative overflow-hidden bg-gradient-to-r from-gold-from to-gold-to py-10 md:py-12"
    >
      <span className="gold-sheen" aria-hidden="true" />
      <Reveal>
        <div className="mx-auto flex max-w-wrap flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:px-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink">
            <CheckIcon className="h-5 w-5" />
          </span>
          <p className="font-display text-lg font-bold text-ink sm:text-xl md:text-2xl">
            {ru.guarantee.text}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
