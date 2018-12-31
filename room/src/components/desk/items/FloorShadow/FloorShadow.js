import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/9-floorShadow.svg';
import classes from './FloorShadow.css'

const FloorShadow = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 510 }}
            svgClassName={classes.Floor} />
    </div>
);
export default FloorShadow;