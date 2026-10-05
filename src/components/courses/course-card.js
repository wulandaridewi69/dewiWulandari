import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { SmartImage } from '@/components/ui/smart-image';

export function CourseCard({ course, expanded = false }) {
  const { id, provider, title, year, logo, summary, topics, projects, capstone, website } =
    course;

  return (
    <Card as="article" className="flex flex-col overflow-hidden">
      <div className="flex items-start gap-5 p-6">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-neutral-50 ring-1 ring-neutral-200 ring-inset">
          <SmartImage
            src={logo}
            alt={`${provider} logo`}
            title={provider}
            fill={false}
            sizes="56px"
            className="size-9 object-contain"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight text-neutral-900">{title}</h3>
            <Badge size="sm">{year}</Badge>
          </div>
          <p className="text-sm text-neutral-500">{provider}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-6 px-6 pb-6">
        <p className="text-sm leading-relaxed text-neutral-600 text-pretty">{summary}</p>

        {expanded ? (
          <div className="flex flex-col gap-5">
            {topics.map((topic) => (
              <div key={topic.title} className="flex flex-col gap-2">
                <h4 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
                  {topic.title}
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {topic.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="flex flex-wrap gap-1.5">
            {topics
              .flatMap((topic) => topic.items)
              .slice(0, 6)
              .map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600"
                >
                  {item}
                </li>
              ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-4 border-t border-neutral-100 pt-5">
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-neutral-900 uppercase">
              Projects
            </h4>
            <ul className="mt-2 flex flex-col gap-1.5">
              {projects.map((project) => (
                <li
                  key={project}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <Icon name="check" size={13} strokeWidth={2.5} className="mt-1 text-rose-500" />
                  {project}
                </li>
              ))}
            </ul>
          </div>

          {capstone ? (
            <p className="rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-600 ring-1 ring-neutral-200 ring-inset">
              <span className="font-medium text-neutral-900">Capstone — </span>
              {capstone}
            </p>
          ) : null}

          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer noopener"
              id={`${id}-website`}
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-neutral-900"
            >
              Visit programme
              <Icon
                name="arrow-up-right"
                size={14}
                className="text-neutral-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-rose-600"
              />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}