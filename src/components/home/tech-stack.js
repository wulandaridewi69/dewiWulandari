import { skills, skillCategories } from '@/data/skills';
import { Container, Section, SectionHeading } from '@/components/ui/section';
import { SkillMeter } from '@/components/ui/skill-meter';

export function TechStack() {
  return (
    <Section id="stack">
      <Container>
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for"
          description="A working toolkit built through coursework, side projects and shipping real features. Percentages are a self-assessment of where I am today."
        />

        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillMeter
              key={skill.name}
              name={skill.name}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-neutral-400">
          Currently focused on {skillCategories.slice(1, 3).join(' and ')} — with{' '}
          {skillCategories.at(-1).toLowerCase()} as the ongoing investment.
        </p>
      </Container>
    </Section>
  );
}