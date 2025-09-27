import "./styles.css";
import { fetchSongs, fetchTopAlbums, fetchNewAlbums } from "./api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import Songs from "./components/Songs";
import { useEffect, useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const songsData = await fetchSongs();
      const topAlbumsData = await fetchTopAlbums();
      const newAlbumsData = await fetchNewAlbums();

      setSongs(songsData);
      setTopAlbums(topAlbumsData);
      setNewAlbums(newAlbumsData);
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* ✅ Top Albums */}
      <Section title="Top Albums" songs={topAlbums} />

      {/* ✅ New Albums */}
      <Section title="New Albums" songs={newAlbums} />

      {/* ✅ Songs */}
      <Tabs
        tabs={["All Songs", "Liked"]}
        onSelect={(index) => console.log("Selected tab:", index)}
      />
      <Songs songs={songs} />
    </div>
  );
}
