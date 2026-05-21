export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
] as const;

export const heroBadges = [
  { label: 'React', accent: true },
  { label: 'Node.js', accent: true },
  { label: 'TypeScript', accent: true },
  { label: 'REST APIs', accent: false },
  { label: 'PostgreSQL', accent: false },
  { label: 'AWS', accent: false },
  { label: 'Microfrontend', accent: false },
  { label: 'FinTech', accent: false },
] as const;

export const aboutStats = [
  { number: '3+', label: 'Anos de experiência' },
  { number: 'Full Stack', label: 'Front e back-end' },
  { number: 'Pix', label: 'Módulo e microfrontend' },
  { number: 'AWS', label: 'Cloud & DevOps' },
] as const;

export const socialLinks = {
  github: 'https://github.com/Ragazzi147',
  linkedin: 'https://www.linkedin.com/in/lucas-ragazzi-246520208',
  email: 'mailto:lucasax147@gmail.com',
  whatsapp: 'https://wa.me/5519994675000',
} as const;
