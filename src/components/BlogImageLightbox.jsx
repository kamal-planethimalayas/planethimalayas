import { useState } from "react";
import "./BlogImageLightbox.css";

export default function BlogImageLightbox({ src, alt = "Planethimalayas blog image" }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Inline blog image */}
      <span className="blog-image-wrapper" onClick={openLightbox}>
        <img
          src={src}
          alt={alt}
          className="blog-inline-image"
        />

        {/* Watermark on normal blog image */}
        <span className="blog-image-watermark">
          <img
            src="/images/main/brand-logo.png"
            alt="Planethimalayas Logo"
          />
        </span>
      </span>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="blog-lightbox-overlay"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="blog-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            &times;
          </button>

          {/* Enlarged image */}
          <div
  className="blog-lightbox-image-container"
  onClick={(e) => e.stopPropagation()}
>
  <div className="blog-lightbox-image-frame">
    <img
      src={src}
      alt={alt}
      className="blog-lightbox-image"
    />

    <div className="blog-lightbox-watermark">
      <img
        src="/images/main/brand-logo.png"
        alt="Planethimalayas Logo"
      />
    </div>
  </div>
</div>
        </div>
      )}
    </>
  );
}