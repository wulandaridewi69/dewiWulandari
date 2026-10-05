import { Container } from '@/components/ui/section';

/** Shared hero for interior routes, keeping all subpages visually consistent. */
export function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-neutral-50">
      <div aria-hidden="true" className="grid-bg mask-fade-b absolute inset-0 -z-10 opacity-50" />

      <Container size="wide" className="py-16 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200 ring-inset">
              {eyebrow}
            </span>
          ) : null}

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-neutral-600 text-balance sm:text-lg">
              {description}
            </p>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}