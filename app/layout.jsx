import "./globals.css";
import { siteConfig } from "../lib/site-config.js";
import NetworkStatus from "./network-status.jsx";

const organizationId = siteConfig.siteUrl ? `${siteConfig.siteUrl}/#organization` : undefined;
const personId = siteConfig.siteUrl ? `${siteConfig.siteUrl}/#person` : undefined;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...(siteConfig.siteUrl ? [{
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.name,
      alternateName: ["D’THIRD", siteConfig.personName],
      url: siteConfig.siteUrl,
      publisher: { "@id": organizationId },
    }] : []),
    {
      "@type": "Person",
      ...(personId ? { "@id": personId } : {}),
      name: siteConfig.personName,
      alternateName: "D’THIRD",
      jobTitle: "Videographer and visual storyteller",
      description: siteConfig.description,
      ...(siteConfig.siteUrl ? {
        url: siteConfig.siteUrl,
        image: `${siteConfig.siteUrl}/images/dthird-profile.webp`,
      } : {}),
      sameAs: [siteConfig.footerLinks.instagram, siteConfig.footerLinks.facebook].filter(Boolean),
      ...(organizationId ? { worksFor: { "@id": organizationId } } : {}),
    },
    {
      "@type": "Organization",
      ...(organizationId ? { "@id": organizationId } : {}),
      name: siteConfig.name,
      alternateName: "D’THIRD",
      description: siteConfig.description,
      ...(siteConfig.siteUrl ? {
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/third-logo.svg`,
      } : {}),
      ...(siteConfig.contactEmail ? {
        email: siteConfig.contactEmail,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "project inquiries",
          email: siteConfig.contactEmail,
        },
      } : {}),
    },
  ],
};

export const metadata = {
  ...(siteConfig.siteUrl ? { metadataBase: new URL(siteConfig.siteUrl) } : {}),
  title: {
    default: "D’Third Bautista Captured | D’Third Bautista Videographer",
    template: "%s | D’Third Bautista Captured",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.personName,
  publisher: siteConfig.name,
  category: "video production",
  keywords: ["D’Third Bautista", "D’Third Bautista Captured", "D’THIRD", "videographer", "wedding videographer", "wedding film", "visual storyteller"],
  ...(siteConfig.siteUrl ? { alternates: { canonical: siteConfig.siteUrl } } : {}),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "D’Third Bautista Captured | Videographer & Visual Storyteller",
    description: siteConfig.description,
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
    ...(siteConfig.siteUrl ? { images: [{
      url: `${siteConfig.siteUrl}/images/dthird-social.webp`,
      width: 1200,
      height: 630,
      alt: "D’Third Bautista, videographer behind D’Third Bautista Captured",
    }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "D’Third Bautista Captured | Videographer & Visual Storyteller",
    description: siteConfig.description,
    ...(siteConfig.siteUrl ? { images: [`${siteConfig.siteUrl}/images/dthird-social.webp`] } : {}),
  },
  robots: {
    index: !siteConfig.isPreviewDeployment,
    follow: !siteConfig.isPreviewDeployment,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#171715",
};

export default function RootLayout({ children }) {
  const safeStructuredData = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="en">
      <body>
        {children}
        <NetworkStatus />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStructuredData }}
        />
      </body>
    </html>
  );
}
