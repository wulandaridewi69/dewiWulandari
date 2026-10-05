import { cn } from '@/lib/utils';

export function Container({ as: Tag = 'div', size = 'default', className, children }) {
  const sizes = {
    sm: 'max-w-3xl',
    default: 'max-w-5xl',
    wide: 'max-w-6xl',
    full: 'max-w-7xl',
  };

  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8', sizes[size] ?? sizes.default, className)}>
      {children}
    </Tag>
  );
}

export function Section({
  as: Tag = 'section',
  id,
  tone = 'default',
  className,
  children,
  ...props
}) {
  const tones = {
    default: 'bg-white',
    muted: 'bg-neutral-50',
    dark: 'bg-neutral-950 text-white',
  };

  return (
    <Tag id={id} className={cn('py-20 sm:py-28', tones[tone] ?? tones.default, className)} {...props}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
  className,
}) {
  const isDark = tone === 'dark';

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset',
            isDark
              ? 'bg-white/10 text-white/80 ring-white/15'
              : 'bg-neutral-100 text-neutral-600 ring-neutral-200',
          )}
        >
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          'text-balance text-3xl font-semibold tracking-tight sm:text-4xl',
          isDark ? 'text-white' : 'text-neutral-900',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'text-pretty text-base leading-relaxed text-balance sm:text-lg',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
            isDark ? 'text-neutral-400' : 'text-neutral-500',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}