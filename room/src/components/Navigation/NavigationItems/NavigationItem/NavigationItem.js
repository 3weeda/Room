import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';
import nightModeClasses from './NavigationItemNightMode.css';

const NavigationItem = (props) => (
    <li className={props.nightMode ? nightModeClasses.NavigationItem : classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={props.nightMode ? nightModeClasses.active : classes.active}>{props.children}</NavLink>
    </li>
);

export default NavigationItem;