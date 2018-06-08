import React, { Component } from "react";
import { Button, Segment, Form, Message } from "semantic-ui-react";

class Orderfood extends Component {
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
            {order.map(i => {
              return (
                <Message color="yellow">
                  <Message.Header>
                    ( Oder Number : {i} ) User : Sample User
                  </Message.Header>
                  <p>
                    {" "}
                    Food Zone: Sample zone, Bistro Name: Sample menu, Menu:
                    Sample menu{" "}
                  </p>
                  <Button color="green">Received</Button>
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
