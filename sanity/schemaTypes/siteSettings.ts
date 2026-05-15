import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
    defineField({ name: 'serviceArea', title: 'Service Area', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'paypalDonationUrl', title: 'PayPal Donation URL', type: 'url' }),
    defineField({ name: 'zelleName', title: 'Zelle Name', type: 'string' }),
    defineField({ name: 'zelleEmailOrPhone', title: 'Zelle Email or Phone', type: 'string' }),
    defineField({ name: 'zelleInstructions', title: 'Zelle Instructions', type: 'text', rows: 4 }),
    defineField({ name: 'footerText', title: 'Footer Text', type: 'text', rows: 4 }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'serviceArea' },
  },
});
