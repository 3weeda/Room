import React from "react";
import classes from "./Tag.css";

const Tag = props => {
  return (
    <div className={[classes.Tag, props.className].join(" ")}>
      <h2>{props.children}</h2>
      <div className={classes.Triangle} />
    </div>
  );
};

export default Tag;
