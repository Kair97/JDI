import { CONTACTS, ru } from '@/data/content';
import { TelegramIcon, WhatsAppIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink py-14">
      <div className="dot-grid-light absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-wrap px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-3">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/JDI.png`}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl"
              />
              <span className="font-display text-lg font-bold text-white">
                Just Do It<span className="text-emerald-bright">.</span>
              </span>
            </a>
            <p className="mt-3 font-mono text-xs tracking-wider text-emerald-bright">
              {ru.footer.tagline}
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3 md:justify-start">
              {ru.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={CONTACTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-emerald-bright"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {CONTACTS.phoneDisplay}
            </a>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-emerald-bright"
            >
              <TelegramIcon className="h-4 w-4" />
              {CONTACTS.telegramHandle}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} Just Do It</p>
          <p>{ru.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
