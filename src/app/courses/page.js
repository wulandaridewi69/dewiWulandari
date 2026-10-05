import { PageHeader } from '@/components/layout/page-header';
import { CourseCard } from '@/components/courses/course-card';
import { ContactCta } from '@/components/home/contact-cta';
import { courses } from '@/data/courses';
import { Container, Section } from '@/components/ui/section';

export const metadata = {
  title: 'Courses',
  description:
    'Front end engineering training at Alterra Academy and the Kominfo X Digitalent scholarship, with the full curriculum and projects.',
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Courses & training"
        description="Where I learned to build: a scholarship that gave me the fundamentals, then intensive full-time training that turned them into a craft."
      />

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} expanded />
            ))}
          </div>
        </Container>
      </Section>

      <ContactCta />
    </>
  );
}