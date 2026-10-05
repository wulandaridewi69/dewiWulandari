import Image from 'next/image';
import { profile } from '@/data/profile';
import { skills } from '@/data/skills';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/section';
import { Icon } from '@/components/ui/icon';

const marqueeItems = skills.map((skill) => skill.name);

export function Hero() {
  const { hero } = profile;

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Background: grid + soft glow, both decorative. */}
      <div
        aria-hidden="true"
        className="grid-bg-dark mask-fade-b absolute inset-0 -z-10 opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-rose-600/20 blur-3xl"
      />

      <Container size="wide" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 py-1.5 pr-4 pl-1.5 text-xs text-white/70 ring-1 ring-white/10 ring-inset">
            <span className="rounded-full bg-white/10 px-2 py-0.5 font-medium text-white">
              {profile.role}
            </span>
            Available for new work
          </span>

          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-400 text-balance sm:text-lg">
            {hero.subline}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="inverted" size="lg" icon="arrow-right">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="inverted-outline"
              size="lg"
              icon="arrow-up-right"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-16 flex w-full flex-col items-center gap-4">
            <div className="relative size-20 overflow-hidden rounded-full ring-1 ring-white/15 ring-inset sm:size-24">
              <Image
                src={profile.avatar}
                alt={`${profile.fullName}, ${profile.role}`}
                fill
                priority
                sizes="96px"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-neutral-500">
              {hero.greeting} — {profile.fullName}, {profile.location}
            </p>
          </div>
        </div>
      </Container>

      {/* Tech marquee, decorative and paused for reduced-motion users. */}
      <div className="relative border-t border-white/10 py-5">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="flex items-center gap-8 text-sm text-neutral-500"
              >
                {name}
                <Icon name="check" size={12} className="text-rose-500" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}