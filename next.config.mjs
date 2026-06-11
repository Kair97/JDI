// Сайт публикуется на GitHub Pages: https://kair97.github.io/JDI/
// Поэтому все пути должны начинаться с /JDI. Если когда-нибудь переедете
// на свой домен (justdoit.kz и т.п.) — поставьте basePath = ''.
const basePath = '/JDI';

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
