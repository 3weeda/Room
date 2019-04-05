import React from "react";
import classes from "./Timer.css";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";

class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }
  render() {
    const { time } = this.props;
    return (
      <div className={classes.displayedTime}>
        <h1>{this.format(time)}</h1>
      </div>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const strSeconds = this.refs.seconds.value;
    const strMinutes = this.refs.minutes.value;
    const strHours = this.refs.hours.value;
    if (strSeconds.match(/[0-9]/) && strMinutes.match(/[0-9]/) && strHours.match(/[0-9]/)) {
      this.refs.seconds.value = "";
      this.refs.minutes.value = "";
      this.refs.hours.value = "";
      this.props.onSetCountdown(
        parseInt(strHours * 3600, 10) +
          parseInt(strMinutes  * 60, 10) +
          parseInt(strSeconds, 10)
      );
    }
  }
  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <div className={classes.Containers}>
          <input
            className={classes.Container}
            type="text"
            ref="hours"
			placeholder="hours"
          />
          <input
            className={classes.Container}
            type="text"
            ref="minutes"
			placeholder="minutes"
          />
          <input
            className={classes.Container}
            type="text"
            ref="seconds"
            placeholder="seconds"
          />
        </div>
        <input
          className={
            this.props.visible
              ? [classes.Btn, classes.startBtn].join(" ")
              : classes.hide
          }
          type="submit"
          value="Start"
          onKeyDown={this.handleKeyDown}
        />
      </form>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClickHandler}
        className={this.props.className}
      >
        {this.props.label}
      </button>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      running: false,
      resume: false,
      visible: true
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.running !== prevState.running) {
      switch (this.state.running) {
        case true:
          this.handleStart();
          break;
        default:
      }
    }
  }

  handleStart() {
    this.setState({ visible: false });
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
      if (newCount === 0) {
        this.setState({ visible: true, running: false });
      }
    }, 1000);
  }

  handleStop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.setState({ running: false, resume: true });
    }
  }
  handleResume() {
    if (this.timer) {
      this.setState({ running: true, resume: false });
    }
  }

  handleReset() {
    clearInterval(this.timer);
    this.setState({ count: 0, visible: true, running: false, resume: false });
  }

  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    });
  }

  render() {
    const { count } = this.state;

    let button1 = (
      <Button
        className={[classes.Btn, classes.stopBtn].join(" ")}
        label="stop"
        onClickHandler={this.handleStop.bind(this)}
      />
    );
    if (this.state.resume) {
      button1 = (
        <Button
          className={classes.Btn}
          label="resume"
          onClickHandler={this.handleResume.bind(this)}
        />
      );
    }
    let buttons = null;
    if (!this.state.visible) {
      buttons = (
        <Auxiliary>
          {button1}
          <Button
            className={classes.Btn}
            label="reset"
            onClickHandler={this.handleReset.bind(this)}
          />
        </Auxiliary>
      );
    }
    return (
      <div className={this.props.visible ? classes.Timer : classes.hide}>
        <Clock time={count} />
        <Input
          visible={this.state.visible}
          onSetCountdown={this.handleCountdown.bind(this)}
        />
        {buttons}
      </div>
    );
  }
}

export default Timer;
