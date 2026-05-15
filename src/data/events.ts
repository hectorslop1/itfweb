export type EventPreview = {
  date: string;
  title: string;
  details: string;
  region: string;
  time?: string;
  ctaLabel: string;
};

export const upcomingEvents: EventPreview[] = [
  {
    date: 'May 09',
    title: 'Cafecito con Pan',
    details:
      'Un espacio de apoyo, comunidad y empoderamiento para las familias, con información compartida junto al Consulado de México en San Bernardino y TODEC Legal Center.',
    region: 'Inland Empire',
    ctaLabel: 'Ver detalles',
  },
  {
    date: 'Apr 29',
    title: 'Cafecito con Pan en el corazón del Valle Central',
    details:
      'Familias con un ser querido con discapacidad se reunieron para compartir, aprender y conectar en un espacio seguro y acogedor.',
    region: 'Valle Central',
    time: 'Comunidad',
    ctaLabel: 'Registrarme',
  },
  {
    date: 'Jun 07',
    title: 'SDP Providers & Micro-enterprise Resource Expo',
    details:
      'Un evento para fortalecer conexiones entre familias y proveedores de servicios, construyendo puentes de colaboración para la comunidad.',
    region: 'Comunidad ITF',
    ctaLabel: 'Ver detalles',
  },
];
