import Link from 'next/link';
import { navItems } from '@/data/site';
import { profile } from '@/data/profile';
import { Container } from '@/components/ui/section';
import { LogoMark } from '@/components/ui/logo';
import { Navigation } from './navigation';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
      <Container size="wide" className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${profile.fullName} — home`}
          className="group flex items-center gap-2.5 rounded-full outline-offset-4"
        >
          <LogoMark size={32} />
          <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
            {profile.nickname}
            <span className="text-neutral-300 transition-colors group-hover:text-rose-500">.</span>
          </span>
        </Link>

        <Navigation items={navItems} avatar={profile.avatar} alt={profile.shortName} />
      </Container>
    </header>
  );
}