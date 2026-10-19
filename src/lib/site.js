// All business facts live here. Edit this file to change hours, phone,
// address or links; the page and the Google (schema.org) data both read it.

export const business = {
  name: 'Puritas Nursery & Garden Center',
  shortName: 'Puritas Nursery',
  founded: 1925,
  owner: 'Dale Heyink',
  phone: '216-267-5350',
  phoneE164: '+12162675350',
  email: 'dale@puritasnursery.com',
  street: '19201 Puritas Ave',
  city: 'Cleveland',
  region: 'OH',
  zip: '44135',
  neighborhood: 'West Park',
  timeZone: 'America/New_York',
  // Change to the custom domain once it points at GitHub Pages.
  siteUrl: 'https://puritasnursery.com/',
  // Leave empty to hide. Add the real profile URLs if they exist.
  social: {
    facebook: '',
    instagram: ''
  },
  // Formspree (or similar) endpoint, e.g. https://formspree.io/f/abcdwxyz.
  // While empty, the contact form opens the visitor's email app instead.
  formEndpoint: ''
};

// Index 0 = Sunday. Times are 24h "HH:MM"; null = closed.
// TODO: confirm with Dale. These are the "Summer Hours" from the old site.
export const hours = [
  { day: 'Sunday', open: '09:00', close: '18:00' },
  { day: 'Monday', open: '09:00', close: '19:00' },
  { day: 'Tuesday', open: '09:00', close: '19:00' },
  { day: 'Wednesday', open: '09:00', close: '19:00' },
  { day: 'Thursday', open: '09:00', close: '19:00' },
  { day: 'Friday', open: '09:00', close: '19:00' },
  { day: 'Saturday', open: '09:00', close: '18:00' }
];

// One line, changed each season.
export const seasonal = {
  icon: 'train',
  text: 'The Holiday Train Display returns this season.',
  link: { href: '#events', label: 'See events' }
};

export const heroBadge = {
  title: 'Fall mums are in',
  text: 'Pansies, mums & fall planters'
};

export const fullAddress = `${business.street}, ${business.city}, ${business.region} ${business.zip}`;
export const telHref = `tel:${business.phoneE164}`;
export const mailHref = `mailto:${business.email}`;
const q = encodeURIComponent(`${business.name}, ${fullAddress}`);
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${q}&output=embed`;

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GardenStore',
    name: business.name,
    url: business.siteUrl,
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: String(business.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.zip,
      addressCountry: 'US'
    },
    openingHoursSpecification: hours
      .map((h, i) => ({ ...h, i }))
      .filter((h) => h.open)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${dayNames[h.i]}`,
        opens: h.open,
        closes: h.close
      })),
    sameAs: Object.values(business.social).filter(Boolean)
  };
}
