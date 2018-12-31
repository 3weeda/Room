import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/16-speaker.svg';
import classes from './Speaker.css'
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

const Speaker = () => (
    <Auxiliary>
        <div className={classes.box1}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 45 }}/>
        </div>
        <div className={classes.box2}>
            <ReactSVG
                src={svg}
                svgStyle={{ width: 45 }}/>
        </div>
    </Auxiliary>
);
export default Speaker;