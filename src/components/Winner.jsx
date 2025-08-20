import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LevelProvider } from "../App";

function Winner({ time, flips, levelNumber ,restart}) {
  const { setLevelsEnabled } = useContext(LevelProvider);
  const navigate = useNavigate();

  function exit() {
    navigate("/");
  }

  useEffect(() => {
    console.log("I am Inside useeffect to update level");
    if (levelNumber != 6) {
      setLevelsEnabled((prev) => {
        const newLevels = [...prev]; //copied the state of level enabled
        newLevels[levelNumber] = true;
        return newLevels;
      });
    }
  }, []);

  function updateLevel() {
    if (levelNumber == 6) return;
    console.log(levelNumber + 1);
    navigate("/levels/play", { state: { levelNumber: levelNumber + 1 } });
  }

  return (
    <div className="winner-winner">
      <div className="winner-overlay">
        {levelNumber === 6 ? <h2>Winner...!👑</h2> : <h2>VICTORY...!</h2>}
        <h4>Level {levelNumber} Completed</h4>

        <div className="time-flips">
          <p>
            <b>Time Taken :</b> {50 - time} Seconds
          </p>
          <p>
            <b>Total Flips :</b> {flips}
          </p>
        </div>
        <br />

        {levelNumber !== 6 && <p>Lets Move to The next Level</p>}

        <div className="button-container">
          <button className="exit" onClick={exit}>
            Exit
          </button>

          {levelNumber !== 6 && (
            <button className="next-level" onClick={updateLevel}>
              Next Level
            </button>
          )}

          <button className="replay" onClick={restart}>
            Replay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
