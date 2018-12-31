import React, { Component } from 'react';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        visible: false,
        nightMode: false
    }

    hideSideDrawerHandler = () => {
        this.setState({ visible: false })
    }

    toggleMenuHandler = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    toggleNightModeHandler = () => {
        this.setState(prevState => ({
            nightMode: !prevState.nightMode
        }))
    }
    componentDidMount() {
        console.log(this.state.nightMode);
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar
                    toggle={this.toggleMenuHandler}
                    transparent={this.props.transparent}
                    nightMode={this.state.nightMode} />
                <SideDrawer
                    toggle={this.toggleMenuHandler}
                    open={this.state.visible}
                    closed={this.hideSideDrawerHandler}
                    nightMode={this.state.nightMode} />
                <main className={classes.content}>
                    {this.props.children}
                    {/* <button className={classes.button} onClick={this.toggleNightModeHandler}>Night Mode</button> */}
                </main>
            </Auxiliary>

        );
    }
}

export default Layout;