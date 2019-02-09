import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Toggle from './Toggle/Toggle';

const SideDrawer = (props) => {
    let totalClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        totalClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop visible={props.open} clicked={props.closed} />
            <div className={[totalClasses.join(' '),
            props.nightMode ? classes.NightMode : null].join(' ')}>
                <Toggle
                    toggle={props.toggle}
                    visible= "false"
                    className={classes.Toggle}
                    fillColor={props.nightMode ? "white" : "#111319"}
                    title="Close"
                />
                <div className={classes.Logo} onClick={props.closed}>
                    <Logo nightMode={props.nightMode} />
                </div>
                <nav onClick={props.closed}>
                    <NavigationItems 
                    nightMode={props.nightMode}
                    showSignup={props.showSignup}
                    showSignin={props.showSignin}
                    isAuth={props.isAuth}
                    logout={props.logout} />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;