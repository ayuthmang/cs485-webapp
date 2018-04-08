import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cardbox from './Cardbox';

export default class PlaceHit extends React.Component {
  render() {
    return (
      <Row>
        <Col lg="6" md="6" className="mb-4">
          <Cardbox img={require('../images/img-food-place-highlight-1.jpg')} cardTitle="ร้านโนตม นมสด" starValue={4} />
        </Col>
        <Col lg="6" md="6" className="mb-4">
          <Cardbox img={require('../images/img-food-place-highlight-2.jpg')} cardTitle="ร้าน Steak Holder" starValue={3} />
        </Col>
        <Col lg="6" md="6" className="mb-4">
          <Cardbox img={require('../images/img-food-place-highlight-3.jpg')} cardTitle="ร้านข้าวมันไก่ โต้รุ่ง" starValue={5} />
        </Col>
        <Col lg="6" md="6" className="mb-4">
          <Cardbox img={require('../images/img-food-place-highlight-4.jpg')} cardTitle="ร้านพินิจ อาหารตามสั่ง โต้รุ่ง" starValue={4}  />
        </Col>
      </Row>
    );
  }
}
