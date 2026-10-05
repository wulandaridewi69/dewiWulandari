import { PageHeader } from '@/components/layout/page-header';
import { ProjectCard } from '@/components/projects/project-card';
import { ContactCta } from '@/components/home/contact-cta';
import { projects } from '@/data/projects';
import { Container, Section } from '@/components/ui/section';

export const metadata = {
  title: 'Projects',
  description:
    'Selected frontend projects — landing pages, storefronts and realtime apps built with React and Next.js.',
};

const stackFilters = ['All', ...new Set(projects.flatMap((project) => project.stack))];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I have built"
        description="Coursework, collaborative builds and self-directed side projects. Each one taught me something I still use."
      />

      <Section>
        <Container>
          <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
            {stackFilters.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200 ring-inset"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}