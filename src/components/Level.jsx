import React, { createContext, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { LevelProvider } from "../App";
import Home from "./Home";
import HomeButton from "./HomeButton";



function Level() {
  const { levelsEnabled } = useContext(LevelProvider);

  const navigate = useNavigate();

  const startLevel = (levelNumber) => {
    //{ levelNumber } is same as { levelNumber: levelNumber }.
    navigate("/levels/play", { state: { levelNumber: levelNumber } });
  };

  return (
    <>
        <div className="level-page">
          <h1>Levels</h1>
          <div className="levels-desc">
            <div>
              <p>
                <b>Welcome to the Flip & Match Game!</b>
              </p>
              <br />
              <p style={{ color: "#324e4d", fontSize: "0.9rem" }}>
                <b>
                  Each level will challenge your memory by increasing the number
                  of cards you need to match.
                </b>
              </p>
            </div>
            

            <p>Click on a level box to start playing that level. Good luck!</p>
          </div>

          {/*========= Level Buttons ===========*/}
          <div className="level-buttons">
            <button disabled={!levelsEnabled[0]} onClick={() => startLevel(1)}>1</button>
            <button disabled={!levelsEnabled[1]} onClick={() => startLevel(2)}>2</button>
            <button disabled={!levelsEnabled[2]} onClick={() => startLevel(3)}>3</button>
            <button disabled={!levelsEnabled[3]} onClick={() => startLevel(4)}>4</button>
            <button disabled={!levelsEnabled[4]} onClick={() => startLevel(5)}>5</button>
            <button disabled={!levelsEnabled[5]} onClick={() => startLevel(6)}>6</button>
          </div>

          <HomeButton/>
        </div>
        
    </>
  );
}

export default Level;

