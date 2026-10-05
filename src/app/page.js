import { About } from '@/components/home/about';
import { ContactCta } from '@/components/home/contact-cta';
import { CoursesPreview } from '@/components/home/courses-preview';
import { Experience } from '@/components/home/experience';
import { Hero } from '@/components/home/hero';
import { ProjectsPreview } from '@/components/home/projects-preview';
import { Stats } from '@/components/home/stats';
import { TechStack } from '@/components/home/tech-stack';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <CoursesPreview />
      <Stats />
      <ProjectsPreview />
      <ContactCta />
    </>
  );
}