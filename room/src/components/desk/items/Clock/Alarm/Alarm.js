import React from 'react';
import classes from './Alarm.css';

export default class AlarmClock extends React.Component {
    constructor() {
        super();
        this.state = {
            currentTime: '',
            alarmTime: ''
        };
        this.setAlarmTime = this.setAlarmTime.bind(this);
    }

    componentDidMount() {
        this.clock = setInterval(
            () => this.setCurrentTime(),
            1000
        )
        this.interval = setInterval(
            () => this.checkAlarmClock(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.clock);
        clearInterval(this.interval);
    }

    setCurrentTime() {
        this.setState({
            currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
        });
    }

    setAlarmTime(event) {
        event.preventDefault();
        let inputAlarmTimeModified = event.target.value + ':00'
        if (inputAlarmTimeModified > 12) {
            inputAlarmTimeModified = inputAlarmTimeModified - 12;
        }
        this.setState({
            alarmTime: inputAlarmTimeModified
        })
    }

    checkAlarmClock() {
        if (this.state.alarmTime === 'undefined' || !this.state.alarmTime) {
            this.alarmMessage = "Set Alarm:";
        } else {
            this.alarmMessage = "Alarm is set for: " + this.state.alarmTime;
            if (this.state.currentTime === this.state.alarmTime) {
                alert("its time!");
            } else {
                console.log("not yet");
            }
        }
    }

    render() {
        return (
            <div className={this.props.visible ? classes.Alarm : classes.hide}>
                <h2>It is {this.state.currentTime}.
          </h2>
                <h2>{this.alarmMessage}
                </h2>
                <form>
                    <input className={classes.Input} type="time" onChange={this.setAlarmTime}></input>
                </form>
            </div>
        );
    }
}
