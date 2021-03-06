import React, { Component } from "react";
import ReactSVG from "react-svg";
import { connect } from 'react-redux';
import svg from "../../../../assets/svg/15-computer.svg";
import ToDoList from "../../items/Computer/ToDoList/ToDoList";
import Notes from "../../items/Computer/Notes/Notes";
import Calculator from "../../items/Computer/Calculator/Calculator";
import classes from "./ComputerApps.css";
import Applications from "../../../../hoc/Applications/Applications"

const apps = [
  { app: "Todo", number: "" },
  { app: "Notes", number: "1" },
  { app: "Calc", number: "2" },
  { app: "Habits", number: "3" },
  { app: "Study", number: "4" }
];

class ComputerApps extends Component {
  state = {
    visible: false,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  };
  baseState = this.state;

  ShowAppHandler = number => {
    this.baseStateHandler();
    this.setState({ ["visible" + number]: true });
  };
  baseStateHandler = () => {
    this.setState(this.baseState);
  };
  render() {
    const appSvg = (<ReactSVG src={svg} svgStyle={{ width: "85%" }} />);
    let appThumbnails = (
      apps.map(app => (
        <li
          key={app.number}
          onClick={() => this.ShowAppHandler(app.number)}
          style={{
            backgroundColor: this.state["visible" + app.number]
              ? "#444b61"
              : null
          }}
        >
          {app.app}
        </li>
      ))
    )
    return (
      <Applications
        visible={this.props.visible}
        zoomOut={this.props.zoomOut}
        zoomIn={this.props.zoomIn}
        appClass={classes.Computer}
        appSvg={appSvg}
        appThumbnails={appThumbnails}
        viewAppsCondition={this.state === this.baseState}
      >
        <ToDoList visible={this.state.visible} userId={this.props.userId} token={this.props.token} />
        <Notes visible={this.state.visible1} userId={this.props.userId} token={this.props.token} />
        <Calculator visible={this.state.visible2} />
      </Applications>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId
  }
}


export default connect(mapStateToProps)(ComputerApps);
