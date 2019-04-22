import React from "react";
import ReactSVG from "react-svg";
import svg from "../../../../assets/svg/6-verticleBooks.svg";
import classes from "./VerticalBooks.css";

const VerticalBooks = props => (
  <div className={classes.box}>
    <div className={classes.VerticalBooks} onClick={props.zoomIn}>
      <ReactSVG src={svg} svgStyle={{ width: 60 }} />
    </div>
  </div>
);
export default VerticalBooks;
