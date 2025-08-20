import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Level from "./components/Level";
import LevelComponent from "./components/LevelComponent";
import { createContext, useState } from "react";

const LevelProvider = createContext(null);

function App() {
  const [levelsEnabled, setLevelsEnabled] = useState([true, false, false, false, false, false]);


  return (
    <>
      <LevelProvider.Provider
        value={{
          levelsEnabled, setLevelsEnabled
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