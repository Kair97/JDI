import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#16A34A',
          bright: '#22C55E',
          // тёмный вариант для мелкого текста на светлом фоне (контраст ≥ 4.5:1)
          deep: '#15803D',
        },
        ink: '#0F172A',
        slate: {
          body: '#475569',
          muted: '#94A3B8',
        },
        mintbg: '#ECFDF5',
        skybg: '#EFF6FF',
        service: {
          landing: '#22C55E',
          business: '#3B82F6',
          shop: '#F97316',
          ai: '#8B5CF6',
        },
        gold: {
          from: '#FCD34D',
          to: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 16px 40px rgba(15, 23, 42, 0.12)',
      },
      maxWidth: {
        wrap: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
