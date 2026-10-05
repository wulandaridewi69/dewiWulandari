import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/section';
import { navItems } from '@/data/site';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <Container size="sm" className="flex flex-col items-center py-32 text-center sm:py-40">
      <p className="font-mono text-sm text-neutral-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        This page does not exist
      </h1>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-neutral-500">
        The link may be outdated, or the page may have moved. Here is where everything lives
        now.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 hover:text-neutral-900"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Button href="/" className="mt-10" icon="arrow-left" variant="primary">
        Back to home
      </Button>
    </Container>
  );
}