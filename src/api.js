export const fetchSongs = async () => {
  try {
    const response = await fetch("https://qtify-backend.labs.crio.do/songs");
    if (!response.ok) throw new Error("Network response not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await fetch("https://qtify-backend.labs.crio.do/genres");
    if (!response.ok) throw new Error("Network response not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};
