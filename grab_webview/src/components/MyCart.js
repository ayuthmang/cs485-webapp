import React, { Component } from "react";
import { Table, Button, Dropdown, Checkbox } from "semantic-ui-react";

class MyCart extends Component {
  render() {
    return (
      <div style={{ padding: "5%", paddingRight: "40%" }}>
        <h1>My Cart</h1> <br />
        <Table basic="very">
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
              <Table.Cell>400</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Checkbox label="Choose" defaultChecked />
              </Table.Cell>
              <Table.Cell>Denied</Table.Cell>
              <Table.Cell>
                <Dropdown
                  placeholder="1"
                  compact
                  selection
                  // options={getOptions(3, "")}
                />
              </Table.Cell>
              <Table.Cell>400</Table.Cell>
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
      </div>
    );
  }
}

export default MyCart;
