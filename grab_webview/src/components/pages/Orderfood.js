import React, { Component } from "react";
import {
  Button,
  Segment,
  Form,
  Message,
  Accordion,
  Label,
  Icon
} from "semantic-ui-react";

class Orderfood extends Component {
  constructor() {
    super();
    this.onSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ fetchedData: null });
    fetch("http://localhost:4000/api/orders", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ fetchedData: responseJson });
        // return responseJson.data;
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmit(e) {
    console.log("Adding order to DB");
    e.preventDefault();
    var self = this;

    fetch("http://localhost:4000/api/order", {
      method: "POST",
      data: {
        username: self.refs.username,
        foodzone: self.refs.foodzon,
        bistroname: self.refs.bistroname,
        menu: self.refs.title,
        description: self.refs.description,
        address: self.refs.address
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  }

  handleOnclick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    console.log("this.state");
    console.log(this.state);
    const inlineStyle = {
      modal: {
        marginTop: "0px !important",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "20%",
        paddingRight: "20%"
      },
      button: {
        float: "right",
        alignItems: "center",
        justifyContent: "center"
      }
    };
    const foodzone = [
      { key: "g", text: "Green Canteen", value: "Green Canteen" },
      { key: "i", text: "Interzone", value: "Interzone" },
      { key: "t", text: "Torrung", value: "Torrung" }
    ];
    const Bistro = [
      { key: "res1", text: "Restuaraunt1", value: "Restuaraunt1" },
      { key: "res2", text: "Restuaraunt2", value: "Restuaraunt2" },
      { key: "res3", text: "Restuaraunt3", value: "Restuaraunt3" }
    ];
    const SimpleUser = [
      { key: "user1", text: "sample user from DB", value: "DB user" }
    ];
    const { activeIndex } = this.state;
    const cnt = 0;
    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="olive">
          <h1> Order Food Here </h1>

          <Form onSubmit={this.onSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Username"
                placeholder="Your username..."
                ref="username"
              />
              <Form.Select
                fluid
                label="Food Zone"
                options={foodzone}
                placeholder="Select Food Zone"
                ref="foodzone"
              />
              <Form.Select
                fluid
                label="Bistro Name"
                options={Bistro}
                placeholder="Select Bistro"
                ref="bistroname"
              />
            </Form.Group>

            <Form.Input fluid label="Menu" ref="title" placeholder="Menu..." />
            <Form.TextArea
              label="Description"
              ref="description"
              placeholder="Description..."
            />
            <Form.TextArea
              label="Address"
              placeholder="Enter your addrees to receive.."
              ref="address"
            />

            <Button positive floated="right">
              Oder Now
            </Button>
          </Form>
          <br />
          <br />
        </Segment>

        <Segment secondary color="orange">
          <h1> Show Order From Database </h1>
          {/* Repeat */}
          <div>
            {this.state.fetchedData
              ? this.state.fetchedData.data.map((item, count) => {
                  return (
                    <Message color="yellow">
                      <i class="close icon" />
                      <Message.Header>
                        User order : {item.user_owner}
                        <br />
                        Grabberssss : {item.user_grabber}
                        <br />
                        Menu : {item.menu}
                      </Message.Header>
                      <Accordion fluid>
                        <Accordion.Title
                          active={activeIndex === count}
                          index={count}
                          onClick={this.handleOnclick}
                        >
                          {" "}
                          <Icon name="dropdown" />Show Detail
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === count}>
                          <div>
                            <p>User Address : {item.address}</p>
                            <p>Description : {item.description}</p>
                            <p>Price : {item.price}</p>
                            <p>Tips : {item.tip}</p>
                            <p>Order time : {item.created_time}</p>
                          </div>
                        </Accordion.Content>
                      </Accordion>
                    </Message>
                  );
                })
              : "Nothing in your order(s)."}
          </div>
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
