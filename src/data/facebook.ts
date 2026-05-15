export type FacebookHighlight = {
  title: string;
  description: string;
  type: 'Photo' | 'Video' | 'Event' | 'Post';
  image: string;
};

export const facebookHighlights: FacebookHighlight[] = [
  {
    title: 'Mujeres que inspiran',
    description:
      'Una celebración del Día de las Madres en Inland Empire que reunió apoyo, comunidad y reconocimiento para las familias.',
    type: 'Photo',
    image: '/images/events/event-cafecito.jpg',
  },
  {
    title: 'Taller de herramientas de comunicación',
    description:
      'Un recordatorio de cómo pequeños cambios en la comunicación pueden transformar la manera en que las familias aprenden y se acompañan.',
    type: 'Post',
    image: '/images/community/community-cabe.jpeg',
  },
];
