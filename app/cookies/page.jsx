import LegalPage from "../legal-page.jsx";
import { siteConfig } from "../../lib/site-config.js";

const description = "D’THIRD’s cookie policy explains the site’s limited use of browser storage and third-party links.";

export const metadata = {
  title: "Cookie Policy",
  description,
  ...(siteConfig.siteUrl ? { alternates: { canonical: "/cookies" } } : {}),
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies and browser storage"
      title="Cookie policy"
      introduction="D’THIRD does not use cookies or similar browser storage to track visitors, serve ads, or measure analytics on this website."
      sections={[
        {
          title: "Cookies on this site",
          content: <p>The site does not set or read cookies for analytics, advertising, or visitor profiling, and it does not use local storage or session storage for those purposes. The inquiry form keeps what you type in your browser and only prepares an email draft when you choose to submit it; it does not store the form in a cookie.</p>,
        },
        {
          title: "Hosting and browser caching",
          content: <p>Vercel hosts this website and may process technical request data to operate and protect it. A browser may also cache site files to make repeat visits faster; browser caching is separate from a cookie used to track you. More information about the host’s data practices is available in <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">Vercel’s Privacy Notice</a>.</p>,
        },
        {
          title: "Third-party services",
          content: <p>When you choose to open an external social or messaging link, that service may use its own cookies or similar technologies. Its practices are governed by its own privacy and cookie policies.</p>,
        },
        {
          title: "Changes to this policy",
          content: <p>If the site’s use of cookies or similar technologies changes, this page will be updated to explain the change. The date above shows when it was last revised.</p>,
        },
      ]}
    />
  );
}
