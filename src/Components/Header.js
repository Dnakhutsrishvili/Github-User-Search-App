import React from "react";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.parent}>
      <div>
        <h1 className={props.mode ? classes.title : classes.titleDark}>
          devfinder
        </h1>
      </div>
      <div
        onClick={() => {
          props.setMode(!props.mode);
        }}
        className={classes.flex}
      >
        <h2 className={props.mode ? classes.titleMode : classes.titleModeDark}>
          {props.mode ? "Dark" : "Light"}
        </h2>
        <img
          className={classes.img}
          src={props.mode ? moon : sun}
          alt="mode"
        ></img>
      </div>
    </header>
  );
}

export default Header;
