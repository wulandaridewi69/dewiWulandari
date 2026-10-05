import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-neutral-100 text-neutral-700 ring-neutral-200 ring-inset',
  accent: 'bg-rose-50 text-rose-700 ring-rose-200 ring-inset',
  dark: 'bg-white/10 text-white/80 ring-white/15 ring-inset',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-200 ring-inset',
  warning: 'bg-amber-50 text-amber-700 ring-amber-200 ring-inset',
};

const sizes = {
  sm: 'h-5 px-2 text-[11px]',
  md: 'h-6 px-2.5 text-xs',
};

export function Badge({ variant = 'default', size = 'md', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap ring-1',
        variants[variant] ?? variants.default,
        sizes[size] ?? sizes.md,
        className,
      )}
    >
      {children}
    </span>
  );
}