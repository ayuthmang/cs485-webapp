import React from "react";
import { Rating, Card, Icon, Grid, Image, GridColumn } from "semantic-ui-react";

const inlineStyle = {
  modal: {
    marginTop: "0px !important",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5px"
  }
};

const FoodGridContainer = () => (
  <div>
    <h1 style={{ paddingLeft: "10%", paddingTop: "30px" }}> อาหารยอดนิยม </h1>
    <Grid container columns={4} style={inlineStyle.modal}>
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/06/09/4z1x12.jpg" />
          <Card.Content>
            <Card.Header>ก๋วยเตี๋ยวหมูน้ำตก</Card.Header>
            <Rating maxRating={5} defaultRating={5} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 35 บาท</span>
            </Card.Meta>
            <Card.Description>ร้าน : ก๋วยเตี๋ยวเว็บแอพ บร2</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="shopping cart" />
              Add to My Cart
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/06/09/4z16Ou.jpg" />
          <Card.Content>
            <Card.Header>ข้าวขาหมู</Card.Header>
            <Rating maxRating={5} defaultRating={4} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 40 บาท</span>
            </Card.Meta>
            <Card.Description>ร้าน : ครัวคุณเบ โต้รุ่ง</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="shopping cart" />
              Add to My Cart
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/06/09/4z1sA8.jpg" />
          <Card.Content>
            <Card.Header>บะหมี่หมูแดง</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 30 บาท</span>
            </Card.Meta>
            <Card.Description>ร้าน : บะหมี่นะจ๊ะ</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="shopping cart" />
              Add to My Cart
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/06/09/4zKU0t.jpg" />
          <Card.Content>
            <Card.Header>ข้าวผัดทะเล</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 50 บาท</span>
            </Card.Meta>
            <Card.Description>ร้าน : อยากกินอะไรก็สั่งมา</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="shopping cart" />
              Add to My Cart
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </div>
);

export default FoodGridContainer;
