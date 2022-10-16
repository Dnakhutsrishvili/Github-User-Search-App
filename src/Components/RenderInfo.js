import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./RenderInfo.module.css";
import location from "../assets/images/icon-location.svg";
import website from "../assets/images/icon-website.svg";
import twitter from "../assets/images/icon-twitter.svg";
import company from "../assets/images/icon-company.svg";

function RenderInfo(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `https://api.github.com/users/${props.search}`
        );
        setData(response);
        if (response) {
          props.setError(false);
        }
      } catch (error) {
        console.error(error.message);
        if (error.message) {
          props.setError(true);
        }
      }
    };

    fetchData();
  }, [props.search]);

  const date = new Date(data.created_at).toLocaleDateString("sq-AL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={props.mode ? classes.container : classes.containerDark}>
      <div className={classes.profile}>
        <div className={classes.profilePic}>
          <img
            className={classes.avatar}
            src={data.avatar_url}
            alt="avatar"
          ></img>
        </div>
        <div className={classes.profileInfo}>
          <p className={props.mode ? classes.name : classes.nameDark}>
            {data.name === null ? data.login.substring(0) : data.name}
          </p>
          <p className={classes.user}>@{data.login}</p>
          <p className={props.mode ? classes.date : classes.dateDark}>
            Joined {date}
          </p>
        </div>
      </div>
      <div className={classes.infoContainer}>
        {data.bio === null ? (
          <p className={props.mode ? classes.info : classes.infoDark}>
            This profile has no bio
          </p>
        ) : (
          <p className={props.mode ? classes.info : classes.infoDark}>
            {data.bio}
          </p>
        )}
      </div>
      <div
        className={
          props.mode
            ? classes.folooweresConteiner
            : classes.folooweresConteinerDark
        }
      >
        <div className={classes.titles}>
          <p className={props.mode ? classes.title : classes.titleDark}>
            Repos
          </p>
          <p className={props.mode ? classes.title : classes.titleDark}>
            Followers
          </p>
          <p className={props.mode ? classes.title : classes.titleDark}>
            Following
          </p>
        </div>
        <div className={classes.dataFollowers}>
          <p className={props.mode ? classes.titleData : classes.titleDataDark}>
            {data.public_repos}
          </p>
          <p className={props.mode ? classes.titleData : classes.titleDataDark}>
            {data.followers}
          </p>
          <p className={props.mode ? classes.titleData : classes.titleDataDark}>
            {data.following}
          </p>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.iconsParent}>
          <img
            style={data.location === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.icon : classes.iconDark}
            src={location}
            alt="location"
          ></img>
          <img
            style={data.blog === "" ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.icon : classes.iconDark}
            src={website}
            alt="website"
          ></img>
          <img
            style={data.twitter_username === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.icon : classes.iconDark}
            src={twitter}
            alt="twitter"
          ></img>
          <img
            style={data.company === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.icon : classes.iconDark}
            src={company}
            alt="company"
          ></img>
        </div>
        <div className={classes.iconsDataParent}>
          <p
            style={data.location === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.iconData : classes.iconDataDark}
          >
            {data.location === null ? "Not Available" : data.location}
          </p>
          <a
            href={data.blog}
            style={data.blog === "" ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.iconData : classes.iconDataDark}
          >
            {data.blog === "" ? "Not Available" : data.blog}
          </a>

          <a
            href={data.twitter_username}
            style={data.twitter_username === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.iconData : classes.iconDataDark}
          >
            {data.twitter_username === null
              ? "Not Available"
              : data.twitter_username}
          </a>
          <a
            href={`https://github.com/github`}
            style={data.company === null ? { opacity: "0.3" } : {}}
            className={props.mode ? classes.iconData : classes.iconDataDark}
          >
            {data.company === null ? "Not Available" : data.company}
          </a>
        </div>
      </div>
    </div>
  );
}

export default RenderInfo;
