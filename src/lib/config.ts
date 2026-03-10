export const siteConfig = {
  name: 'Arief Daffa Abdullah',
  title: 'Arief Daffa — Web Developer',
  description:
    'Web Developer specializing in building captivating and user-friendly web experiences. Translating design concepts into seamless user interfaces.',
  url: 'https://ariefdaffa.dev',
  ogImage: '/og-default.png',
  author: 'Arief Daffa',
  email: 'hello@ariefdaffa.dev',
  links: {
    github: 'https://github.com/AriefDaffa',
    linkedin: 'https://linkedin.com/in/ariefdaffa',
    twitter: 'https://twitter.com/ariefdaffa',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
