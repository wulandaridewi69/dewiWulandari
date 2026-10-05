import Link from 'next/link';
import { copyrightYear, footerNavItems } from '@/data/site';
import { profile } from '@/data/profile';
import { Container } from '@/components/ui/section';
import { Icon } from '@/components/ui/icon';
import { LogoMark } from '@/components/ui/logo';
import { SocialLinks } from '@/components/ui/social-links';

const contactLinks = [
  {
    id: 'email',
    label: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: 'mail',
  },
  {
    id: 'phone',
    label: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s/g, '')}`,
    icon: 'phone',
  },
  { id: 'location', label: profile.contact.location, href: null, icon: 'map-pin' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container size="wide" className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <LogoMark size={32} />
              <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
                {profile.fullName}
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 text-pretty">
              {profile.tagline}
            </p>

            <SocialLinks />
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
              Pages
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
              Get in touch
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {contactLinks.map((link) => {
                const label = (
                  <>
                    <Icon name={link.icon} size={14} className="text-neutral-400" />
                    <span className="text-sm break-all text-neutral-500 transition-colors group-hover:text-neutral-900">
                      {link.label}
                    </span>
                  </>
                );

                return (
                  <li key={link.id}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2.5 transition-colors hover:text-neutral-900"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2.5">{label}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-400">
            &copy; {copyrightYear} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">Built with Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}