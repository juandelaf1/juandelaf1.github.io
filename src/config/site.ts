export const SITE = {
  title: 'Juan de la Fuente — Analytics Engineer',
  description:
    'I build production-ready data products. End to end. From raw data to APIs and interactive systems.',
  tagline: 'Builds data products. End to end.',
  url: 'https://juandelaf1.github.io',
  author: 'Juan de la Fuente Larrocca',
  locale: 'en-US',
  links: {
    github: 'https://github.com/juandelaf1',
    linkedin: 'https://linkedin.com/in/juandelafuentelarrocca',
    email: 'mailto:juandelafuentelarrocca@gmail.com',
  },
} as const;

export const NAVIGATION = [
  { label: 'Projects', href: '/' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Building', href: '/building' },
  { label: 'About', href: '/about' },
] as const;
