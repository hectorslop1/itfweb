export type Program = {
  title: string;
  description: string;
  audience: string;
  label: string;
};

export const featuredPrograms: Program[] = [
  {
    title: 'Padres con Poder',
    description:
      'Family learning sessions focused on advocacy, confidence, and navigating systems with support.',
    audience: 'Families seeking practical guidance',
    label: 'Program',
  },
  {
    title: 'Talleres educativos',
    description:
      'Practical workshops about special education, technology, self-advocacy, and local services.',
    audience: 'Parents, caregivers, and allies',
    label: 'Workshop',
  },
  {
    title: 'Eventos comunitarios',
    description:
      'Inclusive gatherings that bring families together through shared learning and celebration.',
    audience: 'Families building connection',
    label: 'Community',
  },
];
