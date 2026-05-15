export const eventPreviewQuery = `*[_type == "event" && status == "published"] | order(date asc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  date,
  startTime,
  endTime,
  location,
  region,
  category,
  language,
  description,
  coverImage,
  registrationUrl,
  facebookUrl,
  isFeatured,
  status
}`;

export const newsPreviewQuery = `*[_type == "newsPost" && published == true] | order(date desc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  date,
  category,
  excerpt,
  coverImage,
  facebookUrl,
  isFeatured,
  published
}`;

export const resourcePreviewQuery = `*[_type == "resource" && isFeatured == true] | order(title asc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  language,
  resourceType,
  externalUrl,
  coverImage,
  isFeatured
}`;

export const programPreviewQuery = `*[_type == "program" && isFeatured == true] | order(title asc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  whoItHelps,
  benefits,
  image,
  ctaLabel,
  ctaUrl,
  isFeatured
}`;

export const facebookHighlightQuery = `*[_type == "facebookHighlight" && isFeatured == true] | order(_updatedAt desc)[0...4]{
  _id,
  title,
  description,
  image,
  facebookUrl,
  type,
  isFeatured
}`;

export const testimonialQuery = `*[_type == "testimonial" && isFeatured == true] | order(_updatedAt desc)[0...4]{
  _id,
  name,
  role,
  quote,
  image,
  language,
  isFeatured
}`;

export const partnerQuery = `*[_type == "partner" && isFeatured == true] | order(name asc)[0...8]{
  _id,
  name,
  logo,
  website,
  category,
  isFeatured
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  phone,
  email,
  address,
  serviceArea,
  facebookUrl,
  instagramUrl,
  youtubeUrl,
  linkedinUrl,
  paypalDonationUrl,
  zelleName,
  zelleEmailOrPhone,
  zelleInstructions,
  footerText
}`;

