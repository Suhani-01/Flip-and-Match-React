import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LevelProvider } from "../App";

function Winner({ time, flips, levelNumber }) {
  const { setLevel2Enabled, setLevel3Enabled } = useContext(LevelProvider);
  const navigate = useNavigate();

  function openLevelPage(){
    navigate('/levels')
  }

  useEffect(() => {
    console.log("I am Inside useeffect to update level");
    if (levelNumber + 1 === 2) setLevel2Enabled(true);
    else if (levelNumber + 1 === 3) setLevel3Enabled(true);
  }, []);

  function updateLevel() {
    if (levelNumber == 3) return;
    console.log(levelNumber + 1);
    navigate("/levels/play", { state: { levelNumber: levelNumber + 1 } });
  }

  return (
    <div className="winner-winner">
      <div className="winner-overlay">
        {levelNumber===3? <h2>Winner...!👑</h2> : <h2>VICTORY...!</h2>}
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

        {levelNumber!==3 && <p>Lets Move to The next Level</p>}

        <div className="button-container">
          <button className="choose-level" onClick={openLevelPage}>
            Choose Level
          </button>


          {levelNumber!==3 && <button className="next-level" onClick={updateLevel}>
            Next Level
          </button>}
          
        </div>
      </div>
    </div>
  );
}

export default Winner;
