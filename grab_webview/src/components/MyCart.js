import React, { Component } from 'react';
import {
  Table,
  Button,
  Dropdown,
  Checkbox,
  Segment,
  Label,
  Select
} from 'semantic-ui-react';
// import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [
        {
          name: 'ข้าวมันไก่',
          price_one: 35,
          values: 0,
          all_price: 35,
          checked: false,
          disable: false
        },
        {
          name: 'ชานม ใส่นมเยอะๆ',
          price_one: 25,
          values: 0,
          all_price: 25,
          checked: false,
          disable: false
        },
        {
          name: 'KUYBI',
          price_one: 0,
          values: 0,
          all_price: 0,
          checked: false,
          disable: false
        }
      ],
      total_price: 0
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange(i, event, { value }) {
    if (i.all_price > i.price_one) {
      i.all_price = i.price_one;
    }

    i.all_price = i.price_one * { value }.value;

    this.forceUpdate();
  }

  handleChange2(i, event, { value }) {
    if (i.checked == false) {
      this.state.total_price = this.state.total_price + i.all_price;
      i.checked = true;
      i.disable = true;
    } else {
      this.state.total_price = this.state.total_price - i.all_price;
      i.checked = false;
      i.disable = false;
    }
    this.forceUpdate();
  }
  render() {
    const quanlity = [
      {
        key: 1,
        text: '1',
        value: 1
      },
      {
        key: 2,
        text: '2',
        value: 2
      },
      {
        key: 3,
        text: '3',
        value: 3
      }
    ];
    const { value } = 0;
    return (
      <div
        style={{
          paddingLeft: '30%',
          paddingRight: '30%',
          justifyContent: 'center'
        }}
      >
        <br />
        <Segment>
          <Label as="a" color="orange" ribbon>
            <h1> My Order Cart </h1>{' '}
          </Label>{' '}
          <Table basic="very" textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> Select Order </Table.HeaderCell>{' '}
                <Table.HeaderCell> Order </Table.HeaderCell>{' '}
                <Table.HeaderCell> Price / 1e a </Table.HeaderCell>{' '}
                <Table.HeaderCell> Quantity </Table.HeaderCell>{' '}
                <Table.HeaderCell> Price </Table.HeaderCell>{' '}
              </Table.Row>{' '}
            </Table.Header>
            <Table.Body>
              {' '}
              {this.state.order.map((i, count) => {
                return (
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox
                        label="Choose"
                        checked={i.checked}
                        onChange={this.handleChange2.bind(this, i)}
                      />{' '}
                    </Table.Cell>{' '}
                    <Table.Cell> {i.name} </Table.Cell>{' '}
                    <Table.Cell> {i.price_one} </Table.Cell>{' '}
                    <Table.Cell>
                      <Dropdown
                        style={{
                          color: 'black'
                        }}
                        placeholder="1"
                        onChange={this.handleChange.bind(this, i)}
                        options={quanlity}
                        compact
                        selection
                        value={value}
                        disabled={i.disable}
                      />{' '}
                    </Table.Cell>{' '}
                    <Table.Cell> {i.all_price} </Table.Cell>{' '}
                  </Table.Row>
                );
              })}
              <Table.Row>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  <h3> Total Price: </h3>{' '}
                </Table.Cell>{' '}
                <Table.Cell> {this.state.total_price} </Table.Cell>{' '}
              </Table.Row>{' '}
            </Table.Body>{' '}
          </Table>{' '}
          <Button color="green" floated="right">
            purchase{' '}
          </Button>{' '}
        </Segment>{' '}
      </div>
    );
  }
}

export default MyCart;
