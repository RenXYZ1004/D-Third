import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site-config.js";

const footerLinkGroups = [
  {
    title: "Follow",
    links: [
      { id: "instagram", label: "Instagram" },
      { id: "facebook", label: "Facebook" },
    ],
  },
  {
    title: "Contact",
    links: [
      { id: "viber", label: "Viber" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "messenger", label: "Messenger" },
    ],
  },
];

function getFooterHref(id) {
  const value = siteConfig.footerLinks?.[id];
  if (!value) return "/#inquire";

  try {
    const url = new URL(value);
    if (!url.username && !url.password && (url.protocol === "https:" || (id === "viber" && url.protocol === "viber:"))) {
      return url.href;
    }
  } catch {
    return "/#inquire";
  }

  return "/#inquire";
}

function FooterIcon({ name }) {
  const shared = {
    "aria-hidden": true,
    fill: "none",
    height: 20,
    viewBox: "0 0 24 24",
    width: 20,
  };

  switch (name) {
    case "instagram":
      return <svg {...shared}><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.6" cy="6.6" r="1.1" fill="currentColor" /></svg>;
    case "facebook":
      return <svg {...shared} fill="currentColor"><path d="M13.6 21v-8h2.8l.4-3.1h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2H7v3.1h2.9v8h3.7Z" /></svg>;
    case "viber":
      return <svg {...shared}><path d="M6.2 3.5h11.6a3 3 0 0 1 3 3v8.2a3 3 0 0 1-3 3h-5.2l-4.8 3v-3H6.2a3 3 0 0 1-3-3V6.5a3 3 0 0 1 3-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" /><path d="M9 8.1c.3 2.8 2.2 4.7 5 5l1-1.4-1.7-1-1 .8a5.2 5.2 0 0 1-1.8-1.8l.8-1-1-1.7L9 8.1Z" fill="currentColor" /><path d="M14.2 6.8c1.5.3 2.5 1.3 2.8 2.8M14.4 4.8c2.6.4 4.4 2.2 4.8 4.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.25" /></svg>;
    case "whatsapp":
      return <svg {...shared}><path d="M20.1 11.7a8.1 8.1 0 0 1-11.9 7.1L3.6 20l1.2-4.4A8.1 8.1 0 1 1 20.1 11.7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" /><path d="M9 8.1c.2 2.7 2.1 4.6 4.9 5l1-1.4-1.7-1-1 .8a5.2 5.2 0 0 1-1.8-1.8l.8-1-1-1.7L9 8.1Z" fill="currentColor" /></svg>;
    case "messenger":
      return <svg {...shared}><path d="M12 3.3c-5.1 0-9 3.7-9 8.5 0 2.6 1.2 4.9 3.3 6.4V21l3.1-1.7c.8.2 1.7.3 2.6.3 5.1 0 9-3.7 9-8.5s-3.9-7.8-9-7.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" /><path d="m6.8 14.1 4-4.2 2.4 1.8 4-1.8-4.1 4.3-2.4-1.8-3.9 1.7Z" fill="currentColor" /></svg>;
    default:
      return null;
  }
}

export function SiteHeader({ currentPage = "home" }) {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="D’THIRD home">
        <Image className="brand-mark" src="/third-logo.svg" alt="" width={52} height={39} priority />
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/#work">Selected work</Link>
        <Link href="/#about">Approach</Link>
        <Link href="/credentials" aria-current={currentPage === "credentials" ? "page" : undefined}>Credentials</Link>
        <Link className="nav-inquire" href="/#inquire">Start a project <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand-lockup" href="/" aria-label="D’THIRD home">
            <Image className="brand-mark" src="/third-logo.svg" alt="" width={32} height={24} />
            <span className="wordmark wordmark-small">D’THIRD<span className="wordmark-period">.</span></span>
          </Link>
          <p className="footer-tagline">Independent films.<br />Lasting frames.</p>
        </div>

        {footerLinkGroups.map((group) => (
          <section className="footer-link-group" key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((item) => {
                const href = getFooterHref(item.id);
                const isExternalWeb = href.startsWith("https://");
                const hasConfiguredLink = Boolean(siteConfig.footerLinks?.[item.id]);
                return (
                  <li key={item.id}>
                    <a
                      className="footer-platform-link"
                      href={href}
                      target={isExternalWeb ? "_blank" : undefined}
                      rel={isExternalWeb ? "noopener noreferrer" : undefined}
                      aria-label={`${item.label}${hasConfiguredLink ? "" : " — profile link to be added"}`}
                      title={hasConfiguredLink ? item.label : `${item.label} profile link can be added in lib/site-config.js`}
                    >
                      <FooterIcon name={item.id} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <nav className="footer-navigation" aria-label="Footer navigation">
          <Link className="footer-credentials" href="/credentials">Portfolio &amp; credentials</Link>
          <Link className="footer-credentials" href="/terms">Terms of service</Link>
          <Link className="footer-credentials" href="/privacy">Privacy policy</Link>
          <Link className="footer-credentials" href="/cookies">Cookie policy</Link>
          <Link className="back-to-top" href="/#top">Back to top ↑</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span className="footer-year">© {new Date().getFullYear()} D’THIRD</span>
      </div>
    </footer>
  );
}
