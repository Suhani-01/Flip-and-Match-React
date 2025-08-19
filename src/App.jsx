import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Level from "./components/Level";
import LevelComponent from "./components/LevelComponent";
import { createContext, useState } from "react";

const LevelProvider = createContext(null);

function App() {
  const [level1Enabled, setLevel1Enabled] = useState(true); // Level 1 initially enabled
  const [level2Enabled, setLevel2Enabled] = useState(false); // Level 2 initially disabled
  const [level3Enabled, setLevel3Enabled] = useState(false); // Level 3 in

  return (
    <>
      <LevelProvider.Provider
        value={{
          level1Enabled,
          level2Enabled,
          level3Enabled,
          setLevel1Enabled,
          setLevel2Enabled,
          setLevel3Enabled,
        }}
      >
        <h1 className="main-heading">Flip & Match</h1>
        <div className="main-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/levels" element={<Level />} />
              <Route path="/levels/play" element={<LevelComponent />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LevelProvider.Provider>
    </>
  );
}

export default App;
export {LevelProvider};