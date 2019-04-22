import React, { Component } from 'react';
import ReactSVG from "react-svg";
import { BrowserRouter } from 'react-router-dom'
import svg from "../../../../assets/svg/6-verticleBooks.svg";
import Applications from "../../../../hoc/Applications/Applications"
import classes from "./VerticalBooksApps.css";
import GoodreadsLibrary from "../../items/VerticalBooks/GoodreadsLibrary/GoodreadsLibrary"


class verticalBooksApps extends Component {
    render() {
        const appSvg = (<ReactSVG src={svg} svgStyle={{ width: "250px" }} />);
        return (
            <Applications
                visible={this.props.visible}
                zoomOut={this.props.zoomOut}
                zoomIn={this.props.zoomIn}
                appClass={classes.VerticalBooks}
                AppsClassName={classes.Apps}
                ThumbsClassName={classes.Thumbnails}
                AppViewerClassName={classes.AppViewer}
                appSvg={appSvg}
                viewAppsCondition={this.state === this.baseState}
            >
                <BrowserRouter><GoodreadsLibrary /></BrowserRouter>
            </Applications>

        );
    }
}

export default verticalBooksApps;