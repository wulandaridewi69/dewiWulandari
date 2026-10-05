import { PageHeader } from '@/components/layout/page-header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { SocialLinks } from '@/components/ui/social-links';
import { certifications, education } from '@/data/academic';
import { profile } from '@/data/profile';
import { Container, Section, SectionHeading } from '@/components/ui/section';

export const metadata = {
  title: 'Academic',
  description:
    'Education, training and certifications in front end engineering, plus contact details.',
};

export default function AcademicPage() {
  const { contact } = profile;

  return (
    <>
      <PageHeader
        eyebrow="Academic"
        title="Education & credentials"
        description="Programmes completed, certificates earned, and the fastest way to reach me."
      />

      <Section>
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Education"
            title="Where I studied"
            description="Both programmes were completed in full, each ending with submitted projects."
          />

          <ol className="mt-10 flex flex-col gap-4">
            {education.map((entry) => (
              <li key={entry.id}>
                <Card interactive className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex shrink-0 items-center gap-3 sm:w-32 sm:flex-col sm:items-start">
                    <span className="font-mono text-sm text-neutral-400 tabular-nums">
                      {entry.period}
                    </span>
                    <Badge size="sm" className="sm:hidden">
                      {entry.period}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                      {entry.degree}
                    </h3>
                    <p className="text-sm font-medium text-rose-600">{entry.institution}</p>
                    <p className="max-w-2xl text-sm leading-relaxed text-neutral-500 text-pretty">
                      {entry.detail}
                    </p>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Certifications"
            title="Certificates earned"
            description="Completed programmes and course certificates."
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <li key={certification.id}>
                <Card interactive className="flex h-full flex-col gap-3 p-6">
                  <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                    <Icon name="award" size={18} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                      {certification.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{certification.issuer}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-mono text-xs text-neutral-400 tabular-nums">
                      {certification.year}
                    </span>
                    {certification.credentialId ? (
                      <span className="font-mono text-[11px] text-neutral-300">
                        {certification.credentialId}
                      </span>
                    ) : null}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Contact"
                title="Get in touch"
                description={contact.availability}
              />

              <dl className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="mail" size={16} className="mt-0.5 text-neutral-400" />
                  <div>
                    <dt className="text-xs tracking-wider text-neutral-400 uppercase">Email</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm break-all text-neutral-900 underline-offset-4 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="phone" size={16} className="mt-0.5 text-neutral-400" />
                  <div>
                    <dt className="text-xs tracking-wider text-neutral-400 uppercase">Phone</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        className="text-sm text-neutral-900 underline-offset-4 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="map-pin" size={16} className="mt-0.5 text-neutral-400" />
                  <div>
                    <dt className="text-xs tracking-wider text-neutral-400 uppercase">Location</dt>
                    <dd className="mt-0.5 text-sm text-neutral-900">{contact.location}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <Card className="flex flex-col gap-6 p-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                  Find me online
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  The fastest way to say hello is email. These are the rest.
                </p>
              </div>

              <SocialLinks showLabels size="sm" className="-ml-3.5" />
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}