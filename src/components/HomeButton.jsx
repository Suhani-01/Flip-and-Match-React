import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton({gameOver=false,winner=false}) {

  const navigate=useNavigate();
  function homePage() {
    navigate("/");
  }

  return (
    <button
      disabled={gameOver || winner}
      onClick={homePage}
      className="home-btn"
    >
      <i className="fa-solid fa-house"></i>
    </button>
  );
}

export default HomeButton;
