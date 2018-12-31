import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/14-cactus.svg';
import classes from './Cactus.css'

const Cactus = () => (
    <div className={classes.Cactus}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: "45" }} />
    </div>
);
export default Cactus;

