import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/18-window.svg';
import classes from './Window.css'

const Windo = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 250 }}
            svgClassName={classes.Window}/>
    </div>
);
export default Windo;