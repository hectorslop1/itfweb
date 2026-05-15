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
      'Sesiones de acompanamiento para padres y cuidadores que buscan herramientas para abogar por sus seres queridos con confianza.',
    audience: 'Padres, madres y cuidadores que necesitan orientacion practica',
    label: 'Programa',
  },
  {
    title: 'Talleres educativos',
    description:
      'Talleres sobre educacion especial, tecnologia, inclusion, autodefensa y servicios disponibles en la comunidad.',
    audience: 'Familias, cuidadores y aliados comunitarios',
    label: 'Taller',
  },
  {
    title: 'Eventos comunitarios',
    description:
      'Encuentros inclusivos que fortalecen la comunidad, celebran logros y acercan recursos a las familias.',
    audience: 'Familias que buscan pertenencia, apoyo y conexion',
    label: 'Comunidad',
  },
];
