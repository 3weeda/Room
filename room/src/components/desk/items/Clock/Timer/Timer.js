import React from 'react';
import classes from './Timer.css'

const Timer = (props) => {
    return (
        <div className={props.visible ? classes.Timer : classes.hide}>
            <h1>Timer</h1>
        </div>
    );
};

export default Timer;