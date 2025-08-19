import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  

  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/levels");
  };
  return (
    <>
      
        <div className="home-page">
          <div className="home-desc">
            <p>
              <b>Hey Player!</b>
            </p>
            <p>
              Get ready to challenge your memory and reflexes in the ultimate
              Flip & Match game.
            </p>
            <p>
              Your goal is simple — flip the cards, find the matching pairs, and
              beat the clock!
            </p>
            <p>Stay sharp, focus hard, and most importantly... have fun!</p>
          </div>
          <button className="button-type-one" onClick={handleStart}>
            {" "}
            Start{" "}
          </button>
        </div>
    </>
  );
}

export default Home;

