import Image from "next/image";
import { siteConfig } from "../lib/site-config.js";
import InquiryForm from "./inquiry-form.jsx";
import MotionEffects from "./motion-effects.jsx";
import SiteIntro from "./site-intro.jsx";
import { SiteFooter, SiteHeader } from "./site-chrome.jsx";
import WorkGallery from "./work-gallery.jsx";

export default function HomePage() {
  const { desktop, mobile } = siteConfig.coverImage;
  const coverClasses = [
    "cover-visual",
    desktop ? "has-desktop-cover" : "",
    mobile ? "has-mobile-cover" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <SiteIntro />
      <MotionEffects />
      <a className="skip-link" href="#main">Skip to content</a>

      <SiteHeader />

      <main id="main">
        <section className="opening" id="top" aria-labelledby="hero-title">
          <div className="hero-background" aria-hidden="true">
            <Image
              className="hero-background-image"
              src="/images/dthird-profile.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="identity-panel">
            <div className="identity-top reveal">
              <p className="eyebrow"><span className="eyebrow-mark" /> D’Third Bautista / Videographer &amp; Visual storyteller</p>
              <h1 className="wordmark hero-wordmark" id="hero-title">D’THIRD<span className="wordmark-period">.</span></h1>
              <p className="hero-line">Every frame<br />tells a story.</p>
            </div>

            <div className="identity-bottom reveal">
              <p className="intro-note">Bawat litrato,<br />may kanya-kanyang storya.</p>
              <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
            <span className="side-index" aria-hidden="true">INDEPENDENT FILMMAKER&nbsp; · &nbsp;01—26</span>
          </div>
          <a className="hero-scroll-cue" href="#work" aria-label="Scroll to selected work">
            <span>Scroll to explore</span>
            <span className="scroll-cue-line" aria-hidden="true"><i /></span>
          </a>
        </section>

        <section className="cover-section" aria-labelledby="cover-title">
          <div className={coverClasses}>
            <div className="cover-placeholder" aria-hidden="true">
              <span className="placeholder-word">THE<br />NEXT<br /><i>FRAME</i></span>
              <span className="placeholder-cross cross-one" />
              <span className="placeholder-cross cross-two" />
              <span className="placeholder-caption">A COVER PHOTOGRAPH WILL LIVE HERE</span>
            </div>
            {(desktop || mobile) && (
              <picture className="cover-picture" aria-hidden="true">
                {mobile && <source media="(max-width: 760px)" srcSet={mobile} />}
                <Image
                  src={desktop || mobile}
                  alt=""
                  fill
                  sizes="100vw"
                  unoptimized
                />
              </picture>
            )}
            <div className="cover-shade" aria-hidden="true" />
            <div className="cover-copy reveal">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-mark" /> Cinematic cover</p>
              <h2 id="cover-title">Make room<br />for the story.</h2>
              <a className="text-link text-link-light" href="#work">Step inside <span aria-hidden="true">↘</span></a>
            </div>
            <span className="cover-index" aria-hidden="true">02 / COVER IMAGE</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <p className="eyebrow"><span className="eyebrow-mark" /> A few stories, still unfolding</p>
            <h2 id="work-title">Selected<br /><em>work.</em></h2>
            <p className="section-aside">Films made with feeling,<br />from the first frame to the last.</p>
          </div>

          {siteConfig.portfolioItems.length > 0 ? (
            <div className="work-grid">
              {siteConfig.portfolioItems.map((item, index) => (
                <article className={`work-item reveal ${item.gallery?.length ? "work-item-has-gallery" : ""}`} key={`${item.title}-${index}`}>
                  {item.gallery?.length ? (
                    <WorkGallery item={item} />
                  ) : (
                    <div className="work-image-frame">
                      <Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 86vw, 40vw" />
                    </div>
                  )}
                  <div className="work-details">
                    <h3>{item.title}</h3>
                    <p>{[item.category, item.year].filter(Boolean).join(" · ") || `FILM ${String(index + 1).padStart(2, "0")}`}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="work-empty">
              <span className="empty-index" aria-hidden="true">01</span>
              <p>The next frame is yours.</p>
              <a className="text-link" href="#inquire">Tell me what you’re making <span aria-hidden="true">↗</span></a>
            </div>
          )}
        </section>

        <section className="approach-section" id="about" aria-labelledby="approach-title">
          <div className="approach-inner section-wrap">
            <p className="eyebrow eyebrow-light reveal"><span className="eyebrow-mark" /> The approach</p>
            <h2 className="reveal" id="approach-title">The best stories<br />feel <em>like you.</em></h2>
            <div className="approach-lower reveal">
              <p>D’Third Bautista creates wedding films and visual stories through D’Third Bautista Captured. From the first conversation to the final cut, each film is made to feel honest, considered, and worth returning to.</p>
              <span className="approach-services">FILM&nbsp; · &nbsp;EDIT&nbsp; · &nbsp;STORY</span>
            </div>
          </div>
        </section>

        <section className="inquire-section section-wrap" id="inquire" aria-labelledby="inquire-title">
          <div className="inquire-intro reveal">
            <p className="eyebrow"><span className="eyebrow-mark" /> Project inquiries</p>
            <h2 id="inquire-title">Let’s make<br /><em>something real.</em></h2>
            <p className="inquire-note">Have a story in mind? Share a little about it and I’ll be in touch.</p>
          </div>
          <InquiryForm contactEmail={siteConfig.contactEmail} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
