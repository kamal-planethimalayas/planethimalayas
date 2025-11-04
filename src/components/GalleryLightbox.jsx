import { useState } from "react";
import "./GalleryLightbox.css";

export default function GalleryLightbox({ images, trekName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${trekName} image ${i + 1}`}
            onClick={() => openModal(i)}
            className="gallery-thumb"
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
  <div className="lightbox-overlay">
    <span className="close-btn" onClick={closeModal}>&times;</span>

    {/* Image container */}
    <div className="lightbox-img-container">
      <img
        src={images[currentIndex]}
        alt={`${trekName} image ${currentIndex + 1}`}
        className="lightbox-img"
      />
      
      {/* Watermark on top of image */}
      <div className="watermark">
        <img src="/images/main/brand-logo.png" alt="Planethimalayas Logo" />
        <span className="watermark-text">
          Planet<span style={{ color: "#ff7300" }}>himalayas</span>
        </span>
      </div>
    </div>

    {/* Caption below image */}
    <div className="lightbox-caption">
      {`${trekName} image ${currentIndex + 1}`}
    </div>

    <button className="prev-btn" onClick={prevImage}>&#10094;</button>
    <button className="next-btn" onClick={nextImage}>&#10095;</button>
  </div>
)}
    </>
  );
}