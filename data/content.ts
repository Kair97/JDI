// ─────────────────────────────────────────────────────────────────────────────
// Весь текст сайта живёт здесь. Для добавления казахской / английской версии:
// скопируйте объект `ru` как `kz` / `en`, переведите строки и переключайте
// язык на уровне layout (например, через сегмент маршрута /kz, /en).
// ─────────────────────────────────────────────────────────────────────────────

export const CONTACTS = {
  phoneDisplay: '8 776 247 1163',
  whatsappUrl: 'https://wa.me/77762471163',
  whatsappPhone: '77762471163',
  telegramHandle: '@JustDoItTeam1',
  telegramUrl: 'https://t.me/JustDoItTeam1',
};

export type ServiceAccent = 'landing' | 'business' | 'shop' | 'ai';

export interface Service {
  id: ServiceAccent;
  accentHex: string;
  /** Тёмный вариант акцента — для текста на белом (контраст ≥ 4.5:1) */
  accentTextHex: string;
  name: string;
  price: string;
  sub: string;
  features: [string, string, string, string];
  idealFor: string;
  note?: string;
}

export interface Project {
  name: string;
  category: string;
  /** Цвет категории: тёмный, читаемый на светлой плашке */
  categoryHex: string;
  description: string;
  tech: string[];
  github?: string;
  /** Сюда вставить ссылку на живое демо (GitHub Pages / Vercel), когда появится */
  demoUrl?: string;
}

