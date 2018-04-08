import React, { Component } from 'react';
<<<<<<< HEAD
=======
import { Container, Row, Col, Button } from 'reactstrap';

import './styles/App.css';
>>>>>>> fbc76daa513fcac4a0cce061d89cf26d147de2ef
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import Banner from './components/Banner';
import Foodrecom from './components/Foodrecom';
import Buy from './components/Buy';
import {Button} from 'reactstrap';
=======
import Cardbox from './components/Cardbox';
>>>>>>> fbc76daa513fcac4a0cce061d89cf26d147de2ef

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Content Here */}
<<<<<<< HEAD
        <Banner/>
        <Foodrecom/>
        <Buy/>
=======
        <Container>
          <Row>
            <Col lg="6" md="6" className="mb-4">
              <Cardbox img={require('./images/img-food-highlight-1.jpg')} cardTitle="ยำวุ้นเส้น" />
            </Col>
            <Col lg="6" md="6" className="mb-4">
              <Cardbox img={require('./images/img-food-highlight-2.jpg')} cardTitle="พริกขิงหมูกรอบ" />
            </Col>
            <Col lg="6" md="6" className="mb-4">
              <Cardbox img={require('./images/img-food-highlight-3.jpg')} cardTitle="คะน้าหมูกรอบ" />
            </Col>
            <Col lg="6" md="6" className="mb-4">
              <Cardbox img={require('./images/img-food-highlight-4.jpg')} cardTitle="ข้าวผัดกระเพราไข่เจียว" />
            </Col>
          </Row>
        </Container>

>>>>>>> fbc76daa513fcac4a0cce061d89cf26d147de2ef
        {/* Content Here */}

        <Footer />
      </div>
    );
  }
}

export default App;
