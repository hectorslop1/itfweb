import { defineField, defineType } from 'sanity';
import { eventCategoryOptions, languageOptions, regionOptions } from './shared';

export default defineType({
  name: 'event',
  title: 'Event',
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
    defineField({ name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required() }),
    defineField({ name: 'startTime', title: 'Start Time', type: 'string' }),
    defineField({ name: 'endTime', title: 'End Time', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      options: { list: regionOptions },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: eventCategoryOptions },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: { list: languageOptions },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'registrationUrl', title: 'Registration URL', type: 'url' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Past', value: 'past' },
        ],
      },
      initialValue: 'draft',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'coverImage',
    },
  },
});
