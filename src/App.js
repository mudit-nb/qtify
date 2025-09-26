import "./styles.css";
import { fetchSongs } from "./api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import Songs from "./components/Songs";
import { useEffect, useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      const data = await fetchSongs();
      setSongs(data);
    };
    loadSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Hits" songs={songs.slice(0, 5)} />
      <Carousel>
        {songs.slice(5, 10).map((song) => (
          <img key={song.id} src={song.cover} alt={song.title} />
        ))}
      </Carousel>
      <Tabs
        tabs={["All Songs", "Liked"]}
        onSelect={(index) => console.log("Selected tab:", index)}
      />
      <Songs />
    </div>
  );
}
