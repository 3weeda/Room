import React from "react";
import classes from "./Stopwatch.css";

const formattedSeconds = sec =>
  Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2);

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.state = {
      secondsElapsed: 0,
      laps: [],
      lastClearedIncrementer: null,
      swap: false
    };
    this.incrementer = null;
  }

  handleStartClick() {
    this.setState({ swap: true });
    this.incrementer = setInterval(
      () =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1
        }),
      1000
    );
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer,
      swap: false
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      secondsElapsed: 0,
      laps: [],
      swap: false
    });
  }

  handleLabClick() {
    this.setState({
      laps: this.state.laps.concat([this.state.secondsElapsed])
    });
  }
  // Cannot read property 'handleStartClick' of undefined
  onKeyDown(e) {
    if (e.key === "Enter") {
      this.handleStartClick();
    }
  }

  render() {
    return (
      <div className={this.props.visible ? classes.Stopwatch : classes.hide}>
        <h1 className={classes.stopwatchTimer}>
          {formattedSeconds(this.state.secondsElapsed)}
        </h1>

        {!this.state.swap &&
        (this.state.secondsElapsed === 0 ||
        this.incrementer === this.state.lastClearedIncrementer) ? (
          <Button
            className={[classes.Btn, classes.startBtn].join(" ")}
            onClick={this.handleStartClick}
            // onKeyDown={this.onKeyDown}
          >
            {this.state.secondsElapsed === 0 ? 'start' : 'resume'}
          </Button>
        ) : (
          <Button
            className={[classes.Btn, classes.stopBtn].join(" ")}
            onClick={this.handleStopClick.bind(this)}
          >
            stop
          </Button>
        )}
        {this.state.swap ||
        (this.state.secondsElapsed !== 0 &&
          this.incrementer !== this.state.lastClearedIncrementer) ? (
          <Button
            className={classes.Btn}
            onClick={this.handleLabClick.bind(this)}
          >
            lab
          </Button>
        ) : null}

        {this.state.swap ||
        (this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer) ? (
          <Button
            className={classes.Btn}
            onClick={this.handleResetClick.bind(this)}
          >
            reset
          </Button>
        ) : null}

        <ul className={classes.stopwatchLaps}>
          {this.state.laps.map((lap, i) => (
            <li className={classes.stopwatchLap} key={i}>
              <strong>{i + 1}:</strong> {formattedSeconds(lap)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const Button = props => (
  <button
    type="button"
    {...props}
    className={props.className}
    onKeyDown={props.onKeyDown}
  />
);

export default Stopwatch;
