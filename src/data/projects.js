/**
 * Mockup project data.
 * An empty `cover` falls back to a generated gradient cover, so the grid never
 * renders a broken image.
 */
export const projects = [
  {
    slug: 'mn-room',
    title: 'MN Room',
    summary: 'Realtime meeting rooms with screen sharing and live captions.',
    description:
      'A collaboration app for small teams: create a room, share a link, and join over WebRTC. The frontend handles presence, connection state and a caption panel that stays readable at every viewport size.',
    year: '2024',
    role: 'Frontend Engineer',
    status: 'Completed',
    cover: '/assets/gloding.png',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'WebRTC'],
    links: [],
    featured: true,
  },
  {
    slug: 'autoroom-landing-page',
    title: 'AUTOROOM Landing Page',
    summary: 'Marketing page for a co-working space booking product.',
    description:
      'Built as part of the Digitalent programme. A single responsive landing page: hero, amenities grid, pricing table and a booking form, all from scratch with semantic HTML and no UI framework.',
    year: '2022',
    role: 'Solo build',
    status: 'Completed',
    cover: '/assets/capadokia.png',
    stack: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    links: [],
    featured: true,
  },
  {
    slug: 'seebooks-ecommerce',
    title: 'Seebooks',
    summary: 'Online bookstore front end with cart and checkout flow.',
    description:
      'A responsive storefront built during the Alterra Academy programme. Product listing, filtering, a persistent cart and a multi-step checkout, all covered by shared components.',
    year: '2023',
    role: 'Frontend Engineer',
    status: 'Completed',
    cover: '/assets/ub.png',
    stack: ['React', 'Context API', 'CSS Modules'],
    links: [],
    featured: true,
  },
  {
    slug: 'go-meet-app',
    title: 'Go Meet',
    summary: 'Lightweight video meeting client for small teams.',
    description:
      'A focused take on the meeting problem: one screen, no chrome. Camera and microphone controls, a participant rail, and a connection banner that explains what went wrong.',
    year: '2023',
    role: 'Frontend Engineer',
    status: 'In progress',
    cover: '/assets/rusia.jpg',
    stack: ['Next.js', 'JavaScript', 'WebRTC'],
    links: [],
    featured: false,
  },
  {
    slug: 'to-do-list',
    title: 'To-Do List',
    summary: 'Keyboard-first task list with offline persistence.',
    description:
      'A small app built to practise state management properly: optimistic updates, undo, and local storage so the list survives a refresh without a backend.',
    year: '2022',
    role: 'Solo build',
    status: 'Completed',
    cover: '',
    stack: ['JavaScript', 'Local Storage'],
    links: [],
    featured: false,
  },
  {
    slug: 'alterra-landing-page',
    title: 'Alterra Landing Page',
    summary: 'Programme marketing page for Alterra Academy.',
    description:
      'The first real project of the Front End Engineering training: hero, curriculum overview, mentor profiles and an enquiry form — responsive from 320px up.',
    year: '2022',
    role: 'Solo build',
    status: 'Completed',
    cover: '',
    stack: ['HTML5', 'CSS3', 'Bootstrap'],
    links: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);