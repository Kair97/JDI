import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  light?: boolean;
  align?: 'left' | 'center';
}

/**
 * Фирменный заголовок секции: «кодовый» eyebrow в моноширинном шрифте
 * с мигающей кареткой + крупный display-заголовок.
 */
export default function SectionHeader({
  eyebrow,
  title,
  light = false,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <p
        className={`code-caret font-mono text-[13px] font-medium tracking-wider ${
          light ? 'text-emerald-bright' : 'text-emerald-deep'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-[28px] font-bold leading-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
