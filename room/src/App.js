import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyleRoot } from "radium";
import Room from "./containers/Room/Room";
import Home from "./containers/Home/Home";
import About from "./components/About/About";
import Plans from "./containers/Plans/Plans";
import HowItWorks from "./containers/HowItWorks/HowItWorks";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Switch>
            {/* TODO: this is temp solution for showing room on logging in */}
            {this.props.isAuthenticated ? (
              <Route path="/room" component={Room} />
            ) : (
              <Auxiliary>
                <Route path="/tour" component={HowItWorks} />
                <Route path="/about" component={About} />
                <Route path="/plans" component={Plans} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
              </Auxiliary>
            )}
            {this.props.isAuthenticated ? <Redirect to="/room" /> : null}
          </Switch>
        </div>
      </StyleRoot>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter(connect(mapStateToProps)(App));
