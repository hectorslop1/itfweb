export type EventPreview = {
  date: string;
  title: string;
  details: string;
  location: string;
};

export const upcomingEvents: EventPreview[] = [
  {
    date: 'Jun 12',
    title: 'Community Workshop',
    details: 'Bilingual family workshop with practical support and guided conversation.',
    location: 'Inland Empire',
  },
  {
    date: 'Jul 03',
    title: 'Family Resource Fair',
    details: 'A welcoming resource fair with local partners and family-friendly information.',
    location: 'Valle Central',
  },
  {
    date: 'Jul 19',
    title: 'Parent Circle',
    details: 'Small-group gathering for parents to share questions, wins, and next steps.',
    location: 'Online',
  },
];
