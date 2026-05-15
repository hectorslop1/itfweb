export type NewsItem = {
  title: string;
  description: string;
  date: string;
};

export const featuredNews: NewsItem[] = [
  {
    title: 'Cafecito con Pan',
    description:
      'El Consulado de México en San Bernardino y TODEC Legal Center compartieron información valiosa en un espacio de apoyo, comunidad y empoderamiento para las familias.',
    date: 'Mayo 2025',
  },
  {
    title: 'IME Beca 2024',
    description:
      'El apoyo del Consulado Mexicano en San Bernardino mediante la IME BECA fortalece el trabajo comunitario de la fundación.',
    date: '2024',
  },
  {
    title: 'PRSH 2024',
    description: 'Una actualización de agradecimiento a los donadores que hacen posible seguir acompañando a las familias.',
    date: 'April 11, 2024',
  },
  {
    title: '¿Cómo comenzó Ives Torres Foundation?',
    description:
      'Una historia sobre el origen y la motivación detrás del trabajo de la fundación.',
    date: 'Historia',
  },
];
