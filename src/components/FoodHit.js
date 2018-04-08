import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cardbox from './Cardbox';

const FoodHit = props => {
  return (
    <Row>
      <Col lg="6" md="6" className="mb-4">
        <Cardbox img={require('../images/img-food-highlight-1.jpg')} cardTitle="ยำวุ้นเส้น" />
      </Col>
      <Col lg="6" md="6" className="mb-4">
        <Cardbox img={require('../images/img-food-highlight-2.jpg')} cardTitle="พริกขิงหมูกรอบ" />
      </Col>
      <Col lg="6" md="6" className="mb-4">
        <Cardbox img={require('../images/img-food-highlight-3.jpg')} cardTitle="คะน้าหมูกรอบ" />
      </Col>
      <Col lg="6" md="6" className="mb-4">
        <Cardbox img={require('../images/img-food-highlight-4.jpg')} cardTitle="ข้าวผัดกระเพราไข่เจียว" />
      </Col>
    </Row>
  );
}

export default FoodHit;