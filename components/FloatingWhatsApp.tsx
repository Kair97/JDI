'use client';

import { useEffect, useState } from 'react';
import { CONTACTS } from '@/data/content';
import { WhatsAppIcon } from './icons';

/** Плавающая кнопка WhatsApp — появляется после первого экрана. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 550);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={CONTACTS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Написать в WhatsApp: ${CONTACTS.phoneDisplay}`}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-xl shadow-emerald/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-bright ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald opacity-20"
        style={{ animationDuration: '2.4s' }}
        aria-hidden="true"
      />
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
