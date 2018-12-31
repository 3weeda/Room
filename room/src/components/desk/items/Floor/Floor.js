import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/8-floor.svg';
import classes from './Floor.css'

const Floor = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 600 }}
            svgClassName={classes.Floor} />
    </div>
);
export default Floor;