export type FacebookHighlight = {
  title: string;
  description: string;
  type: 'Photo' | 'Video' | 'Event' | 'Post';
};

export const facebookHighlights: FacebookHighlight[] = [
  {
    title: 'Momentos de comunidad',
    description: 'Una mirada a los encuentros donde las familias aprenden, comparten y se sienten acompanadas.',
    type: 'Photo',
  },
  {
    title: 'Resumen de evento',
    description: 'Historias cortas que muestran aprendizaje, alegria y apoyo comunitario en accion.',
    type: 'Video',
  },
];
