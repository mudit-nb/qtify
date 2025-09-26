import React, { useEffect, useState } from "react";
import { fetchSongs } from "../api";
import "../css/Songs.css";

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      const data = await fetchSongs();
      setSongs(data);
    };
    loadSongs();
  }, []);

  const toggleLike = (id) => {
    setSongs(
      songs.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      )
    );
  };

  return (
    <div className="songs">
      {songs.map((song) => (
        <div key={song.id} className="song-card">
          <img
            src={song.image} // ensure yaha sahi property name ho (API me dekho)
            alt={song.title}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <button
            className={`like-btn ${song.liked ? "liked" : ""}`}
            onClick={() => toggleLike(song.id)}
          >
            ❤️
          </button>
        </div>
      ))}
    </div>
  );
};

export default Songs;
