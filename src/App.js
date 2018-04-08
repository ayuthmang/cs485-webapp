import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Foodrecom from './components/Foodrecom';
import Buy from './components/Buy';
import {Button} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        {/* Content Here */}
        <Banner/>
        <Foodrecom/>
        <Buy/>
        {/* Content Here */}

        <Footer/>
      </div>
    );
  }
}

export default App;
