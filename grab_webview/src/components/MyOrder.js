import React, { Component } from "react";
import { Button, Segment, Form, Message, Sidebar } from "semantic-ui-react";

class Orderfood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userOrder: [
        {
          name: "Toey",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 1
        },
        {
          name: "Bi",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 2
        },
        {
          name: "Bay",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 3
        },
        {
          name: "Mint",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 4
        },
        {
          name: "GGEZ",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 5
        },

        {
          name: "KAK",
          description:
            "Food Zone: Sample zone, Bistro Name: Sample menu, Menu: Sample menu",
          number: 6
        }
      ]
    };
  }

  have_received(i) {
    const newState = this.state.userOrder.slice();
    if (newState.indexOf(i) > -1) {
      newState.splice(newState.indexOf(i), 1);
      this.setState({ userOrder: newState });
    }
  }

  render() {
    const inlineStyle = {
      modal: {
        marginTop: "0px !important",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "5%"
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
    const order = [1, 2, 3, 4, 5];

    return (
      <div style={inlineStyle.modal}>
        <Segment secondary color="orange">
          <h1> My Order </h1>
          {/* Repeat */}

          <div>
            {this.state.userOrder.map(i => {
              return (
                <Message color="yellow">
                  <Message.Header>
                    ( Oder Number : {i.number} ) User : {i.name}
                  </Message.Header>
                  <Message.Content>{i.description}</Message.Content>
                  <Button
                    color="green"
                    onClick={this.have_received.bind(this, i)}
                  >
                    Received
                  </Button>
                </Message>
              );
            })}
          </div>
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
