import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Cardbox from './components/Cardbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Content Here */}
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

        {/* Content Here */}

        <Footer />
      </div>
    );
  }
}

export default App;
