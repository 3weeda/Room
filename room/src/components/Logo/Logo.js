import React from 'react';
import classes from './Logo.css';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <div >
            <Link to="/" className={[classes.Logo,
            props.nightMode ? classes.NightMode : null].join(' ')}><h1>ROOM</h1></Link>
            {/* <Link to="/" className={classes.Logo}><h1 style={{color: props.color}}>ROOM</h1></Link> */}
        </div>
    );
};

export default Logo;