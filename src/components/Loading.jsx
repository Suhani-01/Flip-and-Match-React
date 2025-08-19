import React from "react";

function Loading() {
  return (
    <div className="loading">
      <p>Shuffling the cards </p>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Loading;
