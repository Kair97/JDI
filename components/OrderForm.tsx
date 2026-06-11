'use client';

import { useState } from 'react';
import { CONTACTS, ru } from '@/data/content';
import { buildWhatsAppOrderLink } from '@/lib/links';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { SendIcon, TelegramIcon, WhatsAppIcon } from './icons';

const o = ru.order;

const inputClasses =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-ink placeholder:text-slate-muted focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/30';

/**
 * Лёгкая форма заявки без бэкенда: по клику собирает заполненные поля
 * в готовое сообщение и открывает WhatsApp.
 *
 * Когда понадобится серверная обработка (Formspree / свой API / Telegram-бот),
 * замените содержимое handleSubmit на fetch к нужному эндпоинту —
 * разметка и валидация останутся прежними.
 */
export default function OrderForm() {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState(o.projectTypes[0]);
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Пожалуйста, укажите имя — чтобы мы знали, как к вам обращаться.');
      return;
    }
    setError('');
    const link = buildWhatsAppOrderLink({
      name: name.trim(),
      projectType,
      budget: budget.trim() || undefined,
      message: message.trim() || undefined,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-wrap px-4 sm:px-6">
        <SectionHeader eyebrow={o.eyebrow} title={o.title} />

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* форма */}
          <Reveal>
            <div className="rounded-card bg-white p-6 shadow-card sm:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="order-name" className="mb-1.5 block text-sm font-semibold text-ink">
                    {o.fields.name} <span className="text-emerald" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={o.fields.namePlaceholder}
                    className={inputClasses}
                  />
                  {error && (
                    <p role="alert" className="mt-2 text-sm font-medium text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="order-type" className="mb-1.5 block text-sm font-semibold text-ink">
                    {o.fields.projectType}
                  </label>
                  <select
                    id="order-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className={inputClasses}
                  >
                    {o.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="order-budget" className="mb-1.5 block text-sm font-semibold text-ink">
                    {o.fields.budget}
                  </label>
                  <input
                    id="order-budget"
                    type="text"
                    inputMode="numeric"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder={o.fields.budgetPlaceholder}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="order-message" className="mb-1.5 block text-sm font-semibold text-ink">
                    {o.fields.message}
                  </label>
                  <textarea
                    id="order-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={o.fields.messagePlaceholder}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-emerald px-7 text-base font-semibold text-white shadow-lg shadow-emerald/25 transition hover:-translate-y-0.5 hover:bg-emerald-bright"
                >
                  <SendIcon />
                  {o.submitLabel}
                </button>
              </div>
            </div>
          </Reveal>

          {/* прямые контакты */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-center gap-4">
              <p className="text-center font-mono text-sm text-slate-body/80 lg:text-left">
                // {o.orLabel}
              </p>
              <a
                href={CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-card bg-emerald text-lg font-bold text-white shadow-lg shadow-emerald/25 transition hover:-translate-y-0.5 hover:bg-emerald-bright"
              >
                <WhatsAppIcon className="h-6 w-6" />
                {CONTACTS.phoneDisplay}
              </a>
              <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[60px] items-center justify-center gap-3 rounded-card bg-[#3B82F6] text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-[#2563EB]"
              >
                <TelegramIcon className="h-6 w-6" />
                {CONTACTS.telegramHandle}
              </a>
              <p className="text-center text-sm text-slate-muted lg:text-left">
                Отвечаем быстро. Консультация ни к чему не обязывает.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
