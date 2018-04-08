
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Collapse } from 'reactstrap';
 
import './Foodrecom.css';

class Example extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };

      this.toggle2 = this.toggle2.bind(this);
      this.state2 = { collapse2: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    toggle2() {
        this.setState({ collapse2: !this.state2.collapse2 });
      }


render(){
    const  {collapse} = this.state;
  return (
    <React.Fragment>
    <h2 class = "topic"> แนะนำอาหารยอดฮิต</h2>
    
    <div class = {"Content"} onClick={this.toggle}> 
    <section class ="whitespace"></section>
    <div >
      <Card>
        <CardImg  top width="100%"  style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg"  alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#FFD180"}} >
          <CardTitle>ข้าวขาหมู</CardTitle>
          <CardSubtitle>ร้าน ป.3 ขาหมู โรงอาหารโต้รุ่ง</CardSubtitle> <p></p>
          <CardText>ข้าวขาหมู นื้อเน้นๆ กับไขมันนิดหน่อย อร่อยลืมแคลอรี่</CardText>

          <Button color="success"  style={{ marginBottom: '1rem' }}>Order Now</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            ยังไม่ใส่อะไรนะ อิอิ
            </CardBody>
          </Card>
        </Collapse>

        </CardBody>
      </Card>
    </div>
    <div >
      <Card>
        <CardImg top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/07/YY7unW.png" alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#FFD180"}}>
          <CardTitle>ข้าวผัดปู</CardTitle>
          <CardSubtitle>ร้านอาหารตามสั่งอิ่มอร่อย โต้รุ่ง</CardSubtitle><p></p>
          <CardText>ข้าวผัดกุ้ง ยกกุ้งมาทั้งแม่น้ำ รับรองอร่อยแน่</CardText>
          <Button color="success"  style={{ marginBottom: '1rem' }}>Order Now</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            ยังไม่ใส่อะไรนะ อิอิ
            </CardBody>
          </Card>
        </Collapse>
        </CardBody>
      </Card>
    </div>
    <div >
      <Card>
        <CardImg top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/07/YYSis1.jpg" alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#FFD180"}}>
          <CardTitle>ลูกชิ้นเอ็นหมูทอด</CardTitle>
          <CardSubtitle>ร้านสมใจลูกชิ้นทอด โต้รุ่ง</CardSubtitle><p></p>
          <CardText>ลูกชิ้นมีให้เลือกหลากหลาย พร้อมกับน้ำจิ้มหลายรส รับรองเด็ดทุกรส</CardText>
          <Button color="success"  style={{ marginBottom: '1rem' }}>Order Now</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            ยังไม่ใส่อะไรนะ อิอิ
            </CardBody>
          </Card>
        </Collapse>
        </CardBody>
      </Card>
    </div>
    <div >
      <Card>
        <CardImg top width="100%" style={{ objectFit: "cover", height: 250}} src="https://www.picz.in.th/images/2018/04/07/YYSAyR.jpg" alt="Card image cap" />
        <CardBody style={{ backgroundColor:"#FFD180"}} >
          <CardTitle>ก๋วยเตี๋ยวหมูน้ำต้ม</CardTitle>
          <CardSubtitle>ร้านแชมป์ฮั้งเพ้ง Green Canteen</CardSubtitle><p></p>
          <CardText>ก๋วยหมูน้ำตก รสชาติเข้มข้น ครบเครื่องเรื่องก๋วยเตี๋ยว</CardText>
          <Button color="success"  style={{ marginBottom: '1rem' }}>Order Now</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            ยังไม่ใส่อะไรนะ อิอิ
            </CardBody>
          </Card>
        </Collapse>
        </CardBody>
      </Card>
    </div>
    <section class ="whitespace"></section>
    </div>
    
    </React.Fragment>
  );
};
}
export default Example;