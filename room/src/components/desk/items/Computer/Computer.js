import React from 'react'
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/15-computer.svg';
import classes from './Computer.css'

const Computer = () => (
    <div className={classes.Computer}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: "170" }} />
    </div>
);
export default Computer;

