import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Desk from '../../components/desk/items/Desk/Desk';
import classes from './Room.css';
import Computer from '../../components/desk/items/Computer/Computer';
import Cactus from '../../components/desk/items/Cactus/Cactus';
import Floor from '../../components/desk/items/Floor/Floor';
import FloorShadow from '../../components/desk/items/FloorShadow/FloorShadow';
import Speaker from '../../components/desk/items/Speaker/Speaker';
import HorizontalBooks from '../../components/desk/items/HorizontalBooks/HorizontalBooks';
import Plant from '../../components/desk/items/Plant/Plant';
import Chair from '../../components/desk/items/Chair/Chair';
import Shelf from '../../components/desk/items/Shelf/Shelf';
import VerticalBooks from '../../components/desk/items/VerticalBooks/VerticalBooks';
import Kandle from '../../components/desk/items/Kandle/Kandle';
import Vase from '../../components/desk/items/Vase/Vase';
import Clock from '../../components/desk/items/Clock/Clock';
import Windo from '../../components/desk/items/Window/Window';
import Lamp from '../../components/desk/items/Lamp/Lamp';
import LampLight from '../../components/desk/items/LampLight/LampLight';
import Layout from '../../hoc/Layout/Layout';

class Room extends Component {
    state = {
        light: false,
    }

    lightSwitchHandler = () => {
        this.setState(prevState => {
            return { light: !prevState.light };
        })
    }

    render() {
        return (
            <Layout>
                <div className={classes.Container}>
                    <div className={classes.Room}>
                        <Desk />
                        <Computer />
                        <Cactus />
                        <Floor />
                        <FloorShadow />
                        <Speaker />
                        <HorizontalBooks />
                        <Plant />
                        <Chair />
                        <Shelf />
                        <VerticalBooks />
                        <Kandle />
                        <Vase />
                        <Clock
                            size={240}
                            hourFormat="roman"
                            timeFormat="standard"
                            nightMode={this.props.nightMode}
                            zoomIn={this.props.onZoomIn}
                            zoomOut={this.props.onZoomOut}
                            elementZoomed={this.props.elementZoomed} />
                        <Windo />
                        <Lamp lightSwitch={this.lightSwitchHandler} />
                        <LampLight light={this.state.light} />
                    </div>
                    {/* <div className={classes.d}>
                        <p>sddsddddddddddddd</p>
                        <p>sddsddddddddddddd</p>
                        <p>sddsddddddddddddd</p>
                        <p>sddsddddddddddddd</p>
                    </div> */}
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        nightMode: state.nightMode.nightMode,
        elementZoomed: state.room.elementZoomed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onZoomIn: () => dispatch(actionCreators.zoomIn()),
        onZoomOut: () => dispatch(actionCreators.zoomOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
