import { courses } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { CourseCard } from '@/components/courses/course-card';

export function CoursesPreview() {
  return (
    <Section id="courses" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Learning"
          title="Courses & training"
          description="Two programmes that turned into real skills: a scholarship that started it, and intensive training that made it a job."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/courses" variant="secondary" icon="arrow-right">
            See the full curriculum
          </Button>
        </div>
      </Container>
    </Section>
  );
}