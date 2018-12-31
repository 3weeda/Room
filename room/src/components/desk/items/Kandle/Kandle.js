import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/5-kandle.svg';
import classes from './Kandle.css'

const Kandle = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 35 }} />
    </div>
);
export default Kandle;