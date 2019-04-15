import React from 'react';
import classes from "./Applications.css";
import Backdrop from '../../UI/Backdrop/Backdrop';

const Applications = (props) => {
    return (
        <div className={props.visible ? classes.box : classes.hide}>
            <Backdrop visible={props.visible} clicked={props.zoomOut} />
            <div className={props.appClass} onClick={props.zoomIn}>
                {props.appSvg}
            </div>
            <div className={classes.Apps}>
                <ul className={classes.AppThumbnails}>
                    {props.appThumbnails}
                </ul>
                <div className={props.viewAppsCondition ? classes.hide : classes.AppViewer}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Applications;