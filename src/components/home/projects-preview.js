import { featuredProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { ProjectCard } from '@/components/projects/project-card';

export function ProjectsPreview() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="A few builds that show how I think about structure, state and the last 10% of polish."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="secondary" icon="arrow-right">
            See all projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}