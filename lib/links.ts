import { CONTACTS } from '@/data/content';

export interface OrderData {
  name: string;
  projectType: string;
  budget?: string;
  message?: string;
}

/**
 * Собирает готовую ссылку wa.me с предзаполненным сообщением заявки.
 *
 * Бэкенда у сайта нет намеренно: заявка уходит сразу в WhatsApp владельцам.
 * Если позже понадобится сервер — замените вызов этой функции в OrderForm
 * на POST к Formspree / своему API / Telegram-боту.
 */
export function buildWhatsAppOrderLink(data: OrderData): string {
  const lines = [
    'Здравствуйте! Пишу с сайта Just Do It.',
    `Меня зовут: ${data.name}`,
    `Тип проекта: ${data.projectType}`,
    data.budget ? `Бюджет: ${data.budget}` : null,
    data.message ? `Комментарий: ${data.message}` : null,
  ].filter(Boolean);

  return `${CONTACTS.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
}
