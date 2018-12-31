import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import Button from '../../../UI/Button/Button';
import { Link } from 'react-router-dom';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem nightMode={props.nightMode} exact link="/">Home</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/tour">How It Works</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/plans">Plans</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/about">About Us</NavigationItem>
            <NavigationItem nightMode={props.nightMode} link="/login">Log In</NavigationItem>
            <Link to="/signup"><Button btnType= {props.nightMode ? "SquareNightMode" : "Square"}>Sign Up</Button></Link>
        </ul>
    );
};

export default NavigationItems;