"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = typeof window.matchMedia === "function"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    root.classList.add("motion-ready");
    const opening = document.querySelector(".opening");
    const heroTitle = document.querySelector("#hero-title");
    let animationFrame = 0;

    const updateHeroTitle = () => {
      animationFrame = 0;
      if (!opening || !heroTitle) return;
      const openingTop = opening.getBoundingClientRect().top;
      const titleOffset = heroTitle.getBoundingClientRect().top - openingTop;
      const scrollRange = Math.max(180, Math.min(360, titleOffset + heroTitle.offsetHeight));
      const progress = Math.min(1, Math.max(0, -openingTop / scrollRange));
      heroTitle.style.setProperty("--hero-title-scale", (1 + progress * 0.28).toFixed(3));
      opening.style.setProperty("--hero-image-shift", `${(progress * 22).toFixed(1)}px`);
    };

    const requestTitleUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateHeroTitle);
    };

    updateHeroTitle();
    window.addEventListener("scroll", requestTitleUpdate, { passive: true });
    window.addEventListener("resize", requestTitleUpdate);
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      window.removeEventListener("scroll", requestTitleUpdate);
      window.removeEventListener("resize", requestTitleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestTitleUpdate);
      window.removeEventListener("resize", requestTitleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
