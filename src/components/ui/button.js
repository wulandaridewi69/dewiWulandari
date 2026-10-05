import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from './icon';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary:
    'bg-neutral-900 text-white hover:bg-neutral-700 active:bg-neutral-800 shadow-sm',
  secondary:
    'bg-white text-neutral-900 ring-1 ring-neutral-200 ring-inset hover:bg-neutral-50 hover:ring-neutral-300',
  ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
  accent:
    'bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-700 shadow-sm shadow-rose-600/20',
  inverted:
    'bg-white text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300',
  'inverted-outline':
    'text-white ring-1 ring-white/25 ring-inset hover:bg-white/10 hover:ring-white/40',
};

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5',
  lg: 'h-12 px-7 text-[15px]',
};

export function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant] ?? variants.primary, sizes[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' ? (
        <Icon name={icon} className="transition-transform group-hover:-translate-x-0.5" />
      ) : null}
      {children}
      {icon && iconPosition === 'right' ? (
        <Icon name={icon} className="transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  // Internal links must go through next/link; external ones use a plain anchor.
  const isInternal = typeof href === 'string' && href.startsWith('/');

  if (as === 'a' || (href && !isInternal)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href?.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}