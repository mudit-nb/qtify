import React from "react";
import Card from "./Card";
import "../css/Section.css";

const Section = ({ title, songs }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="card-container">
        {songs.map((song) => (
          <Card key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
};

export default Section;
