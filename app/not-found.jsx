import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome.jsx";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main className="not-found-page section-wrap" id="main">
        <p className="eyebrow"><span className="eyebrow-mark" /> 404 / Frame missing</p>
        <h1>This page<br /><em>isn’t in the cut.</em></h1>
        <p>The address may have changed, or the page may not exist.</p>
        <Link className="text-link" href="/">Return to D’THIRD <span aria-hidden="true">↗</span></Link>
      </main>
      <SiteFooter />
    </>
  );
}
