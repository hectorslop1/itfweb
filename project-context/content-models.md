# Content Models

The website should use a CMS so the foundation can update key content without editing code.

Recommended CMS: Sanity.

## Event

Used for upcoming and past events.

Fields:
- title: string
- slug: slug
- date: date
- startTime: string
- endTime: string
- location: string
- region: string
  - Inland Empire
  - Valle Central
  - Online
  - Other
- category: string
  - Workshop
  - Community Event
  - Resource Fair
  - Training
  - Social Event
- language: string
  - Spanish
  - English
  - Bilingual
- description: rich text
- coverImage: image
- registrationUrl: url
- facebookUrl: url
- isFeatured: boolean
- status: string
  - Draft
  - Published
  - Past

## NewsPost

Used for news, stories, announcements, and community updates.

Fields:
- title: string
- slug: slug
- date: date
- category: string
- excerpt: text
- coverImage: image
- content: rich text
- facebookUrl: url
- isFeatured: boolean
- published: boolean

## Resource

Used for family resources, PDFs, videos, guides, or external links.

Fields:
- title: string
- slug: slug
- category: string
  - Special Education
  - Regional Centers
  - Self-Advocacy
  - Technology
  - ABA
  - Reports
  - Videos
  - Guides
- description: text
- language: string
  - Spanish
  - English
  - Bilingual
- resourceType: string
  - PDF
  - Video
  - Link
  - Article
- file: file
- externalUrl: url
- coverImage: image
- isFeatured: boolean

## Program

Used for the foundation’s main programs.

Fields:
- title: string
- slug: slug
- shortDescription: text
- description: rich text
- whoItHelps: text
- benefits: array of strings
- image: image
- ctaLabel: string
- ctaUrl: url
- isFeatured: boolean

## FacebookHighlight

Used for the curated Facebook section.

Fields:
- title: string
- description: text
- image: image
- facebookUrl: url
- type: string
  - Photo
  - Video
  - Event
  - Post
- isFeatured: boolean

## Testimonial

Used for quotes from families, partners, or participants.

Fields:
- name: string
- role: string
- quote: text
- image: image
- language: string
- isFeatured: boolean

## Partner

Used for sponsors, partners, or collaborators.

Fields:
- name: string
- logo: image
- website: url
- category: string
- isFeatured: boolean

## SiteSettings

Used for global site settings.

Fields:
- phone: string
- email: string
- address: string
- serviceArea: string
- facebookUrl: url
- instagramUrl: url
- youtubeUrl: url
- linkedinUrl: url
- paypalDonationUrl: url
- zelleName: string
- zelleEmailOrPhone: string
- zelleInstructions: text
- footerText: text