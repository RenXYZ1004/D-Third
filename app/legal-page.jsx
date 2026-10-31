import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome.jsx";

const lastUpdated = "2026-10-31";

export default function LegalPage({ eyebrow, title, introduction, sections }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main className="legal-page section-wrap" id="main">
        <header className="legal-intro">
          <p className="eyebrow"><span className="eyebrow-mark" /> {eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-lede">{introduction}</p>
          <p className="legal-updated">Last updated <time dateTime={lastUpdated}>October 31, 2026</time></p>
        </header>

        <div className="legal-copy">
          {sections.map((section, index) => (
            <section className="legal-section" key={section.title} aria-labelledby={`legal-section-${index}`}>
              <h2 id={`legal-section-${index}`}>{section.title}</h2>
              {section.content}
            </section>
          ))}
          <p className="legal-back"><Link href="/#inquire">Questions? Get in touch <span aria-hidden="true">↗</span></Link></p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
