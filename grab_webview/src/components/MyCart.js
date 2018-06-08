import React, { Component } from "react";
import {
  Table,
  Button,
  Dropdown,
  Checkbox,
  Segment,
  Label
} from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class MyCart extends Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: "30%",
          paddingRight: "30%",
          paddingTop: "5px",
          justifyContent: "center"
        }}
      >
        <br />
        <Segment>
          <Label as="a" color="orange" ribbon>
            <h1>My Order Cart</h1>
          </Label>
          <Table basic="very" textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Select Order</Table.HeaderCell>
                <Table.HeaderCell>Order</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Checkbox label="Choose" defaultChecked />
                </Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>
                  <Dropdown
                    placeholder="1"
                    compact
                    selection
                    // options={getOptions(3, "")}
                  />
                </Table.Cell>
                <Table.Cell>200</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  <h3>Total Price : </h3>
                </Table.Cell>
                <Table.Cell>1,000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button color="green" floated="right">
            purchase
          </Button>
        </Segment>
      </div>
    );
  }
}

export default MyCart;
