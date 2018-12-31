import React from 'react';
import classes from './Toggle.css'
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Toggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.toggle} title={props.title}>
            <BurgerMenu fillColor={props.fillColor} visible={props.visible} />
        </div>
    );
};

export default Toggle;