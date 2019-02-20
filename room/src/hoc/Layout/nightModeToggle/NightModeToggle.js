import React from 'react';
import classes from './NightModeToggle.css';

const NightModeToggle = (props) => {
    return (
        <div className={classes.toggleWrapper} title="Night Mode">
            <input type="checkbox" className={classes.dn} id="dn" onChange={props.clicked}  checked={props.nightMode} />
            <label htmlFor="dn" className={classes.toggle}>
                <span className={classes.toggle__handler}>
                    <span className={[classes.crater, classes.crater1].join(' ')}></span>
                    <span className={[classes.crater, classes.crater2].join(' ')}></span>
                    <span className={[classes.crater, classes.crater3].join(' ')}></span>
                </span>
                <span className={[classes.star, classes.star1].join(' ')}></span>
                <span className={[classes.star, classes.star2].join(' ')}></span>
                <span className={[classes.star, classes.star3].join(' ')}></span>
                <span className={[classes.star, classes.star4].join(' ')}></span>
                <span className={[classes.star, classes.star5].join(' ')}></span>
                <span className={[classes.star, classes.star6].join(' ')}></span>
            </label>
        </div>
    );
};

export default NightModeToggle;