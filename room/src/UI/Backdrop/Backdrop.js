import React from 'react';
import classes from './Backdrop.css'
const Backdrop = (props) => {
    return (
        props.visible ?
        <div 
        className={classes.Backdrop}
        onClick={props.clicked}
        // title="close"
        >
             
        </div> : null
    );
};

export default Backdrop;