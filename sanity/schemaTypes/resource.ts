import { defineField, defineType } from 'sanity';
import { languageOptions, resourceCategoryOptions, resourceTypeOptions } from './shared';

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: resourceCategoryOptions },
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: { list: languageOptions },
    }),
    defineField({
      name: 'resourceType',
      title: 'Resource Type',
      type: 'string',
      options: { list: resourceTypeOptions },
    }),
    defineField({ name: 'file', title: 'File', type: 'file' }),
    defineField({ name: 'externalUrl', title: 'External URL', type: 'url' }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'resourceType', media: 'coverImage' },
  },
});
