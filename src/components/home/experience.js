import { timeline } from '@/data/experience';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Icon } from '@/components/ui/icon';
import { SmartImage } from '@/components/ui/smart-image';

const kindIcon = {
  work: 'code',
  course: 'graduation-cap',
  volunteer: 'layers',
};

const kindLabel = {
  work: 'Work',
  course: 'Training',
  volunteer: 'Community',
};

export function Experience() {
  return (
    <Section id="experience" tone="dark">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Experience"
          title="Where I have been"
          description="Professional work and the programmes that shaped how I build."
        />

        <ol className="mt-14 flex flex-col">
          {timeline.map((entry, index) => (
            <li
              key={entry.id}
              className="group relative grid gap-6 pb-10 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              {/* Timeline rail */}
              {index < timeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-2 bottom-0 left-[1.4375rem] w-px bg-white/10 md:left-[4.4375rem]"
                />
              ) : null}

              <div className="flex items-center gap-4 md:pl-4">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-neutral-300 ring-1 ring-white/10 ring-inset transition-colors group-hover:text-white group-hover:ring-white/20">
                  <Icon name={kindIcon[entry.kind] ?? 'code'} size={18} />
                </span>
                <span className="font-mono text-sm whitespace-nowrap text-neutral-500 tabular-nums">
                  {entry.period}
                </span>
              </div>

              <div className="flex flex-col gap-4 md:pl-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
                    {kindLabel[entry.kind] ?? 'Work'}
                  </span>
                  <span aria-hidden="true" className="text-neutral-700">
                    /
                  </span>
                  <span className="text-xs text-neutral-500">{entry.org}</span>
                </div>

                <h3 className="text-lg font-medium tracking-tight text-white">{entry.title}</h3>

                <p className="max-w-2xl text-pretty leading-relaxed text-neutral-400">
                  {entry.description}
                </p>

                {entry.highlights.length > 0 ? (
                  <ul className="flex flex-col gap-2">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <Icon
                          name="check"
                          size={13}
                          strokeWidth={2.5}
                          className="mt-1 text-rose-400"
                        />
                        <span className="text-sm text-neutral-500">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {entry.image ? (
                  <div className="relative mt-2 aspect-16/9 w-full max-w-md overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 ring-inset">
                    <SmartImage
                      src={entry.image}
                      alt={`${entry.org} — ${entry.title}`}
                      title={entry.org}
                      sizes="(max-width: 768px) 100vw, 448px"
                      imageClassName="opacity-80 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}