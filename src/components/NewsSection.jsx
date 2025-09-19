// src/components/NewsSection.jsx
import { news } from "../data/newsData.js";
import { useState, useRef, useEffect } from "react";
import "./NewsSection.css";


function NewsItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const checkOverflow = () => {
      const lineHeight = parseFloat(getComputedStyle(wrapper).lineHeight);
      const maxHeight = lineHeight * 2; // 2 lines only
      setNeedsReadMore(wrapper.scrollHeight > maxHeight);
    };

    requestAnimationFrame(checkOverflow);
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [item.details]);

  return (
    <li className="news-item">
      <img src={item.thumbnail} alt="" className="news-thumbnail" />
      <div className="news-text">
        <p className="news-title">{item.title}</p>

        <div
          className={`news-details-wrapper ${expanded ? "expanded" : ""}`}
          ref={wrapperRef}
        >
          <div
            className="news-details"
            dangerouslySetInnerHTML={{ __html: item.details }}
          />
          {!expanded && needsReadMore && <div className="fade-overlay" />}
        </div>

        {needsReadMore && (
          <button
            className="news-read-more-inline"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Hide" : "Read More"}
          </button>
        )}
      </div>
    </li>
  );
}


/* ----------------------------
   One card per category
   ---------------------------- */
function NewsCard({ category, label }) {
  const items = news.filter((n) => n.type === category);

  return (
    <div className="news-card">
      <h3 className="news-card-heading">{label}</h3>
      <ul className="news-card-list">
        {items.map((item, i) => (
          <NewsItem key={i} item={item} />
        ))}
      </ul>
      {/* ✅ Add link only for "articles" */}
      {category === "articles" && (
        <div className="read-all-container">
          <a href="/blogs" className="read-all-link" target='_blank' rel='noopener noreferrer'>
            Explore all articles →
          </a>
        </div>
      )}
    </div>
  );
}

export default function NewsSection() {
  const categories = ["slopes", "articles"]; // 👈 removed weather
  const labels = {
    slopes: "News from the Slopes",
    articles: "Important Articles",
  };

  return (
    <section id="news-section">
      {categories.map((cat) => (
        <NewsCard key={cat} category={cat} label={labels[cat]} />
      ))}
    </section>
  );
}
