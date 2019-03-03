import React, { Component } from "react";
import ReactSVG from "react-svg";
import svg from "../../../../assets/svg/15-computer.svg";
import classes from "./Computer.css";
import Modal from "../../../../UI/Modal/Modal";
import ToDoList from "./ToDoList/ToDoList";
import Notes from "./Notes/Notes";

class Computer extends Component {
  state = {
    appList: true,
    toDoList: false,
    notes: false,
    calculator: false,
    games: false,
    goals: false
  };
  baseState = this.state;

  ShowToDoListHandler = () => {
    this.setState({ toDoList: true, appList: false });
  };
  ShowNotesHandler = () => {
    this.setState({ notes: true, appList: false });
  };
  ShowCalcHandler = () => {
    this.setState({ calculator: true, appList: false });
  };
  ShowGamesHandler = () => {
    this.setState({ games: true, appList: false });
  };
  ShowGoalsHandler = () => {
    this.setState({ goals: true, appList: false });
  };
  backToListHandler = () => {
    this.setState(this.baseState);
  };
  closeModal = () => {
    this.props.zoomOut();
    setTimeout(() => {
      this.backToListHandler();
    }, 500);
  };
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.Computer} onClick={this.props.zoomIn}>
          <ReactSVG src={svg} svgStyle={{ width: "170" }} />
        </div>
        <Modal
          visible={this.props.elementZoomed}
          closeModal={this.closeModal}
          nightMode={this.props.nightMode}
          width="800px"
          left="calc(50% - 400px)"
        >
          <div className={classes.ComputerApps}>
            <ul
              className={this.state.appList ? classes.AppsList : classes.hide}
            >
              <li onClick={this.ShowToDoListHandler}>
                <div className={classes.FileParent}>
                  <div className={classes.file} />
                </div>
                <div>
                  <p>To-do list</p>
                </div>
              </li>
              <li onClick={this.ShowNotesHandler}>
                <div className={classes.FileParent}>
                  <div className={classes.file} />
                </div>
                <div>
                  <p>Notes</p>
                </div>
              </li>
              <li onClick={this.ShowCalcHandler}>
                <div className={classes.FileParent}>
                  <div className={classes.file} />
                </div>
                <div>
                  <p>Calculator</p>
                </div>
              </li>
              <li onClick={this.ShowGamesHandler}>
                <div className={classes.FileParent}>
                  <div className={classes.file} />
                </div>
                <div>
                  <p>Games</p>
                </div>
              </li>
              <li onClick={this.ShowGoalsHandler}>
                <div className={classes.FileParent}>
                  <div className={classes.file} />
                </div>
                <div>
                  <p>Goals</p>
                </div>
              </li>
            </ul>
            <ToDoList
              visible={this.state.toDoList}
              backToList={this.backToListHandler}
            />
            <Notes
              visible={this.state.notes}
              backToList={this.backToListHandler}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Computer;
