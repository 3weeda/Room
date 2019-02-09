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
    }

    hideSideDrawerHandler = () => {
        this.setState({ visible: false })
    }

    toggleMenuHandler = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar
                    toggle={this.toggleMenuHandler}
                    transparent={this.props.transparent}
                    nightMode={this.props.nightMode}
                    showSignup={this.props.onSignup}
                    showSignin={this.props.onLogIn}
                    isAuth={this.props.isAuthenticated}
                    logout={this.props.onLogout} />
                <SideDrawer
                    toggle={this.toggleMenuHandler}
                    open={this.state.visible}
                    closed={this.hideSideDrawerHandler}
                    nightMode={this.props.nightMode}
                    showSignup={this.props.onSignup}
                    showSignin={this.props.onLogIn}
                    isAuth={this.props.isAuthenticated}
                    logout={this.props.onLogout} />
                <Auth
                    modalVisible={this.props.modalVisible}
                    closeModal={this.props.onCloseModal}
                    isSignup={this.props.isSignup}
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
        nightMode: state.nightMode.nightMode,
        modalVisible: state.auth.modalVisible,
        isSignup: state.auth.isSignup,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleNightMode: () => dispatch(actionCreators.toggleNightMode()),
        onSignup: () => dispatch(actionCreators.signupOn()),
        onLogIn: () => dispatch(actionCreators.loginOn()),
        onCloseModal: () => dispatch(actionCreators.modalOff()),
        onLogout: () => dispatch(actionCreators.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);