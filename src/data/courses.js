export const courses = [
  {
    id: 'alterra-academy',
    provider: 'Alterra Academy',
    title: 'Front End Engineer',
    year: '2022',
    logo: '/assets/alterra.png',
    summary:
      'Intensive three-month Front End Engineering training covering the modern web platform from fundamentals through deployment.',
    topics: [
      {
        title: 'Web Fundamentals',
        items: ['HTML5', 'CSS3', 'Semantic markup', 'Browser rendering'],
      },
      {
        title: 'Programming',
        items: ['JavaScript ES6+', 'Array methods', 'Async / await', 'DOM APIs'],
      },
      {
        title: 'Framework',
        items: ['React.js', 'React Router', 'State management', 'Component patterns'],
      },
      {
        title: 'Tooling & Delivery',
        items: ['Git & GitHub', 'Responsive design', 'Web APIs', 'Deployment', 'Security basics'],
      },
    ],
    projects: [
      'Landing Page Alterra',
      'Seebooks E-commerce',
      'Go Meet App',
      'To-Do List',
    ],
    capstone: 'MN Room — built with backend and QA collaboration',
    website: 'https://alterraacademy.com/',
  },
  {
    id: 'digitalent-scholarship',
    provider: 'Kominfo X Digitalent',
    title: 'Digitalent Scholarship',
    year: '2021',
    logo: '/assets/progate.png',
    summary:
      'Scholarship programme covering web fundamentals and modern layout techniques for aspiring Indonesian developers.',
    topics: [
      {
        title: 'Structure & Styling',
        items: ['HTML5 structure', 'CSS3', 'Text styling', 'Box model'],
      },
      {
        title: 'Layout',
        items: ['Flexbox', 'Grid layout', 'Advanced selectors', 'Responsive units'],
      },
    ],
    projects: ['AUTOROOM Landing Page'],
    capstone: null,
    website: 'https://digitalent.komdigi.go.id/',
  },
];