import LegalPage from "../legal-page.jsx";
import { siteConfig } from "../../lib/site-config.js";

const description = "Terms for using the D'THIRD videography and visual storytelling website.";

export const metadata = {
  title: "Terms of Service",
  description,
  ...(siteConfig.siteUrl ? { alternates: { canonical: "/terms" } } : {}),
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="A few clear terms"
      title="Terms of service"
      introduction="These terms cover your use of the D’THIRD website. By browsing the site, you agree to use it lawfully and respect the work shown here."
      sections={[
        {
          title: "Using this website",
          content: <p>You may browse this site for personal, informational purposes. Please do not disrupt the site, attempt to gain unauthorized access, or use it in a way that infringes another person’s rights.</p>,
        },
        {
          title: "Creative work and ownership",
          content: <p>Unless a project is credited otherwise, the photographs, films, writing, logo, and other creative materials on this site are owned by D’THIRD or displayed with permission. Viewing the site does not give you permission to copy, publish, edit, or commercially use those materials. Please contact D’THIRD to request permission.</p>,
        },
        {
          title: "Project inquiries",
          content: <p>An inquiry is an invitation to discuss a project; it does not confirm a booking or create a service agreement. Availability, scope, fees, usage rights, delivery, and other project terms are confirmed separately in writing.</p>,
        },
        {
          title: "Third-party websites and availability",
          content: <p>This site may link to social, messaging, or other third-party services. Those services are operated independently and have their own terms. D’THIRD aims to keep the website available and accurate, but cannot promise uninterrupted access or that every linked service will remain available.</p>,
        },
        {
          title: "Updates",
          content: <p>These terms may be updated as the site or services change. The date above shows when this page was last revised. Your continued use of the site after an update means you accept the revised terms.</p>,
        },
      ]}
    />
  );
}
