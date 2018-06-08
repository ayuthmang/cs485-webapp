import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "semantic-ui-css/semantic.min.css";
import "./styles/App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Login from './components/pages/Login';
import Order from "./components/pages/Orderfood";
import MyCart from "./components/MyCart";
import HomeG from "./components/HomeG";
import HomeC from "./components/HomeC";
import MyOrder from "./components/MyOrder";
import MyProfile from "./components/MyProfile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeC} />
          <Route path="/about" component={About} />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/homeG" component={HomeG} />
          <Route path="/myorder" component={MyOrder} />
          <Route path="/mycart" component={MyCart} />
          <Route path="/myprofile" component={MyProfile} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
