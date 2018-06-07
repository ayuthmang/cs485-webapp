import React from "react";
import { Card, Icon, Grid, Image, GridColumn } from "semantic-ui-react";

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
    <h1 style={{ paddingLeft: "10%" }}> ร้านค้าแนะนำ </h1>
    <Grid container columns={4} style={inlineStyle.modal} color="grey">
      <Grid.Column>
        <Card>
          <Image src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
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
          <Image src="https://www.picz.in.th/images/2018/04/07/YY7t6z.jpg" />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
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

export default Food2GridContainer;
