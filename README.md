# Just Do It — сайт студии

Лендинг веб-студии **Just Do It** (Астана, Казахстан): услуги, цены, портфолио, заявка в WhatsApp/Telegram.

**Стек:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · статический экспорт (`output: 'export'`).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

## Сборка (статические файлы)

```bash
npm run build    # результат в папке out/
```

Папку `out/` можно положить на любой статический хостинг (GitHub Pages, Vercel, Netlify).

## Деплой на GitHub Pages

Сайт публикуется автоматически: пуш в `main` репозитория
[Kair97/JDI](https://github.com/Kair97/JDI) запускает workflow
`.github/workflows/deploy.yml`, и через ~1–2 минуты сайт обновляется на
**https://kair97.github.io/JDI/** — эту ссылку и отправляйте клиентам.

Требуется один раз включить в настройках репозитория:
**Settings → Pages → Source: GitHub Actions**.

## Если переедете на свой домен

1. В `next.config.mjs` поставьте `basePath = ''`.
2. В `app/layout.tsx` замените `SITE_URL` на новый домен (нужно для OG-карточек и JSON-LD).

## Где что менять

| Что | Где |
|---|---|
| Весь текст сайта (услуги, цены, проекты, контакты) | `data/content.ts` |
| Ссылки на живые демо проектов | `data/content.ts` → `portfolio.items[].demoUrl` |
| Цвета и шрифты | `tailwind.config.ts`, `app/globals.css` |
| SEO, OG, JSON-LD | `app/layout.tsx` |
| Сообщение, которое уходит в WhatsApp из формы | `lib/links.ts` |

## Казахская / английская версия

Весь текст лежит в `data/content.ts` в объекте `ru`. Чтобы добавить язык:

1. Скопируйте `ru` как `kz` (или `en`) и переведите строки.
2. Добавьте сегмент маршрута (например, `app/kz/page.tsx`), который передаёт
   нужный объект контента в компоненты, либо переключайте контент через
   контекст/параметр.

Компоненты уже читают только из `data/content.ts` — хардкода текста в разметке нет
(кроме пары служебных строк в `About`/`OrderForm`, помеченных в коде).

## Форма заявки

Бэкенда нет намеренно: форма собирает поля в готовое сообщение и открывает
`wa.me` с предзаполненным текстом. Точка замены на реальный бэкенд
(Formspree / свой API / Telegram-бот) помечена комментарием в
`components/OrderForm.tsx` и `lib/links.ts`.
