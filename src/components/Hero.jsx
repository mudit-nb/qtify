import React from "react";
import "../css/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcasts and audiobooks</p>
      </div>
      <img
        src="https://images.pexels.com/photos/1648538/pexels-photo-1648538.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=600"
        alt="Hero Banner"
        className="hero-img"
      />
    </div>
  );
}
