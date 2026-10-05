import { stats } from '@/data/stats';
import { Container } from '@/components/ui/section';

export function Stats() {
  return (
    <section aria-label="At a glance" className="border-y border-neutral-200 bg-neutral-50">
      <Container>
        <dl className="grid divide-neutral-200 sm:grid-cols-3 sm:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-10 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-col items-center gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900 tabular-nums">
                  {stat.value}
                  <span className="text-rose-600">{stat.suffix}</span>
                </span>
                <span className="text-sm font-medium text-neutral-900">{stat.label}</span>
                <span className="max-w-[16rem] text-xs leading-relaxed text-neutral-500 text-pretty">
                  {stat.description}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}