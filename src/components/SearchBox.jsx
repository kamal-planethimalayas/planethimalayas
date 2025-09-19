import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { treks } from "../data/treksData.js";
import "./SearchBox.css";


export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const inputRef = useRef(null);
  const capitalize = (str) => {
    if (!str || typeof str !== "string") return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const shortMonth = (str) => {
    if (!str || typeof str !== "string") return str;
    return str.slice(0, 3).charAt(0).toUpperCase() + str.slice(1, 3);
  };



  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const filtered = treks.filter((trek) =>
      ["name", "region", "season", "difficulty", "month"].some((key) => {
        const field = trek[key];
        if (Array.isArray(field)) {
          return field.some((item) => item.toLowerCase().includes(value));
        } else if (typeof field === "string") {
          return field.toLowerCase().includes(value);
        }
        return false;
      })
    );

    setResults(filtered);
  };

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".results-box") && !e.target.closest(".search-box")) {
      setQuery(""); // clear search
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    // run filter here
  }, 200);
  return () => clearTimeout(timer);
}, [query]);


  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 4, // 4px spacing below input
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [query]);

    

  return (
    <div className="search-box" style={{ position: "relative" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="search trek by name/region/season/difficulty/month..."
        value={query}
        onChange={handleChange}
        
      />

      {query &&
        ReactDOM.createPortal(
          <div
            className="results-box"
            style={{
              position: "absolute",
              top: dropdownPos.top,
              left: dropdownPos.left,
              width: dropdownPos.width,
              maxWidth: window.innerWidth < 768 ? "100%" : "none",
              background: "#fff",
              border: "1px solid #000",
              borderRadius: "8px",
              zIndex: 9999, // much higher than navbar
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            {results.length > 0 ? (
              results.map((trek) => (
                <a key={trek.id} href={`/trek/${trek.id}`} className="result-card">
                  <img src={trek.heroImage || "/images/default-trek.jpg"} alt={trek.name} className="card-thumb" />
                  <div className="card-content">
                    <h4>{trek.name}</h4>
                    <p>Region: {capitalize(trek.region)}</p>
                    <p>Season: {Array.isArray(trek.season) ? trek.season.map(capitalize).join(" / ") : capitalize(trek.season)}</p>
                    <p>Duration: {trek.duration}</p>
                    <p>Difficulty: {Array.isArray(trek.difficulty) ? trek.difficulty.map(capitalize).join(" / ") : capitalize(trek.difficulty)}</p>
                    <p>Months: {Array.isArray(trek.month) ? trek.month.map(shortMonth).join(" / ") : shortMonth(trek.month)}</p>
 
                  </div>
                </a>
              ))
            ) : (
              <div className="no-result">
                <p>No matches found</p>
                <a href="/upcoming-treks" className="upcoming-btn">See all upcoming treks</a>
              </div>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
