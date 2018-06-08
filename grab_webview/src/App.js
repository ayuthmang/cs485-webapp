import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Header from './components/Header';
import Footer from './components/Footer';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Order from './components/pages/Orderfood';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  rootHandler = {
    setAuthend: bool => {
      this.setState({ isAuthenticated: bool });
    }
  };

  render() {
    return (
      <div>
        <Header rootHandler={this.rootHandler} rootState={this.state} />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/login"
              render={props => (
                <Login {...props} rootHandler={this.rootHandler} />
              )}
            />
            <Route path="/myorders" component={Order} />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
