import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/7-shelf.svg';
import classes from './Shelf.css'

const Shelf = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 150 }}/>
    </div>
);
export default Shelf;