import React from "react";
import classes from "./ClockApps.css";
import Alarm from "../../items/Clock/Alarm/Alarm";
import Stopwatch from "../../items/Clock/Stopwatch/Stopwatch";
import Timer from "../../items/Clock/Timer/Timer";
import Clock from "../../items/Clock/Clock";
import Backdrop from "../../../../UI/Backdrop/Backdrop";

class ClockApps extends React.Component {
  state = {
    currentTime: "",
    alarm: false,
    stopwatch: false,
    timer: false
  };

  showAlarmHandler = () => {
    this.setState({ alarm: true, stopwatch: false, timer: false });
  };
  showStopwatchHandler = () => {
    this.setState({ alarm: false, stopwatch: true, timer: false });
  };
  showTimerHandler = () => {
    this.setState({ alarm: false, stopwatch: false, timer: true });
  };

  componentDidMount() {
    this.clock = setInterval(() => this.setCurrentTime(), 1000);
  }
  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: true })
    });
  }

  render() {
    return (
      <div className={this.props.visible ? classes.box : classes.hide}>
        <Backdrop visible={this.props.visible} clicked={this.props.zoomOut} />
        <div className={classes.Watch}>
          <Clock
            size={700}
            hourFormat="roman"
            timeFormat="standard"
            boxClassName={classes.ClockBox}
            className={classes.Clock}
          />
          <div className={classes.Time}>
            <h2>{this.state.currentTime}</h2>
          </div>
        </div>
        <div className={classes.Apps} style={{ color: "white" }}>
          <ul>
            <li
              className={classes.App}
              onClick={this.showAlarmHandler}
              style={{
                backgroundColor: this.state.alarm ? "#444b61" : null
              }}
            >
              Alarm
            </li>
            <li
              className={classes.App}
              onClick={this.showStopwatchHandler}
              style={{
                backgroundColor: this.state.stopwatch ? "#444b61" : null
              }}
            >
              Stopw
            </li>
            <li
              className={classes.App}
              onClick={this.showTimerHandler}
              style={{
                backgroundColor: this.state.timer ? "#444b61" : null
              }}
            >
              Timer
            </li>
          </ul>
          <div
            className={
              this.state.alarm || this.state.stopwatch || this.state.timer ? classes.AppViewer : classes.hide
            }
          >
            <Alarm visible={this.state.alarm} />
            <Stopwatch visible={this.state.stopwatch} />
            <Timer visible={this.state.timer} />
          </div>
        </div>
      </div>
    );
  }
}
export default ClockApps;
