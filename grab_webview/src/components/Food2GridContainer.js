import React from "react";
import { Card, Icon, Grid, Image, GridColumn, Rating } from "semantic-ui-react";

const inlineStyle = {
  modal: {
    marginTop: "0px !important",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "20px"
  }
};

const Food2GridContainer = () => (
  <div style={{ paddingTop: "50px" }}>
    <h1 style={{ paddingLeft: "10%" }}> ของหวานยอดนิยม </h1>
    <Grid container columns={4} style={inlineStyle.modal} color="grey">
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/06/09/4zZQfD.png" />
          <Card.Content>
            <Card.Header>ข้าวเหนียวมะม่วง</Card.Header>
            <Rating maxRating={5} defaultRating={5} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 25 บาท/กล่อง</span>
            </Card.Meta>
            <Card.Description>ร้าน : The Dessert</Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/06/09/4zZqHJ.jpg" />
          <Card.Content>
            <Card.Header>โรตีกล้วยหอม</Card.Header>
            <Rating maxRating={5} defaultRating={5} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา : 20 บาท/ชิ้น</span>
            </Card.Meta>
            <Card.Description>ร้าน : โรตีอาบังนะจ๊ะนายจ๋า</Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/06/09/4zQaLg.jpg" />
          <Card.Content>
            <Card.Header>บัวลอย</Card.Header>
            <Rating maxRating={5} defaultRating={4} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา 35 บาท/ถ้วย</span>
            </Card.Meta>
            <Card.Description>ร้าน : ขนมหวานไทย</Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/06/09/4zU4zR.jpg" />
          <Card.Content>
            <Card.Header>ชานมไข่มุก</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">ราคา 30 บาท/แก้ว</span>
            </Card.Meta>
            <Card.Description>ร้าน : Ochaya</Card.Description>
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

export default Food2GridContainer;
