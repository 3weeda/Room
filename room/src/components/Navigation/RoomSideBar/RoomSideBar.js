import React from "react";
import classes from "./RoomSideBar.css";
import { NavLink } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import NightModeToggle from "../../../hoc/Layout/nightModeToggle/NightModeToggle";

const RoomSideBar = props => {
  return (
    <div
      className={
        !props.nightMode
          ? classes.RoomSideBar
          : [classes.RoomSideBar, classes.NightMode].join(" ")
      }
    >
      <ul>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/tour">Tour</NavLink>
        <NavLink to="/plans">Plans</NavLink>
        <NavLink to="/about">About</NavLink>
        <Button btnType="Danger" clicked={props.logout}>
          Log out
        </Button>
      </ul>
      <NightModeToggle
          clicked={props.clicked}
          nightMode={props.nightMode}
          className={classes.SideBarPosition}
          toggleClassName={classes.ToggleHandler}
        />
    </div>
  );
};

export default RoomSideBar;
