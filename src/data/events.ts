export type EventPreview = {
  date: string;
  title: string;
  details: string;
  location: string;
  time?: string;
};

export const upcomingEvents: EventPreview[] = [
  {
    date: 'Jun 12',
    title: 'Taller para familias',
    details: 'Conversacion bilingue sobre educacion especial, derechos y pasos concretos para buscar apoyo.',
    location: 'Inland Empire',
    time: '6:00 PM',
  },
  {
    date: 'Jul 03',
    title: 'Feria de recursos familiares',
    details: 'Encuentro con organizaciones locales, materiales utiles y orientacion para familias en su propio idioma.',
    location: 'Valle Central',
    time: '10:00 AM',
  },
  {
    date: 'Jul 19',
    title: 'Circulo de apoyo para padres',
    details: 'Espacio cercano para compartir preguntas, experiencias y estrategias con otras familias.',
    location: 'Online',
    time: '7:00 PM',
  },
];
