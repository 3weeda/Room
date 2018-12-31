import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/20-lampLight.svg';
import classes from './LampLight.css'

const LampLight = (props) => (
    <div className={classes.box}>
        {props.light ? <ReactSVG
            src={svg}
            svgStyle={{ width: 340 }} /> : null}

    </div>
);
export default LampLight;