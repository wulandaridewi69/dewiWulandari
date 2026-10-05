/**
 * Proficiency is a self-assessment used only for display.
 * Values are clamped to 0-100 by the <SkillMeter> component.
 */
export const skills = [
  { name: 'HTML5', level: 70, category: 'Core' },
  { name: 'CSS3', level: 70, category: 'Core' },
  { name: 'JavaScript (ES6+)', level: 40, category: 'Core' },
  { name: 'React', level: 50, category: 'Framework' },
  { name: 'Next.js', level: 50, category: 'Framework' },
  { name: 'Tailwind CSS', level: 70, category: 'Styling' },
  { name: 'Bootstrap', level: 70, category: 'Styling' },
  { name: 'Sass', level: 50, category: 'Styling' },
  { name: 'Responsive Design', level: 70, category: 'Styling' },
  { name: 'Figma', level: 50, category: 'Tooling' },
  { name: 'Git & GitHub', level: 60, category: 'Tooling' },
  { name: 'REST API', level: 60, category: 'Tooling' },
  { name: 'SEO Fundamentals', level: 60, category: 'Practice' },
  { name: 'Accessibility', level: 55, category: 'Practice' },
];

export const skillCategories = [
  'Core',
  'Framework',
  'Styling',
  'Tooling',
  'Practice',
];

export const featuredSkills = skills.slice(0, 8);