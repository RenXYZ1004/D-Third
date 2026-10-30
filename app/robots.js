import { siteConfig } from "../lib/site-config.js";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ...(siteConfig.siteUrl && !siteConfig.isPreviewDeployment
      ? { sitemap: `${siteConfig.siteUrl}/sitemap.xml` }
      : {}),
  };
}
