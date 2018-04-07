import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Cardbox from './components/Cardbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        {/* Content Here */}
        <Container>
        <header className="jumbotron my-4">
          <h1 className="display-3">A Warm Welcome!</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
        </header>
          <Row>
            <Col lg="3" md="6">
              <Cardbox/>
            </Col>
            <Col lg="3" md="6">
              <Cardbox/>
            </Col>
            <Col lg="3" md="6">
              <Cardbox/>
            </Col>
            <Col lg="3" md="6">
              <Cardbox/>
            </Col>
          </Row>
        </Container>

        {/* Content Here */}

        <Footer/>
      </div>
    );
  }
}

export default App;
