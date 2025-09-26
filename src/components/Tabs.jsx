import React, { useState } from "react";
import "../css/Tabs.css";

const Tabs = ({ tabs, onSelect }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    onSelect(index);
  };

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={active === index ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
