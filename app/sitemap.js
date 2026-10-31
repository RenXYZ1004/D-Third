import { siteConfig } from "../lib/site-config.js";

export default function sitemap() {
  if (!siteConfig.siteUrl || siteConfig.isPreviewDeployment) return [];

  return [
    { url: siteConfig.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.siteUrl}/credentials`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.siteUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.siteUrl}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
