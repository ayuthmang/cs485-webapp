import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Order from './components/Orderfood';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/myorders" component={Order} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
