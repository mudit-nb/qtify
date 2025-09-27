import { useState } from "react";
import "../css/Section.css";

export default function Section({ title, songs }) {
  const [showAll, setShowAll] = useState(false);
  const maxVisible = 10; // Number of items shown by default

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div className="section-cards">
        {songs.map((item, index) => (
          <div
            key={item.id}
            className="album-card"
            style={{
              display: !showAll && index >= maxVisible ? "none" : "block",
            }}
          >
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
