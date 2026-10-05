import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { SmartImage } from '@/components/ui/smart-image';

const statusVariant = {
  Completed: 'success',
  'In progress': 'warning',
  Archived: 'default',
};

/**
 * Project card. When `href` is given the whole card becomes clickable via a
 * stretched link on the title, which keeps a single, descriptive link for
 * screen readers instead of duplicating the target.
 */
export function ProjectCard({ project, href, className }) {
  const { slug, title, summary, year, stack, status, cover } = project;

  const titleNode = (
    <h3 className="text-base font-semibold tracking-tight text-neutral-900">
      {href ? (
        <Link
          href={href}
          aria-describedby={`${slug}-summary`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </h3>
  );

  return (
    <Card
      as="article"
      interactive
      className={`group flex flex-col overflow-hidden ${className ?? ''}`}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
        <SmartImage
          src={cover}
          alt={`${title} preview`}
          title={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          imageClassName="transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute top-3 left-3">
          <Badge variant={statusVariant[status] ?? 'default'}>{status}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-4">
          {titleNode}
          <span className="font-mono text-xs whitespace-nowrap text-neutral-400 tabular-nums">
            {year}
          </span>
        </div>

        <p
          id={`${slug}-summary`}
          className="text-sm leading-relaxed text-neutral-500 text-pretty"
        >
          {summary}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {stack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-neutral-100 px-2 py-1 font-mono text-[11px] text-neutral-600"
            >
              {tech}
            </li>
          ))}
        </ul>

        {href ? (
          <span
            aria-hidden="true"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900"
          >
            View project
            <Icon
              name="arrow-right"
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        ) : null}
      </div>
    </Card>
  );
}