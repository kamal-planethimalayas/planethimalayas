import React, { useRef, useEffect, useState } from "react";
import { news } from "../data/newsData";
import "./NewsBanner.css";

export default function NewsBanner() {
  const trackRef = useRef(null);

  // Duplicate news for seamless loop
  const duplicatedNews = [...news, ...news];

  // Calculate animation duration dynamically based on content width
  const [animationDuration, setAnimationDuration] = useState(20);

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2; // width of single set
      const speed = 50; // pixels per second
      setAnimationDuration(trackWidth / speed); // seconds
    }
  }, []);

  return (
    <div className="news-banner">
      <div
        className="news-banner-track"
        ref={trackRef}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {duplicatedNews.map((item, index) => (
          <span key={index} className="news-banner-item">
            {item.title}
          </span>
        ))}
      </div>
      <a href="#news-section" className="news-btn">
        Go to News
      </a>
    </div>
  );
}
