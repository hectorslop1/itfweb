# Tech Stack

## Goals

The stack must be:

- Low cost
- Secure
- Professional
- Easy to maintain
- Fast
- SEO-friendly
- Suitable for a nonprofit website
- Easy for the foundation to update

## Recommended Stack

### Frontend

Astro + TypeScript + Tailwind CSS.

Astro is recommended because the website is content-heavy and mostly static. It provides excellent performance and SEO while still allowing React components when needed.

### Interactive Components

Use React components only where necessary.

Examples:
- Mobile menu
- Sliders
- Interactive filters
- Animated sections
- Forms

### CMS

Sanity CMS.

Use Sanity to manage:
- Events
- News
- Resources
- Programs
- Facebook highlights
- Testimonials
- Partners
- Site settings

### Hosting

Cloudflare Pages.

Reasons:
- Low cost
- Secure
- Fast CDN
- SSL
- GitHub deployments
- Custom domain support

### Domain

Keep domain in Porkbun.

The website should use:
- ivestorresfoundation.org
- www.ivestorresfoundation.org

Other domains may redirect to the main domain.

### Email

Keep existing Titan/Hostinger email for now.

Do not modify MX, SPF, DKIM, or DMARC records unless necessary.

### Contact Forms

Recommended options:

Option A:
Formspree for simple low-cost form handling.

Option B:
Resend for more controlled transactional emails.

For v1, use the simplest reliable option.

### Spam Protection

Cloudflare Turnstile.

Use on contact forms and appointment request forms.

### Donations

Use:
- PayPal as the main donation method
- Zelle as a secondary donation method

The donation page should include clear instructions and trust-building copy.

### Facebook Highlights

Do not embed a full Facebook feed.

Use a curated section managed in the CMS:
- Image
- Title
- Description
- Facebook link

### Analytics

Use:
- Google Analytics
- Google Search Console

### Deployment Flow

- Code hosted in GitHub
- Deploy to Cloudflare Pages
- Preview URL for review
- Connect Porkbun domain after approval