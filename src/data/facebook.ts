export type FacebookHighlight = {
  title: string;
  description: string;
  type: 'Photo' | 'Video' | 'Event' | 'Post';
};

export const facebookHighlights: FacebookHighlight[] = [
  {
    title: 'Community moments',
    description: 'A curated photo update from a recent family gathering.',
    type: 'Photo',
  },
  {
    title: 'Event recap',
    description: 'A short highlight showing learning, celebration, and shared support.',
    type: 'Video',
  },
];
