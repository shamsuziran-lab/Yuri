import { cn } from '../utils/cn';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: Props) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : '', className)}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-charcoal/65 leading-relaxed">{subtitle}</p>}
      <div
        className={cn(
          'mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-orange',
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  );
}
