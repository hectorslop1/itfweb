import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'logo' },
  },
});
