import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config.js";
import { SiteFooter, SiteHeader } from "../site-chrome.jsx";

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    if ((url.protocol !== "https:" && url.protocol !== "http:") || url.username || url.password) return "";
    return url.href;
  } catch {
    return "";
  }
}

export const metadata = {
  title: "Credentials",
  description: "Selected portfolio work and a growing archive of D’THIRD certificates and professional credentials.",
  ...(siteConfig.siteUrl ? { alternates: { canonical: "/credentials" } } : {}),
  openGraph: {
    title: "Credentials | D’THIRD",
    description: "Selected portfolio work and a growing archive of D’THIRD certificates and professional credentials.",
    ...(siteConfig.siteUrl ? { url: `${siteConfig.siteUrl}/credentials` } : {}),
    images: [{
      url: "/images/dthird-social.webp",
      width: 1200,
      height: 630,
      alt: "D’THIRD independent filmmaker and visual storyteller",
    }],
  },
};

export default function CredentialsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="credentials" />
      <main className="credentials-page" id="main">
        <section className="credentials-intro section-wrap" aria-labelledby="credentials-title">
          <p className="eyebrow"><span className="eyebrow-mark" /> Portfolio / credentials</p>
          <h1 id="credentials-title">A record of<br />the <em>work.</em></h1>
          <p className="credentials-lede">Selected films, projects, and professional credentials by D’THIRD.</p>
        </section>

        <section className="credentials-section section-wrap" aria-labelledby="portfolio-credentials-title">
          <div className="credentials-section-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> 01 / Selected portfolio</p>
            <h2 id="portfolio-credentials-title">Stories made to stay.</h2>
          </div>
          {siteConfig.portfolioItems.length ? (
            <div className="credential-work-list">
              {siteConfig.portfolioItems.map((item, index) => (
                <Link className="credential-work-card" href="/#work" key={`${item.title}-${index}`}>
                  <span className="credential-work-image">
                    <Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 86vw, 64vw" />
                  </span>
                  <span className="credential-work-copy">
                    <span className="credential-work-category">{item.category || "Selected work"}</span>
                    <span className="credential-work-title">{item.title}</span>
                    <span className="credential-work-link">View project <span aria-hidden="true">↗</span></span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="credentials-empty">Portfolio projects will appear here as they are added.</p>
          )}
        </section>

        <section className="credentials-section credentials-certificates section-wrap" aria-labelledby="certificate-title">
          <div className="credentials-section-heading">
            <p className="eyebrow"><span className="eyebrow-mark" /> 02 / Certificate archive</p>
            <h2 id="certificate-title">Training &amp; recognition.</h2>
          </div>
          {siteConfig.credentials.length ? (
            <ul className="certificate-list">
              {siteConfig.credentials.map((credential) => (
                <li className="certificate-item" key={`${credential.title}-${credential.issuer}`}>
                  <div>
                    <h3>{credential.title}</h3>
                    <p>{[credential.issuer, credential.year].filter(Boolean).join(" · ")}</p>
                  </div>
                  {safeExternalUrl(credential.href) && <a href={safeExternalUrl(credential.href)} target="_blank" rel="noopener noreferrer">View credential ↗</a>}
                </li>
              ))}
            </ul>
          ) : (
            <div className="certificate-placeholder" role="note">
              <span className="certificate-placeholder-stamp" aria-hidden="true">+</span>
              <div className="certificate-placeholder-copy">
                <span className="certificate-placeholder-label">Placeholder credential</span>
                <h3>Certificate title</h3>
                <p>Issuing organization · Year earned</p>
              </div>
              <span className="certificate-placeholder-note">Details to be added</span>
            </div>
          )}
        </section>

        <section className="credentials-contact section-wrap" aria-label="Project inquiries">
          <p>Have a story in mind?</p>
          <Link href="/#inquire" className="text-link">Start a project <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
