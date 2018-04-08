import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Foodrecom from './components/Foodrecom';
import FoodHit from './components/FoodHit';
import Buy from './components/Buy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Content Here */}
        <Container>
          <Banner/>
          <FoodHit/>
          <Foodrecom/>
          <Buy/>

        </Container>

        {/* Content Here */}

        <Footer />
      </div>
    );
  }
}

export default App;
