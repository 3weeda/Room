import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/index';
// import NightModeToggle from '../../../hoc/Layout/nightModeToggle/NightModeToggle'


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
                <Logo nightMode={props.nightMode} />
            </div>
            <nav>
                <NavigationItems 
                nightMode={props.nightMode}
                showSignup={props.showSignup}
                showSignin={props.showSignin} />
            </nav>
            {/* <NightModeToggle
                clicked={props.onToggleNightMode}
                nightMode={props.nightMode} /> */}
        </header>
    );
};

const mapStateToProps = state => {
    return {
        nightMode: state.room.nightMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleNightMode: () => dispatch(actionCreators.toggleNightMode())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);