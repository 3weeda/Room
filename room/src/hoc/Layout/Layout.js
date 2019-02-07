import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import classes from './Layout.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import NightModeToggle from './nightModeToggle/NightModeToggle'
import Auth from '../../containers/Auth/Auth';

class Layout extends Component {
    state = {
        visible: false,
        modalVisible: false,
        isSignup: true
    }

    hideSideDrawerHandler = () => {
        this.setState({ visible: false })
    }

    toggleMenuHandler = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    signupHandler = () => {
        this.setState({ modalVisible: true, isSignup: true });
    }
    signinHandler = () => {
        this.setState({ modalVisible: true, isSignup: false })
    }
    closeModalHandler = () => {
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar
                    toggle={this.toggleMenuHandler}
                    transparent={this.props.transparent}
                    nightMode={this.props.nightMode}
                    showSignup={this.signupHandler}
                    showSignin={this.signinHandler} />
                <SideDrawer
                    toggle={this.toggleMenuHandler}
                    open={this.state.visible}
                    closed={this.hideSideDrawerHandler}
                    nightMode={this.props.nightMode}
                    showSignup={this.signupHandler}
                    showSignin={this.signinHandler} />
                <Auth
                    modalVisible={this.state.modalVisible}
                    closeModal={this.closeModalHandler}
                    isSignup={this.state.isSignup}
                    nightMode={this.props.nightMode} />

                <main className={classes.content}>
                    {this.props.children}
                    <NightModeToggle
                        clicked={this.props.onToggleNightMode}
                        nightMode={this.props.nightMode} />
                </main>
            </Auxiliary>

        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);