import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/11-chair.svg';
import classes from './Chair.css'

const Chair = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 150 }}
            svgClassName={classes.Chair}/>
    </div>
);
export default Chair;