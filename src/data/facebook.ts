export type FacebookHighlight = {
  title: string;
  description: string;
  type: 'Photo' | 'Video' | 'Event' | 'Post';
};

export const facebookHighlights: FacebookHighlight[] = [
  {
    title: 'Mujeres líderes',
    description:
      'Una celebración del Día de las Madres en Inland Empire que reunió apoyo, comunidad y reconocimiento para las familias.',
    type: 'Photo',
  },
  {
    title: 'Taller de herramientas de comunicación',
    description:
      'Un recordatorio de cómo pequeños cambios en la comunicación pueden transformar la manera en que las familias aprenden y se acompañan.',
    type: 'Post',
  },
];
