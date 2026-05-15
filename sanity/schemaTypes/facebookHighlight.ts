import { defineField, defineType } from 'sanity';
import { facebookTypeOptions } from './shared';

export default defineType({
  name: 'facebookHighlight',
  title: 'Facebook Highlight',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: facebookTypeOptions },
    }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', media: 'image' },
  },
});
