import "./globals.css";
import { siteConfig } from "../lib/site-config.js";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  ...(siteConfig.siteUrl ? {
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/third-logo.svg`,
  } : {}),
  ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}),
};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl || "http://localhost:3000"),
  title: {
    default: "D’THIRD — Every frame tells a story",
    template: "%s | D’THIRD",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "video production",
  keywords: ["D’THIRD", "videographer", "visual storyteller", "wedding film", "independent filmmaker"],
  ...(siteConfig.siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "D’THIRD — Every frame tells a story",
    description: siteConfig.description,
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
    images: [{
      url: "/images/dthird-social.webp",
      width: 1200,
      height: 630,
      alt: "D’THIRD independent filmmaker and visual storyteller",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D’THIRD — Every frame tells a story",
    description: siteConfig.description,
    images: ["/images/dthird-social.webp"],
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
  const safeOrganizationSchema = JSON.stringify(organizationSchema).replace(/</g, "\\u003c");

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeOrganizationSchema }}
        />
      </body>
    </html>
  );
}
