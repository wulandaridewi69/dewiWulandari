import Image from 'next/image';
import { profile } from '@/data/profile';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { Icon } from '@/components/ui/icon';

export function About() {
  const { about } = profile;

  return (
    <Section id="about" tone="muted">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-neutral-200 ring-1 ring-neutral-300 ring-inset">
              <Image
                src={profile.avatar}
                alt={`${profile.fullName}, ${profile.role}`}
                fill
                sizes="(max-width: 1024px) 384px, 340px"
                className="object-cover"
              />
            </div>

            {/* Decorative offset frame. */}
            <div
              aria-hidden="true"
              className="absolute -right-4 -bottom-4 -z-10 size-full rounded-3xl border border-neutral-300"
            />

            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg shadow-neutral-900/5 ring-1 ring-neutral-200">
              <span className="size-1.5 rounded-full bg-rose-500" />
              <span className="text-xs font-medium whitespace-nowrap text-neutral-700">
                {profile.contact.availability}
              </span>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <SectionHeading
              align="left"
              eyebrow="About"
              title="A frontend engineer who cares about the details."
            />

            <div className="mt-6 flex flex-col gap-4">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-pretty leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Icon name="check" size={12} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-neutral-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}