import React, { createContext, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { LevelProvider } from "../App";
import Home from "./Home";
import HomeButton from "./HomeButton";



function Level() {
  const { level1Enabled, level2Enabled, level3Enabled, setLevel1Enabled, setLevel2Enabled, setLevel3Enabled } = useContext(LevelProvider);

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
            <table className="levels-about">
              <tbody>
              <tr>
                <td>
                  <b>Level 1</b>
                </td>
                <td>: Start easy and get familiar with the game.</td>
              </tr>
              <tr>
                <td>
                  <b>Level 2</b>
                </td>
                <td>: More cards, slightly harder!</td>
              </tr>
              <tr>
                <td>
                  <b>Level 3</b>
                </td>
                <td>: The ultimate challenge!</td>
              </tr>
              </tbody>
            </table>

            <p>Click on a level box to start playing that level. Good luck!</p>
          </div>

          {/*========= Level Buttons ===========*/}
          <div className="level-buttons">
            <button disabled={!level1Enabled} onClick={() => startLevel(1)}>Level 1</button>
            <button disabled={!level2Enabled} onClick={() => startLevel(2)}>Level 2</button>
            <button disabled={!level3Enabled} onClick={() => startLevel(3)}>Level 3</button>
          </div>

          <HomeButton/>
        </div>
        
    </>
  );
}

export default Level;

