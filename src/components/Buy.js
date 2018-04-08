import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron} from 'reactstrap';
import './Buy.css'
  
export default class Buy extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="OrderFood">
      <Jumbotron>
      <h2 className="Orderfood">Order Food Here</h2>
      <hr className="my-2" />
      <Form>
        <FormGroup>
          <Label >Select Food Zone</Label>
          <Input type="select" name="selectfood" id="selectfoodid">
            <option>Green Canteen</option>
            <option>Torung</option>
            <option>Chiang-Rak</option>
            <option>Tuwson</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label >Bistro Name:</Label>
          <Input type="select" name="selectbist" id="selectbistid">
            <option>Clean food</option>
            <option>cake</option>
            <option>Somtum</option>
            <option>Yumzap</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label >Food Menu</Label>
          <Input type="text" name="foodmenu" id="foodmenuid" />
        </FormGroup>
        <FormGroup check>
        </FormGroup>
        <Button color="success">Submit</Button>
      </Form>
      </Jumbotron>
      </div>
    );
  }
}
