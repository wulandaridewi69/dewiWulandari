import { cn } from '@/lib/utils';

/**
 * Horizontal proficiency meter.
 * The bar width is driven by an inline style because it must equal an arbitrary
 * percentage; `transform: scaleX()` keeps layout stable and avoids reflow.
 */
export function SkillMeter({ name, level, category, className }) {
  const safeLevel = Math.min(100, Math.max(0, Number(level) || 0));

  return (
    <div className={cn('group flex flex-col gap-2', className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-neutral-900">{name}</span>
        <span className="font-mono text-xs tabular-nums text-neutral-400">
          {safeLevel}%
        </span>
      </div>

      <div
        className="h-1 w-full overflow-hidden rounded-full bg-neutral-100"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={safeLevel}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full w-full origin-left rounded-full bg-neutral-900 transition-transform duration-700 ease-out group-hover:bg-rose-600"
          style={{ transform: `scaleX(${safeLevel / 100})` }}
        />
      </div>

      {category ? (
        <span className="text-[11px] tracking-wide text-neutral-400 uppercase">{category}</span>
      ) : null}
    </div>
  );
}