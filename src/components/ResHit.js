
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Cardbox from './Cardbox';
import './Foodrecom.css';
import PlaceHit from './PlaceHit';


class ResHit extends Component {
    constructor(props) {
        super(props);
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);
        this.onClick4 = this.onClick4.bind(this);
        this.state = {
          accordion: false
        };
      }
      onClick1() {
        let state = '';

        if(this.state.accordion !== 1) {
          state = 1;
        } else {
          state = false;
        }

        this.setState({
          accordion: state});
      }

      onClick2() {
        let state = '';

        if(this.state.accordion !== 2) {
          state = 2;
        } else {
          state = false;
        }

        this.setState({
          accordion: state});
      }

      onClick3() {
        let state = '';

        if(this.state.accordion !== 3) {
          state = 3;
        } else {
          state = false;
        }

        this.setState({
          accordion: state});
      }
      onClick4() {
        let state = '';

        if(this.state.accordion !== 4) {
          state = 4;
        } else {
          state = false;
        }

        this.setState({
          accordion: state});
      }


render(){
    const  {collapse} = this.state;
    // var Rating = require('react-rating');
  return (
  <React.Fragment>
  <div className="container" style={{ paddingBottom: "10px" }}>
  <h2 className="topic"> แนะนำร้านยอดฮิต</h2>
  <PlaceHit/>
  <div className="row">

    <div className="col">
    <Card>
        <CardImg  top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg"  alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#EEEEEE"}} >
          <CardTitle>ข้าวขาหมู @ พินิจโต้รุ่ง</CardTitle>
{/*
       <Rating
  initialRating={3}
  readonly
/> */}

          <Button color="primary" onClick={this.onClick1}  style={{ marginBottom: '1rem' }}>Datail</Button>
        <Collapse isOpen={this.state.accordion === 1}>
          <Card>
            <CardBody style={{backgroundColor: "#EEEEEE"}}>
                รายการอาหาร
                <li>ข้าวผัดสุกี้ทะเล</li>
                <li>สุกี้ทะเลรวมมิตร</li>
                <li>ต้มยำรวมมิตร</li>
                <li>ยำวุ้นเส้นทะเล</li>
            </CardBody>
          </Card>
        </Collapse>

        </CardBody>
      </Card>
    </div>

    <div className="col">
    <Card>
        <CardImg  top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/09/YN4VAa.jpg"  alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#EEEEEE"}} >
          <CardTitle>Salad In The Box</CardTitle>
          {/* <Rating
  initialRating={3}
  readonly
/> */}

          <Button color="primary" onClick={this.onClick2}  style={{ marginBottom: '1rem' }}>Detail</Button>
        <Collapse isOpen={this.state.accordion === 2}>
          <Card>
            <CardBody style={{backgroundColor: "#EEEEEE"}}>
            รายการอาหาร
                <li>สลัดอกไก่ + ไข่ต้ม</li>
                <li>สลัดไก่ + ข่ต้ม</li>
                <li>ยำสลัด</li>
            </CardBody>
          </Card>
        </Collapse>

        </CardBody>
      </Card>
    </div>

    <div className="col">
    <Card>
        <CardImg  top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/09/YN4Xeq.jpg"  alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#EEEEEE"}} >
          <CardTitle>ปังเย็น</CardTitle>
          {/* <Rating
  initialRating={3}
  readonly
/> */}

          <Button color="primary" onClick={this.onClick3}  style={{ marginBottom: '1rem' }}>Detail</Button>
        <Collapse isOpen={this.state.accordion === 3}>
          <Card>
            <CardBody style={{backgroundColor: "#EEEEEE"}}>
            รายการอาหาร
                <li>ปังเย็นนมสด</li>
                <li>นมหมีปั่นออริโอ้</li>
                <li>โอวันติลไวท์มอล์ต</li>
                <li>M150 + ปีโป้ + น้ำส้ม</li>
            </CardBody>
          </Card>
        </Collapse>

        </CardBody>
      </Card>
    </div>
    <div className="col">
    <Card>
        <CardImg  top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/09/YN4p3z.jpg"  alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#EEEEEE"}} >
          <CardTitle>ร้านข้าวแกงชุดอิ่มอร่อย</CardTitle>
          {/* <Rating
  initialRating={3}
  readonly
/> */}

          <Button color="primary" onClick={this.onClick4}  style={{ marginBottom: '1rem' }}>Detail</Button>
        <Collapse isOpen={this.state.accordion === 4}>
          <Card>
            <CardBody style={{backgroundColor: "#EEEEEE"}}>
            รายการอาหาร
                <li>ข้าวคะน้าหมูกรอบ</li>
                <li>ข้าวผัด หมู/ไก่/รวมมิตร</li>
                <li>ข้าวผัดกะเพรา หมู/ไก่/รวมมิตร</li>
                <li>ข้าวผัดพริกแกง</li>
            </CardBody>
          </Card>
        </Collapse>

        </CardBody>
      </Card>
    </div>
  </div>
</div>


    </React.Fragment>
  );
};
}
export default ResHit;
