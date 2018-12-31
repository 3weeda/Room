import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/13-horizontalBooks.svg';
import classes from './HorizontalBooks.css';

const HorizontalBooks = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 160 }} />
    </div>
);
export default HorizontalBooks;