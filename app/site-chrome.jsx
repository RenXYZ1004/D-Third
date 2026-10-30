import Image from "next/image";
import Link from "next/link";

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
      <Link className="brand-lockup" href="/" aria-label="D’THIRD home">
        <Image className="brand-mark" src="/third-logo.svg" alt="" width={32} height={24} />
        <span className="wordmark wordmark-small">D’THIRD<span className="wordmark-period">.</span></span>
      </Link>
      <p>Independent films. Lasting frames.</p>
      <Link className="footer-credentials" href="/credentials">Portfolio &amp; credentials</Link>
      <Link className="back-to-top" href="/#top">Back to top ↑</Link>
      <span className="footer-year">© {new Date().getFullYear()} D’THIRD</span>
    </footer>
  );
}
