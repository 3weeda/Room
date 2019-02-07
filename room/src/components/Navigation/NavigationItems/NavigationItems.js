import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import Button from '../../../UI/Button/Button';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem nightMode={props.nightMode} exact link="/">Home</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/tour">How It Works</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/plans">Plans</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/about">About Us</NavigationItem>
            <Button
                btnType={props.nightMode ? "LoginNightMode" : "Login"}
                clicked={props.showSignin}>Log in</Button>
            <Button
                btnType={props.nightMode ? "SquareNightMode" : "Square"}
                clicked={props.showSignup}>Sign up</Button>
        </ul>
    );
};

export default NavigationItems;