
// src/components/NewsSection.jsx

import { news } from "../data/newsData.js";
import { blogs } from "../data/blogsData.js";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./NewsSection.css";

// Automatically get the 3 latest articles
const latestArticles = [...blogs]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3)
  .map((blog) => ({
    title: blog.title,
    type: "articles",
    head: "Articles",
    thumbnail: blog.thumbnail || blog.image || "/images/main/brand-logo-news.png",
    link: `/blogs/${blog.slug}/`,
    details: blog.description || blog.excerpt || "",
  }));

/* ----------------------------
   Individual news item
---------------------------- */

function NewsItem({ item, onOpenGallery }) {
  const [expanded, setExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const checkOverflow = () => {
      const lineHeight = parseFloat(getComputedStyle(wrapper).lineHeight);
      const maxHeight = lineHeight * 2;
      setNeedsReadMore(wrapper.scrollHeight > maxHeight);
    };

    requestAnimationFrame(checkOverflow);
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [item.details]);

  return (
    <li className="news-item">

      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="news-thumbnail"
          />
        </a>
      ) : (
        <img
          src={item.thumbnail}
          alt={item.title}
          className="news-thumbnail"
        />
      )}

      <div className="news-text">

        <p className="news-title">{item.title}</p>

        <div
          className={`news-details-wrapper ${expanded ? "expanded" : ""}`}
          ref={wrapperRef}
        >
          <div
            className="news-details"
            dangerouslySetInnerHTML={{ __html: item.details || "" }}
          />

          {!expanded && needsReadMore && (
            <div className="fade-overlay" />
          )}
        </div>

        {needsReadMore && (
          <button
            className="news-read-more-inline"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}

        {/* PHOTO GALLERY - ONLY WHEN GALLERY EXISTS */}

        {item.gallery?.length > 0 && (
          <div className="trek-gallery-section">

            <p className="trek-gallery-label">
              {item.galleryLabel || "Glimpses from the trek"}
            </p>

            <div className="trek-photo-gallery">

              {item.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() =>
                    onOpenGallery({
                      images: item.gallery,
                      index,
                      watermark: item.watermark !== false,
                    })
                  }
                  aria-label={`View trek photo ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${item.title} - Photo ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}

            </div>
          </div>
        )}

      </div>
    </li>
  );
}


/* ----------------------------
   Reusable slideshow popup
---------------------------- */


function TrekLightbox({ slideshow, onClose, onNavigate }) {

  useEffect(() => {
    if (!slideshow) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slideshow, onClose, onNavigate]);

  if (!slideshow) return null;

  const currentImage = slideshow.images[slideshow.index];

  return createPortal(

    <div
      className="trek-lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Trek photo slideshow"
    >

      {/* CLOSE BUTTON - TOP RIGHT */}

      <button
        className="trek-lightbox-close"
        onClick={onClose}
        aria-label="Close slideshow"
      >
        &times;
      </button>

      {/* PREVIOUS */}

      <button
        className="trek-lightbox-prev"
        onClick={() => onNavigate(-1)}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      {/* IMAGE AND WATERMARK */}

      <div className="trek-lightbox-image-wrap">

        <img
          key={currentImage}
          src={currentImage}
          alt={`Trek photo ${slideshow.index + 1}`}
          className="trek-lightbox-image"
        />

        {slideshow.watermark && (
          <div className="trek-lightbox-watermark">
            <span className="planet">Planet</span><span className="himalayas">himalayas</span>
          </div>
        )}

      </div>

      {/* NEXT */}

      <button
        className="trek-lightbox-next"
        onClick={() => onNavigate(1)}
        aria-label="Next image"
      >
        &#10095;
      </button>

      {/* COUNTER */}

      <div className="trek-lightbox-counter">
        {slideshow.index + 1} / {slideshow.images.length}
      </div>

    </div>,

    document.body

  );
}


/* ----------------------------
   One card per category
---------------------------- */

function NewsCard({ category, label, onOpenGallery }) {

  const items =
    category === "articles"
      ? latestArticles
      : news.filter((n) => n.type === category);

  return (
    <div className="news-card">

      <h3 className="news-card-heading">{label}</h3>

      <ul className="news-card-list">

        {items.map((item, i) => (
          <NewsItem
            key={i}
            item={item}
            onOpenGallery={onOpenGallery}
          />
        ))}

      </ul>

      {category === "articles" && (
        <div className="read-all-container">
          <a
            href="/blogs"
            className="read-all-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore all articles →
          </a>
        </div>
      )}

    </div>
  );
}


/* ----------------------------
   Main News Section
---------------------------- */

export default function NewsSection() {

  const [slideshow, setSlideshow] = useState(null);

  const categories = ["news", "articles"];

  const labels = {
    news: "News",
    articles: "Articles",
  };

  const openGallery = ({ images, index, watermark }) => {
    setSlideshow({
      images,
      index,
      watermark,
    });
  };

  const closeGallery = () => {
    setSlideshow(null);
  };

  const navigateGallery = (direction) => {
    setSlideshow((current) => {
      if (!current) return current;

      const total = current.images.length;

      return {
        ...current,
        index: (current.index + direction + total) % total,
      };
    });
  };

  return (
    <>
      <section id="news-section">

        {categories.map((cat) => (
          <NewsCard
            key={cat}
            category={cat}
            label={labels[cat]}
            onOpenGallery={openGallery}
          />
        ))}

      </section>

      {/* ONE REUSABLE POPUP FOR ALL NEWS GALLERIES */}

      <TrekLightbox
        slideshow={slideshow}
        onClose={closeGallery}
        onNavigate={navigateGallery}
      />

    </>
  );
}