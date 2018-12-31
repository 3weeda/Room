import React from 'react';
import ReactSVG from 'react-svg';
import svg from '../../../../assets/svg/6-verticleBooks.svg';
import classes from './VerticalBooks.css'

const VerticalBooks = () => (
    <div className={classes.box}>
        <ReactSVG
            src={svg}
            svgStyle={{ width: 60 }} />
    </div>
);
export default VerticalBooks;