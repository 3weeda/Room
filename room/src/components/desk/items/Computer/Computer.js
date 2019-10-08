import React, { Component } from "react";
import ReactSVG from "react-svg";
import svg from "../../../../assets/svg/15-computer.svg";
import classes from "./Computer.css";
import Tag from "../../../../Shared/Tag/Tag";

class Computer extends Component {
  state = {
    isHovering: false
  };
  HoverOn = () => {
    this.setState({ isHovering: true });
  };
  HoverOff = () => {
    this.setState({ isHovering: false });
  }
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.Computer} onClick={this.props.zoomIn}>
          <ReactSVG
            src={svg}
            svgStyle={{ width: "170" }}
            onMouseEnter={this.HoverOn}
            onMouseLeave={this.HoverOff}
          />
          {this.state.isHovering && (
            <Tag className={classes.tag}>ToDoList, Notes, Calculator, Habits</Tag>
          )}
        </div>
      </div>
    );
  }
}

export default Computer;
