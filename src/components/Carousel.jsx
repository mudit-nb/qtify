import React, { useState } from "react";
import "../css/Carousel.css";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className="carousel">
      <button className="nav prev" onClick={prev}>
        &lt;
      </button>
      <div className="carousel-content">{children[currentIndex]}</div>
      <button className="nav next" onClick={next}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
