import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/4-vase.svg';
import classes from './Vase.css'

const Vase = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 75 }} />
    </div>
);
export default Vase;