import { profile } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/section';
import { Icon } from '@/components/ui/icon';

export function ContactCta() {
  const { contact } = profile;

  return (
    <section aria-label="Contact" className="border-t border-neutral-200 bg-white">
      <Container className="py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="grid-bg-dark absolute inset-0 opacity-40" />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-rose-600/20 blur-3xl"
          />

          <div className="relative flex flex-col items-center">
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-neutral-400 text-balance">
              {contact.availability}. Send me a message and I will get back to you.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                href={`mailto:${contact.email}`}
                variant="inverted"
                size="lg"
                icon="mail"
              >
                Email me
              </Button>
              <Button
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                variant="inverted-outline"
                size="lg"
                icon="phone"
              >
                {contact.phone}
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2 text-xs text-neutral-500">
              <Icon name="map-pin" size={13} />
              {contact.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}