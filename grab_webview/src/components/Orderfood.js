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
        <Segment secondary color="olive">
          <h1> Order Food Here </h1>

          <Form>
            <Form.Group widths="equal">
              <Form.Select
                fluid
                label="Select User"
                options={SimpleUser}
                placeholder="Select User"
              />
              <Form.Select
                fluid
                label="Food Zone"
                options={foodzone}
                placeholder="Select Food Zone"
              />
              <Form.Select
                fluid
                label="Bistro Name"
                options={Bistro}
                placeholder="Select Bistro"
              />
            </Form.Group>

            <Form.Input fluid label="Menu" placeholder="Menu..." />
            <Form.TextArea
              label="Address"
              placeholder="Enter your addrees to receive.."
            />

            <Button positive floated="right">
              Oder Now
            </Button>
          </Form>
          <br />
          <br />
        </Segment>
        <br />
        <br />
      </div>
    );
  }
}

export default Orderfood;
