import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import RenderInfo from "./Components/RenderInfo";

export const ThemeContext = React.createContext("cet");

function App() {
  const [mode, setMode] = useState(true);
  const [search, setSearch] = useState("octocat");
  const [error, setError] = useState(false);

  mode
    ? (document.body.style.backgroundColor = "#F6F8FF")
    : (document.body.style.backgroundColor = "#141D2F");

  return (
    <div className="font-face-gm">
      <ThemeContext.Provider value={error}>
        <Header mode={mode} setMode={setMode}></Header>
        <SearchBar mode={mode} setSearch={setSearch}></SearchBar>

        <RenderInfo
          setError={setError}
          mode={mode}
          search={search}
        ></RenderInfo>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
