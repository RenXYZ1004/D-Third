const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || (deploymentHost ? `https://${deploymentHost}` : "");

function normalizeSiteUrl(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : "";
  } catch {
    return "";
  }
}

export const siteConfig = {
  siteUrl: normalizeSiteUrl(configuredSiteUrl),
  isPreviewDeployment: process.env.VERCEL_ENV === "preview",
  name: "D’Third Bautista Captured",
  personName: "D’Third Bautista",
  description: "D’Third Bautista Captured is the videography brand of D’Third Bautista, creating thoughtful wedding films and visual stories.",
  // Use .webp assets under public/images. The cover never falls back to the portrait.
  coverImage: {
    desktop: "",
    mobile: "",
  },
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // Add profile URLs here. Unset links take visitors to the inquiry section.
  footerLinks: {
    instagram: "https://www.instagram.com/d__third/",
    facebook: "https://www.facebook.com/thirdori",
    viber: "",
    whatsapp: "",
    messenger: "https://www.facebook.com/messages/t/103434998607469",
  },
  portfolioItems: [
    {
      title: "A day in full bloom",
      category: "Wedding story",
      image: "/images/wedding/wedding-09912.webp",
      alt: "The couple sharing a quiet moment beneath a flower-covered wedding arch.",
      gallery: [
        { image: "/images/wedding/wedding-09885.webp", alt: "Wedding guests seated before the ceremony." },
        { image: "/images/wedding/wedding-09892.webp", alt: "The couple at the floral ceremony arch with their officiant." },
        { image: "/images/wedding/wedding-09894.webp", alt: "The bride and groom beneath the flower-covered arch." },
        { image: "/images/wedding/wedding-09913.webp", alt: "A close view of the couple's hands during the ring exchange." },
        { image: "/images/wedding/wedding-09931.webp", alt: "Guests seated together during the ceremony." },
        { image: "/images/wedding/wedding-09945.webp", alt: "Friends and family celebrating together." },
        { image: "/images/wedding/wedding-09947.webp", alt: "The wedding gathering beneath the garden canopy." },
        { image: "/images/wedding/wedding-09985.webp", alt: "The couple with their officiant at the ceremony arch." },
        { image: "/images/wedding/wedding-09999.webp", alt: "A portrait of the couple beneath the floral arch." },
      ],
    },
  ],
  credentials: [],
};
