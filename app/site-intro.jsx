import Image from "next/image";

export default function SiteIntro() {
  return (
    <div className="site-intro" aria-hidden="true">
      <div className="site-intro-center">
        <div className="site-intro-mark-wrap">
          <Image
            className="site-intro-mark"
            src="/third-logo.svg"
            alt=""
            width={320}
            height={241}
            priority
          />
        </div>
        <p className="site-intro-caption">Independent films · lasting frames</p>
      </div>
    </div>
  );
}
