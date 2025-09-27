import { useState } from "react";
import "../css/Section.css";

export default function Section({ title, songs }) {
  const [showAll, setShowAll] = useState(false);

  const visibleSongs = showAll ? songs : songs.slice(0, 10);

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div className="section-cards">
        {visibleSongs.map((item) => (
          <div key={item.id} className="album-card">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
