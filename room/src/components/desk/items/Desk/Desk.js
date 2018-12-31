import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/12-desk.svg';
import classes from './Desk.css'

const Desk = () => (
    <div className={classes.Desk}>
        <ReactSVG
            src={svg}
            // svgStyle={{ width: "35%" }}
            svgStyle={{ width: "400" }} />
    </div>
);
export default Desk;