export const ru = {
  nav: {
    links: [
      { label: 'Услуги', href: '#services' },
      { label: 'Проекты', href: '#projects' },
      { label: 'О нас', href: '#about' },
      { label: 'Контакты', href: '#contact' },
    ],
    cta: 'Заказать сайт',
  },

  hero: {
    eyebrow: '// KAZAKHSTAN // WEB // FAST',
    preHeadline: 'Пока конкуренты спят —',
    headlineLine1: 'ваши клиенты',
    headlineLine2: 'находят вас',
    subhead:
      'Сайты и приложения для бизнеса в Казахстане — быстро, под ключ и по доступной цене.',
    badge: 'Готово за 3–5 дней',
    whatsappLabel: 'WhatsApp',
    telegramLabel: 'Telegram',
    terminal: {
      command: 'jdi init --client "ваш бизнес"',
      lines: ['✓ дизайн — уникальный', '✓ код — быстрый', '✓ SEO — вас находят в Google'],
      result: '→ запуск через 3–5 дней',
    },
  },

  services: {
    eyebrow: '// РАЗБИРАЕМСЯ В УСЛУГАХ',
    title: 'Что мы умеем',
    idealForLabel: 'Идеально для:',
    items: [
      {
        id: 'landing',
        accentHex: '#22C55E',
        accentTextHex: '#15803D',
        name: 'Лендинг',
        price: 'от 40 000 ₸',
        sub: 'Одностраничный сайт с одной целью — превратить гостя в клиента',
        features: [
          'Цепляющий первый экран',
          'Блоки выгод и отзывы',
          'Форма заявки на странице',
          'Готов за 3–5 дней',
        ],
        idealFor: 'запуска продукта, услуги или рекламной акции',
      },
      {
        id: 'business',
        accentHex: '#3B82F6',
        accentTextHex: '#1D4ED8',
        name: 'Бизнес-сайт',
        price: 'от 166 000 ₸',
        sub: 'Многостраничный сайт — полноценное лицо вашей компании',
        features: [
          'Главная, услуги, о нас, контакты',
          'SEO — вас находят в Google',
          'Адаптив под телефон',
          'Блог и галерея',
        ],
        idealFor: 'компаний, которым важно выглядеть солидно',
      },
      {
        id: 'shop',
        accentHex: '#F97316',
        accentTextHex: '#C2410C',
        name: 'Интернет-магазин',
        price: 'от 390 000 ₸',
        sub: 'Сайт для продажи товаров онлайн — с корзиной и оплатой',
        features: [
          'Каталог товаров и поиск',
          'Оплата через Kaspi',
          'Личный кабинет клиента',
          'Управление заказами',
        ],
        idealFor: 'розницы и всех, кто продаёт товары',
        note: 'Сроки согласуются индивидуально',
      },
      {
        id: 'ai',
        accentHex: '#8B5CF6',
        accentTextHex: '#6D28D9',
        name: 'Сайт с AI',
        price: 'от 450 000 ₸',
        sub: 'Умный сайт с искусственным интеллектом, который работает за вас',
        features: [
          'AI чат-бот для клиентов',
          'Авто-ответы 24/7',
          'Умный поиск и подсказки',
          'Экономит часы времени',
        ],
        idealFor: 'бизнеса, который хочет автоматизацию',
        note: 'Сроки согласуются индивидуально',
      },
    ] as Service[],
  },

  process: {
    eyebrow: '// КАК МЫ РАБОТАЕМ',
    title: 'От заявки до запуска',
    timelineNote: 'Лендинг — за 3–5 дней',
    steps: [
      {
        title: 'Заявка',
        text: 'Пишете нам в WhatsApp или Telegram — консультация бесплатная.',
      },
      {
        title: 'Бриф и смета',
        text: 'Уточняем задачу, фиксируем цену и сроки. Без скрытых доплат.',
      },
      {
        title: 'Дизайн и разработка',
        text: 'Собираем сайт и показываем прогресс — вы видите всё на каждом шаге.',
      },
      {
        title: 'Запуск',
        text: 'Публикуем сайт, подключаем домен и передаём вам готовый проект.',
      },
    ],
  },

  portfolio: {
    eyebrow: '// ПОРТФОЛИО · РЕАЛЬНЫЕ ПРОЕКТЫ',
    title: 'Мы уже строим цифровые продукты',
    githubLabel: 'GitHub',
    demoLabel: 'Демо',
    items: [
      {
        name: 'OlympIQ',
        category: 'AI · DASHBOARD',
        categoryHex: '#6D28D9',
        description:
          'AI-платформа для подготовки к олимпиадам по программированию. Трекер рейтинга, анализ тем, дорожная карта обучения.',
        tech: ['React', 'AI', 'PostgreSQL'],
        github: 'https://github.com/Kair97/OlympIQ',
      },
      {
        name: 'Forum',
        category: 'FULL-STACK · GO',
        categoryHex: '#1D4ED8',
        description:
          'Полноценный веб-форум на чистом Go — без фреймворков. Регистрация и сессии, посты с категориями, комментарии, лайки/дизлайки, роли модератора и админа, загрузка изображений. Контейнеризация через Docker.',
        tech: ['Go', 'SQLite', 'Docker', 'bcrypt'],
        github: 'https://github.com/Kair97/FORUM',
      },
      {
        name: 'Sushi Delivery',
        category: 'ИНТЕРНЕТ-МАГАЗИН',
        categoryHex: '#C2410C',
        description:
          'Полноценный сайт доставки еды: меню, корзина, категории, поиск и оформление заказа онлайн.',
        tech: ['React', 'Node.js', 'Redis'],
      },
      {
        name: 'Marigold',
        category: 'ЛЕНДИНГ',
        categoryHex: '#15803D',
        description:
          'Лендинг для ресторана: бронирование столиков, меню и атмосферный дизайн, который продаёт.',
        tech: ['React', 'Анимации'],
      },
    ] as Project[],
  },

  stats: {
    items: [
      { value: 'AI', label: 'Технологии в основе' },
      { value: '3–5', label: 'Дней на проект' },
      { value: '100%', label: 'Довольных клиентов', countTo: 100, suffix: '%' },
      { value: 'KZ', label: 'Работаем по всему Казахстану' },
    ],
  },

  techStack: {
    eyebrow: '// НАШ СТЕК',
    title: 'Технологии, на которых мы строим',
    items: ['Go', 'React', 'Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'SQLite', 'Docker', 'AI / LLM'],
  },

  about: {
    eyebrow: '// О НАС',
    title: 'Два разработчика. Ноль посредников.',
    paragraphs: [
      'Мы — небольшая команда из Астаны: два инженера, которые сами проектируют, сами пишут код и сами отвечают за результат. Вы общаетесь напрямую с теми, кто делает ваш сайт, — без менеджеров и испорченного телефона.',
      'Берём ограниченное число проектов в месяц, поэтому каждый доводим до конца быстро и аккуратно. Работаем по всему Казахстану, общение — на русском.',
      'И да: мы настолько уверены в результате, что даём гарантию возврата денег. Нам проще сделать хорошо.',
    ],
  },

  guarantee: {
    text: '100% гарантия: результат или возврат денег',
  },

  order: {
    eyebrow: '// ОСТАВЬТЕ ЗАЯВКУ',
    title: 'Напишите прямо сейчас — консультация бесплатно',
    fields: {
      name: 'Имя',
      namePlaceholder: 'Как к вам обращаться?',
      projectType: 'Тип проекта',
      budget: 'Бюджет (необязательно)',
      budgetPlaceholder: 'Например: до 200 000 ₸',
      message: 'Сообщение',
      messagePlaceholder: 'Коротко о вашей задаче…',
    },
    projectTypes: ['Лендинг', 'Бизнес-сайт', 'Интернет-магазин', 'Сайт с AI', 'Другое'],
    submitLabel: 'Отправить в WhatsApp',
    orLabel: 'или напишите напрямую',
  },

  footer: {
    tagline: '// KAZAKHSTAN // WEB // FAST',
    madeWith: 'Сделано с любовью к коду в Казахстане',
  },
};

export type Content = typeof ru;
