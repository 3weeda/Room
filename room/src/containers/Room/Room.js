import React, { Component } from 'react';
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
                <Clock size={240} hourFormat="roman" timeFormat="standard" />
                <Windo />
                <Lamp lightSwitch={this.lightSwitchHandler} />
                <LampLight light={this.state.light} />
            </div>
        );
    }
}

export default Room;