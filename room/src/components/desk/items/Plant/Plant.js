import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/10-plant.svg';
import classes from './Plant.css'

const Plant = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 135 }} />
    </div>
);
export default Plant;