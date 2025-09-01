import React from "react";
import "./App.css";

function Image() {
  return (
    <div className="image-container">
      <img
        src={require("./image/3.jpg")}
        alt="Burwood 3"
        className="fullscreen-img"
      />
    </div>
  );
}

export default Image;
