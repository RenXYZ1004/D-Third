"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export default function WorkGallery({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const dialogRef = useRef(null);
  const galleryPhotos = Array.isArray(item.gallery) ? item.gallery : [];
  const photos = [
    { image: item.image, alt: item.alt || item.title },
    ...galleryPhotos,
  ];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <>
      <div className="work-image-frame">
        <button
          className="work-photo-trigger"
          type="button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-label={`Open the ${item.title} gallery with ${photos.length} photos`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 760px) 86vw, 84vw"
          />
          <span className="work-photo-overlay" aria-hidden="true" />
          <span className="work-photo-index" aria-hidden="true">01 / {String(photos.length).padStart(2, "0")}</span>
          <span className="work-photo-action" aria-hidden="true">
            <span className="work-photo-action-copy">
              <span className="work-photo-action-title">Open the photo story</span>
              <span className="work-photo-action-hint">Click to explore all {photos.length} frames</span>
            </span>
            <span className="work-photo-action-arrow">↗</span>
          </span>
        </button>
      </div>

      <dialog
        className="wedding-gallery-dialog"
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
      >
        <div className="wedding-gallery-inner">
          <div className="wedding-gallery-topline">
            <p className="wedding-gallery-kicker">D’THIRD&nbsp; / &nbsp;WEDDING STORY</p>
            <button className="wedding-gallery-close" type="button" onClick={() => setIsOpen(false)}>
              <span>Close</span><span className="close-mark" aria-hidden="true">×</span>
            </button>
          </div>
          <div className="wedding-gallery-heading">
            <div>
              <h2 id={dialogTitleId}>{item.title}</h2>
              <p>{String(photos.length).padStart(2, "0")} photographs&nbsp; · &nbsp;Ceremony and celebration</p>
            </div>
            <span className="wedding-gallery-edition" aria-hidden="true">A STORY IN FRAMES</span>
          </div>
          <div className="wedding-gallery-stage">
            {[0, 1].map((row) => (
              <div className={`gallery-marquee-row gallery-marquee-row-${row + 1}`} key={row} aria-hidden="true">
                <div className="gallery-marquee-track">
                  {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
                    <figure className="gallery-marquee-photo" key={`${row}-${index}`}>
                      <Image
                        src={photo.image}
                        alt=""
                        fill
                        sizes="(max-width: 760px) 44vw, 22vw"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
            <span className="wedding-gallery-stage-shade" aria-hidden="true" />
            <figure className="wedding-gallery-feature">
              <Image src={photos[0].image} alt={photos[0].alt} fill sizes="(max-width: 760px) 80vw, 56vw" />
              <figcaption>
                <span>01 / {String(photos.length).padStart(2, "0")}</span>
                <span>{photos[0].alt}</span>
              </figcaption>
            </figure>
            <span className="wedding-gallery-stage-mark" aria-hidden="true">IN FOCUS</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
