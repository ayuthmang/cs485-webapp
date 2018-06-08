import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Grid, Image, GridColumn, GridRow, Divider } from "semantic-ui-react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Header,
  Message,
  SidebarPushable,
  Label,
  Card
} from "semantic-ui-react";

class HomeG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArray: [],
      data: [
        {
          description: "buy at here1",
          price: 90,
          tip: 10
        },
        {
          description: "buy at here2",
          price: 50,
          tip: 10
        },
        {
          description: "buy at here3",
          price: 290,
          tip: 10
        },
        {
          description: "buy at here4",
          price: 900,
          tip: 10
        },
        {
          description: "buy at here5",
          price: 920,
          tip: 10
        },
        {
          description: "buy at here6",
          price: 920,
          tip: 10
        }
      ],
      data_Submit: [],
      open: false
    };
    this.confirm = this.confirm_Cart.bind(this);
  }

  confirm_Cart = () => {
    const data2 = this.state.itemArray;
    this.setState({ data_Submit: data2 });
  };

  handleDismiss = item => {
    const newState = this.state.itemArray.slice();
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({ itemArray: newState });
    }

    const newData = this.state.data;
    const description = item.description;
    const price = item.price;
    const tip = item.tip;
    newData.push({ description, price, tip });
    this.setState({ data: newData });
  };

  createOrder_Cart(i) {
    const newState = this.state.data.slice();
    if (newState.indexOf(i) > -1) {
      newState.splice(newState.indexOf(i), 1);
      this.setState({ data: newState });
    }
    const item = this.state.itemArray;
    const description = i.description;
    const price = i.price;
    const tip = i.tip;
    item.push({ description, price, tip });
    this.setState({ itemArray: item });
  }
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Row
              divided={"vertically"}
              relaxed
              style={{
                paddingBottom: "100px",
                paddingTop: "10%",
                height: "500px"
              }}
            >
              <Grid.Column width={8}>
                <Header as="h1" color="red" textAlign="left">
                  Order List
                </Header>
                <Sidebar.Pushable>
                  <Sidebar
                    animation="scale down"
                    direction="top"
                    visible={true}
                  >
                    <div style={{ paddingBottom: "50px" }}>
                      {this.state.data.map(i => {
                        return (
                          <Message info>
                            <Message.Header>
                              {" "}
                              {i.description}{" "}
                              <Button
                                color="orange"
                                floated={"right"}
                                onClick={this.createOrder_Cart.bind(this, i)}
                              >
                                {" "}
                                Select{" "}
                              </Button>{" "}
                            </Message.Header>
                            <Message.Content>{i.price} </Message.Content>
                          </Message>
                        );
                      })}
                    </div>
                  </Sidebar>
                </Sidebar.Pushable>
              </Grid.Column>

              <Grid.Column width={8}>
                <Header as="h1" color="red" textAlign="left" padding="20 px">
                  Order Cart
                </Header>
                <Sidebar.Pushable>
                  <Sidebar
                    animation="scale down"
                    direction="top"
                    visible={true}
                  >
                    <div style={{ paddingBottom: "50px" }}>
                      {this.state.itemArray.map(item => {
                        return (
                          <div>
                            <Message
                              onDismiss={this.handleDismiss.bind(this, item)}
                              header={item.description}
                              content={item.price}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Sidebar>
                </Sidebar.Pushable>
                <Button floated="right" color="green" onClick={this.confirm}>
                  {" "}
                  Confirm{" "}
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row
              relaxed
              style={{
                paddingBottom: "50px",
                paddingTop: "50px",
                height: "300px"
              }}
              columns={3}
            >
              <Header
                as="h1"
                color="red"
                textAlign="left"
                style={{ paddingRight: "30px" }}
              >
                Your Order Mission
              </Header>
              <Grid.Row style={{ width: "60%" }}>
                <Sidebar.Pushable>
                  <Sidebar
                    animation="scale down"
                    direction="top"
                    visible={true}
                  >
                    <div style={{ paddingBottom: "50px" }}>
                      {this.state.data_Submit.map(i => {
                        return (
                          <Message header={i.description} content={i.price} />
                        );
                      })}
                    </div>
                  </Sidebar>
                </Sidebar.Pushable>
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HomeG;
