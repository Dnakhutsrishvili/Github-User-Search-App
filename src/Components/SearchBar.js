import React, { useContext, useState } from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../assets/images/icon-search.svg";
import { ThemeContext } from "../App.js";

function SearchBar(props) {
  const [input, setInput] = useState("");
  const error = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      <input
        placeholder="Search GitHub username…"
        className={props.mode ? classes.searchBar : classes.searchBarDark}
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      {error && <p className={classes.error}>No results</p>}
      <img
        className={classes.searchIcon}
        src={searchIcon}
        alt="searchIcon"
      ></img>
      <button
        onClick={() => {
          props.setSearch(input);
        }}
        className={classes.btn}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
