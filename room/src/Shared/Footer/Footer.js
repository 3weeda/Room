import React from 'react';
import classes from './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.InnerFooter}>
                <ul>
                    <li><Link to="/tour">How it works</Link></li>
                    <li><Link to="/plans">Plans</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/security">Security</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;