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
          <Image src="https://www.picz.in.th/images/2018/04/07/YYSAyR.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YYSAyR.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YYSAyR.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YYSAyR.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Rating maxRating={5} defaultRating={3} icon="star" size="huge" />
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
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
