import React, { useRef, useEffect, useState } from "react";
import { news } from "../data/newsData";
import "./NewsBanner.css";

export default function NewsBanner() {
  const trackRef = useRef(null);

  // Group items by head (display label) instead of just type
  const groupedNews = news.reduce((acc, item) => {
    if (!acc[item.head]) acc[item.head] = [];
    acc[item.head].push(item.title);
    return acc;
  }, {});

  // Duplicate groups for seamless loop
  const duplicatedGroups = [
    ...Object.entries(groupedNews),
    ...Object.entries(groupedNews),
  ];

  // Calculate animation duration dynamically
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
        {duplicatedGroups.map(([head, titles], index) => (
          <span key={index} className="news-banner-item">
            <strong>{decodeURIComponent(head)}: </strong> {titles.join(" | ")}
          </span>
        ))}
      </div>
      <a href="#news-section" className="news-btn">
        News & Articles
      </a>
    </div>
  );
}
