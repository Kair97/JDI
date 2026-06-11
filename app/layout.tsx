import type { Metadata } from 'next';
import { Unbounded, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Все три гарнитуры полностью поддерживают кириллицу.
const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

// Адрес сайта на GitHub Pages. При переезде на свой домен — замените.
const SITE_URL = 'https://kair97.github.io/JDI';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Just Do It — сайты под ключ в Казахстане за 3–5 дней',
  description:
    'Веб-студия из Астаны. Лендинги от 40 000 ₸, бизнес-сайты, интернет-магазины и сайты с AI — быстро, под ключ, с гарантией результата. Работаем по всему Казахстану.',
  keywords: [
    'создание сайтов Астана',
    'сайт под ключ Казахстан',
    'лендинг Астана',
    'интернет-магазин Казахстан',
    'веб-студия Астана',
  ],
  // favicon отдаёт app/icon.png (Next сам учитывает basePath)
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    url: SITE_URL,
    siteName: 'Just Do It',
    title: 'Just Do It — сайты под ключ в Казахстане за 3–5 дней',
    description:
      'Лендинги, бизнес-сайты, интернет-магазины и сайты с AI для бизнеса в Казахстане. Быстро, под ключ, с гарантией.',
    images: [{ url: `${SITE_URL}/JDI.png`, width: 256, height: 256, alt: 'Just Do It — веб-студия' }],
  },
  twitter: {
    card: 'summary',
    title: 'Just Do It — сайты под ключ в Казахстане',
    description: 'Сайты и приложения для бизнеса в Казахстане — быстро, под ключ, с гарантией.',
    images: [`${SITE_URL}/JDI.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Just Do It',
  description:
    'Веб-студия в Астане: сайты и веб-приложения под ключ для бизнеса в Казахстане.',
  url: SITE_URL,
  logo: `${SITE_URL}/JDI.png`,
  telephone: '+77762471163',
  priceRange: '40 000 ₸ — 450 000+ ₸',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Астана',
    addressCountry: 'KZ',
  },
  areaServed: [
    { '@type': 'Country', name: 'Kazakhstan' },
    { '@type': 'City', name: 'Astana' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+77762471163',
    availableLanguage: ['Russian', 'Kazakh'],
  },
  sameAs: ['https://t.me/JustDoItTeam1'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
