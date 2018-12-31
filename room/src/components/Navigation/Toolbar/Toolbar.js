import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle';

const Toolbar = (props) => {
    return (
        <header className={[classes.Toolbar,
        props.transparent ? classes.Transparent : null,
        props.nightMode ? classes.NightMode : null].join(' ')}>
            <Toggle
                toggle={props.toggle}
                className={classes.Toggle}
                fillColor={props.nightMode ? "white" : "#111319"}
            />
            <div>
                <Logo nightMode={props.nightMode}/>
            </div>
            <nav>
                <NavigationItems nightMode={props.nightMode}/>
            </nav>
        </header>
    );
};

export default Toolbar;