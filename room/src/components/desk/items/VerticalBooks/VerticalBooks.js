import React from "react";
import ReactSVG from "react-svg";
import svg from "../../../../assets/svg/6-verticleBooks.svg";
import classes from "./VerticalBooks.css";
import Modal from "../../../../UI/Modal/Modal";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";

const VerticalBooks = props => (
  <Auxiliary>
    <div className={classes.VerticalBooks} onClick={props.zoomIn}>
      <ReactSVG src={svg} svgStyle={{ width: 60 }} />
    </div>
    <Modal
      visible={props.elementZoomed}
      closeModal={props.zoomOut}
      nightMode="true"
      width="600px"
      left="calc(50% - 300px)"
    >
      <div style={{ color: "white" }}>
        <p>Shelf Books</p>
      </div>
    </Modal>
  </Auxiliary>
);
export default VerticalBooks;
