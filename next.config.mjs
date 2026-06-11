// Сайт публикуется на GitHub Pages: https://kair97.github.io/JDI/
// В продакшен-сборке все пути начинаются с /JDI; в режиме `npm run dev`
// префикс отключён, чтобы сайт открывался на http://localhost:3000/.
// Если переедете на свой домен (justdoit.kz и т.п.) — поставьте basePath = ''.
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/JDI';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    // доступно в компонентах для ссылок на файлы из public/
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
