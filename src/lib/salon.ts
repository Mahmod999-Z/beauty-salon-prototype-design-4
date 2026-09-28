export const salon = {
  name: "Kapsalon Lumen",
  street: "Voorbeeldstraat 24",
  postalCode: "5678 CD",
  city: "Voorbeeldstad",
  phoneDisplay: "06 12345678",
  phoneTel: "+31612345678",
  owner: "Nora",
  since: "2014",
  credential: "Gediplomeerd kapper met ruim tien jaar ervaring",
  positioning: "voor een frisse, persoonlijke knipbeurt",
  reviews: 312,
  walkIn: "Knippen zonder afspraak mogelijk (voorbeeldtekst)",
} as const;

export const reviewStats = [
  { platform: "Google", rating: 4.8, count: 312 },
  { platform: "Salonwijzer", rating: 4.7, count: 96 },
] as const;

// Illustrative example reviews for this design prototype — not real
// quotes from real customers, and not attributed to any real platform.
export const featuredReviews = [
  {
    quote: "Eindelijk een knipbeurt die precies klopt",
    author: "Voorbeeld review",
    source: "Illustratief voorbeeld",
  },
  {
    quote: "Rustige salon, vriendelijk team, mooi resultaat",
    author: "Voorbeeld review",
    source: "Illustratief voorbeeld",
  },
] as const;

export const hours = [
  { days: "Ma", time: "gesloten", weekdays: [1] },
  { days: "Di–Wo", time: "09:30–18:00", weekdays: [2, 3], open: "09:30", close: "18:00" },
  { days: "Do", time: "09:30–20:00", weekdays: [4], open: "09:30", close: "20:00" },
  { days: "Vr–Za", time: "09:30–18:00", weekdays: [5, 6], open: "09:30", close: "18:00" },
] as const;

export const prices = {
  dames: [
    { name: "Knippen kort haar", price: "€32,00" },
    { name: "Knippen lang haar", price: "€36,00" },
    { name: "Wassen, knippen, drogen | K.H.", price: "€39,00" },
    { name: "Wassen, knippen, drogen | L.H.", price: "€42,00" },
    { name: "Wassen, knippen, föhnen – v.a. bij K.H.", price: "€68,00" },
    { name: "Wassen, watergolven, föhnen – v.a.", price: "€36,00" },
    { name: "Epileren hele gezicht (garen / pincet)", price: "€27,00" },
    { name: "Epileren wenkbrauwen (garen / pincet)", price: "€17,00" },
    { name: "Verven incl. wassen en drogen v.a.", price: "€88,00" },
    { name: "Coupe soleil incl. wassen en drogen", price: "€105,00" },
    { name: "Verf uitgroeibehandeling", price: "€52,00" },
    { name: "Ontkleuring v.a.", price: "€48,00" },
    { name: "Balayage / Ombre v.a.", price: "€125,00" },
    { name: "Kleurtoner v.a.", price: "€48,00" },
  ],
  heren: [
    { name: "Model knippen", price: "€29,00" },
    { name: "Model knippen / Baard scheren", price: "€42,00" },
    { name: "Model knippen t/m 10 jaar", price: "€24,00" },
    { name: "Wassen, knippen en drogen", price: "€31,00" },
    { name: "Baard/pony knippen", price: "€14,00" },
    { name: "Baard scheren / overloop", price: "€14,00" },
  ],
} as const;

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday"],
    opens: "09:30",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Thursday",
    opens: "09:30",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday", "Saturday"],
    opens: "09:30",
    closes: "18:00",
  },
];

export const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "LocalBusiness"],
  name: salon.name,
  telephone: salon.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: salon.street,
    postalCode: salon.postalCode,
    addressLocality: salon.city,
    addressCountry: "NL",
  },
  openingHoursSpecification,
};
