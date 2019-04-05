import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";
import Desk from "../../components/desk/items/Desk/Desk";
import classes from "./Room.css";
import Computer from "../../components/desk/items/Computer/Computer";
import Cactus from "../../components/desk/items/Cactus/Cactus";
import Floor from "../../components/desk/items/Floor/Floor";
import FloorShadow from "../../components/desk/items/FloorShadow/FloorShadow";
import Speaker from "../../components/desk/items/Speaker/Speaker";
import HorizontalBooks from "../../components/desk/items/HorizontalBooks/HorizontalBooks";
import Plant from "../../components/desk/items/Plant/Plant";
import Chair from "../../components/desk/items/Chair/Chair";
import Shelf from "../../components/desk/items/Shelf/Shelf";
import VerticalBooks from "../../components/desk/items/VerticalBooks/VerticalBooks";
import Kandle from "../../components/desk/items/Kandle/Kandle";
import Vase from "../../components/desk/items/Vase/Vase";
import Clock from "../../components/desk/items/Clock/Clock";
import Windo from "../../components/desk/items/Window/Window";
import Lamp from "../../components/desk/items/Lamp/Lamp";
import LampLight from "../../components/desk/items/LampLight/LampLight";
import Layout from "../../hoc/Layout/Layout";
import StickyNotes from "../../components/desk/items/Computer/StickyNotes/StickyNotes";
import Plant2 from "../../components/desk/items/Plant2/Plant2";
import ComputerApps from "../../components/desk/apps/ComputerApps/ComputerApps";
import ClockApps from "../../components/desk/apps/ClockApps/ClockApps";

class Room extends Component {
  state = {
    light: false,
    visible: false,
    visible1: false,
    visible2: false
  };

  zoomInHandler = number => {
    this.setState({ ["visible" + number]: true });
  };
  zoomOutHandler = number => {
    this.setState({ ["visible" + number]: false });
  };
  lightSwitchHandler = () => {
    this.setState(prevState => {
      return { light: !prevState.light };
    });
  };

  render() {
    return (
      <Layout roomSideBar>
        <div className={classes.Container}>
          <div className={classes.Room}>
            <Desk />
            <Computer zoomIn={() => this.zoomInHandler("")} />
            <Cactus
              nightMode={this.props.nightMode}
              zoomIn={this.props.onCactusZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.cactus}
            />
            <Floor />
            <FloorShadow />
            <Speaker
              nightMode={this.props.nightMode}
              zoomIn={this.props.onSpeakerZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.speaker}
            />
            <HorizontalBooks
              nightMode={this.props.nightMode}
              zoomIn={this.props.onShelfBooksZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.shelfBooks}
            />
            <Plant
              nightMode={this.props.nightMode}
              zoomIn={this.props.onPlantZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.plant}
            />
            <Chair />
            <Shelf />
            <VerticalBooks
              nightMode={this.props.nightMode}
              zoomIn={this.props.onDeskBooksZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.deskBooks}
            />
            <Kandle
              nightMode={this.props.nightMode}
              zoomIn={this.props.onKandleZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.kandle}
            />
            <Vase
              nightMode={this.props.nightMode}
              zoomIn={this.props.onVaseZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.vase}
            />
            <Clock
              size={240}
              hourFormat="roman"
              timeFormat="standard"
              zoomIn={() => this.zoomInHandler("1")}
            />
            <Windo
              nightMode={this.props.nightMode}
              zoomIn={this.props.onWindowZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.window}
            />
            <Plant2
              nightMode={this.props.nightMode}
              zoomIn={this.props.onPlantZoomIn}
              zoomOut={this.props.onZoomOut}
              elementZoomed={this.props.plant}
            />
            <Lamp lightSwitch={this.lightSwitchHandler} />
            <LampLight light={this.state.light} />
            <StickyNotes count={50} />
          </div>
        </div>
        <div className={classes.Apps}>
          <ComputerApps
            visible={this.state.visible}
            zoomOut={() => this.zoomOutHandler("")}
          />
          <ClockApps
            visible={this.state.visible1}
            zoomOut={() => this.zoomOutHandler("1")}
          />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    nightMode: state.nightMode.nightMode,
    vase: state.room.vase,
    kandle: state.room.kandle,
    shelfBooks: state.room.shelfBooks,
    cactus: state.room.cactus,
    speaker: state.room.speaker,
    deskBooks: state.room.deskBooks,
    plant: state.room.plant,
    window: state.room.window
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onVaseZoomIn: () => dispatch(actionCreators.vaseZoomIn()),
    onKandleZoomIn: () => dispatch(actionCreators.kandleZoomIn()),
    onShelfBooksZoomIn: () => dispatch(actionCreators.shelfBooksZoomIn()),
    onCactusZoomIn: () => dispatch(actionCreators.cactusZoomIn()),
    onSpeakerZoomIn: () => dispatch(actionCreators.speakerZoomIn()),
    onDeskBooksZoomIn: () => dispatch(actionCreators.deskBooksZoomIn()),
    onPlantZoomIn: () => dispatch(actionCreators.plantZoomIn()),
    onWindowZoomIn: () => dispatch(actionCreators.windowZoomIn()),
    onZoomOut: () => dispatch(actionCreators.zoomOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
