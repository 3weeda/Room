import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/19-lamp.svg';
import classes from './Lamp.css'

const Lamp = (props) => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 120 }}
            svgClassName={classes.Lamp}
            onClick={props.lightSwitch} />
    </div>
);
export default Lamp;