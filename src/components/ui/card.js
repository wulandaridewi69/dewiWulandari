import { cn } from '@/lib/utils';

export function Card({ as: Tag = 'div', className, interactive = false, children, ...props }) {
  return (
    <Tag
      className={cn(
        'relative rounded-2xl bg-white ring-1 ring-neutral-200 ring-inset',
        interactive &&
          'transition-all duration-300 hover:-translate-y-0.5 hover:ring-neutral-300 hover:shadow-lg hover:shadow-neutral-900/[0.06]',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn('flex flex-col gap-1.5 p-6', className)}>{children}</div>;
}

export function CardTitle({ as: Tag = 'h3', className, children }) {
  return (
    <Tag className={cn('text-base font-semibold tracking-tight text-neutral-900', className)}>
      {children}
    </Tag>
  );
}

export function CardDescription({ className, children }) {
  return <p className={cn('text-sm leading-relaxed text-neutral-500', className)}>{children}</p>;
}

export function CardFooter({ className, children }) {
  return <div className={cn('flex items-center gap-3 p-6 pt-0', className)}>{children}</div>;
}