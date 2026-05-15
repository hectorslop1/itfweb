export type Program = {
  title: string;
  description: string;
  audience: string;
  label: string;
  image: string;
};

export const featuredPrograms: Program[] = [
  {
    title: 'Padres con Poder',
    description:
      'Somos padres apoyando a padres. We are parents supporting parents.',
    audience: 'Acompañamiento entre familias y defensa informada',
    label: 'Programa',
    image: '/images/programs/programs-community.jpg',
  },
  {
    title: 'Educación',
    description:
      'Recursos y capacitación para educación especial, herramientas de autoabogacía y acceso a servicios.',
    audience: 'Familias, cuidadores y personas con discapacidad',
    label: 'Recursos',
    image: '/images/donate/donate-support.jpg',
  },
  {
    title: 'Valle Central',
    description:
      'Presencia comunitaria para compartir cafecitos, talleres, eventos y recursos con familias del Valle Central.',
    audience: 'Familias que buscan apoyo cercano en su región',
    label: 'Región',
    image: '/images/community/community-cabe.jpeg',
  },
];
