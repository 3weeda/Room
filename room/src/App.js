import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Room from './containers/Room/Room';
import Home from './containers/Home/Home';
import About from './components/About/About';
import Plans from './containers/Plans/Plans';
import HowItWorks from './containers/HowItWorks/HowItWorks';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/tour" component={HowItWorks} />
          {this.props.isAuthenticated ? <Route path="/room" component={Room}/> : null }
          <Route path="/about" component={About} />
          <Route path="/plans" component={Plans} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default withRouter(connect(mapStateToProps)(App));
