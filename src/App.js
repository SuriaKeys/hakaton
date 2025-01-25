import React, { useState } from "react";

const movie = {
  title: "Інтерстеллар",
  director: "Крістофер Нолан",
  genre: "Наукова фантастика",
  releaseYear: 2014,
  posterId: "xFw9RXK", 
  get posterUrl() {
    return `https://i.imgur.com/${this.posterId}.jpg`; //чомусь не знаходить фото на imgur
  },
  highlights: [
    "Подорож у космосі для порятунку людства.",
    "Ефект часової дилатації.",
    "Емоційна історія стосунків батька і дочки.",
  ],
}; 
const themes = {
  fantasy: {
    backgroundColor: "#fff8e1", 
    color: "#4e342e",
    border: "2px solid #8d6e63",
  },
  dark: {
    backgroundColor: "#212121", 
    color: "#ffffff",
    border: "2px solid #757575",
  },
};

export default function MovieProfileWithThemeAndAdd() {
  const [theme, setTheme] = useState("fantasy");
  const [newHighlight, setNewHighlight] = useState("");
  const [highlights, setHighlights] = useState(movie.highlights);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "fantasy" ? "dark" : "fantasy"));
  };

  const handleAddHighlight = () => {
    if (newHighlight.trim() !== "") {
      setHighlights((prevHighlights) => [...prevHighlights, newHighlight]);
      setNewHighlight("");
    } else {
      alert("Додай Новий момен");
    }
  };

  return (
    <div style={{ ...themes[theme], padding: "20px", borderRadius: "10px" }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: theme === "fantasy" ? "#6d4c41" : "#fbc02d",
          color: theme === "fantasy" ? "#ffffff" : "#000000",
          border: "none",
        }}
      >
        Перемкнути на {theme === "fantasy" ? "Темну атмосферу" : "Фентезі"}
      </button>

      <h1>{movie.title}</h1>
      <img
        src={movie.posterUrl}
        alt="Основний постер"
        style={{ width: "200px", borderRadius: "8px", marginBottom: "10px" }}
      />
      <p>
        <strong>Режисер:</strong> {movie.director}
        <br />
        <strong>Жанр:</strong> {movie.genre}
        <br />
        <strong>Рік випуску:</strong> {movie.releaseYear}
      </p>

      <h2>Основні моменти:</h2>
      <ul>
        {highlights.map((highlight, index) => (
          <li key={index} style={{ marginBottom: "5px" }}>
            {highlight}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newHighlight}
        onChange={(e) => setNewHighlight(e.target.value)}
        placeholder="Додаи новий момент"
        style={{
          padding: "10px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={handleAddHighlight}
        style={{
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#4caf50",
          color: "#ffffff",
          border: "none",
        }}
      >
        Додати
      </button>
    </div>
  );
}
