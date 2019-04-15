import React from "react";
import classes from "./ClockApps.css";
import Alarm from "../../items/Clock/Alarm/Alarm";
import Stopwatch from "../../items/Clock/Stopwatch/Stopwatch";
import Timer from "../../items/Clock/Timer/Timer";
import Clock from "../../items/Clock/Clock";
import Applications from "../../../../hoc/Applications/Applications"
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";

// const apps = [
//   { app: "Alarm", state: "alarm" },
//   { app: "Stopw", state: "stopwatch" },
//   { app: "Timer", state: "timer" },
// ];

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
    const appSvg = (
      <Auxiliary>
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
      </Auxiliary>
    );
    let appThumbnails = (
      <Auxiliary>
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
      </Auxiliary>
    )
    return (
      <Applications
        visible={this.props.visible}
        zoomOut={this.props.zoomOut}
        zoomIn={this.props.zoomIn}
        appClass={classes.Watch}
        appSvg={appSvg}
        appThumbnails={appThumbnails}
        viewAppsCondition={!this.state.alarm && !this.state.stopwatch && !this.state.timer}
      >
        <Alarm visible={this.state.alarm} />
        <Stopwatch visible={this.state.stopwatch} />
        <Timer visible={this.state.timer} />
      </Applications>
    );
  }
}
export default ClockApps;
