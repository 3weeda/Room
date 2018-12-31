import React from 'react';
import ReactSVG from 'react-svg';
import svg1 from '../../../../../assets/svg/1-burgerMenu.svg';
import svg2 from '../../../../../assets/svg/23-xMark.svg';

const BurgerMenu = (props) => (
    <ReactSVG
    src={props.visible? svg2 : svg1}
    svgStyle={{ width: 30, fill: props.fillColor}} />
); 
export default BurgerMenu;