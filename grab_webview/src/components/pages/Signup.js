import React, { Component, Redirect } from 'react';
import { Form, Container, Button } from 'semantic-ui-react';
import swal from 'sweetalert2';
import validator from 'validator';

export default class SignupForm extends Component {
  state = { inputValues: {} };

  constructor(props) {
    super(props);
  }

  handleButtonSubmitClick = () => {
    let checkInput = () => {
      const inputValues = [
        'firstname',
        'lastname',
        'username',
        'address',
        'password',
        'repassword'
      ];
      return inputValues.every(item => {
        return this.state.inputValues[item];
        /* && validator.isAlphanumeric(this.state.inputValues[item]) */
      });
    };
    console.log(checkInput());
    if (!checkInput()) swal('', 'กรุณากรอกข้อมูลให้ครบทุกช่อง', 'error');
    else {
      fetch('http://localhost:4000/api/user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.inputValues)
      })
        .then(res => res.json())
        .then(res => {
          if (res.status) {
            swal('', 'สมัครสมาชิกสำเร็จ', 'success').then(() => {
              window.location.href = 'login';
            });
          } else {
            swal('', res.status_message, 'error');
          }
        })
        .catch(error => {});
    }
  };

  handleInputChanged = event => {
    const target = event.target;
    const targetId = target.id;
    const targetValue =
      target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      inputValues: { ...this.state.inputValues, [targetId]: targetValue }
    });
  };

  render() {
    return (
      <Container text>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              id="firstname"
              fluid
              label="First name"
              placeholder="First name"
              onChange={this.handleInputChanged}
            />
            <Form.Input
              id="lastname"
              fluid
              label="Last name"
              placeholder="Last name"
              onChange={this.handleInputChanged}
            />
          </Form.Group>

          <Form.Input
            id="username"
            fluid
            label="Username"
            placeholder="Username"
            onChange={this.handleInputChanged}
          />
          <Form.Input
            id="email"
            fluid
            label="Email"
            placeholder="Email"
            onChange={this.handleInputChanged}
          />
          <Form.TextArea
            id="address"
            label="Address"
            placeholder="Your Address..."
            onChange={this.handleInputChanged}
          />

          <Form.Field>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="You own Password"
              onChange={this.handleInputChanged}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Re-Password </label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              placeholder="Re-enter Password"
              onChange={this.handleInputChanged}
            />
          </Form.Field>

          {/* <br />
          <Button color="facebook">
            <Icon name="facebook" /> Sign up with Facebook{' '}
          </Button>
          <Button color="google plus">
            {' '}
            <Icon name="google" /> Sign up with Google{' '}
          </Button>
          <br />
          <br /> */}

          <Form.Button
            color="green"
            floated="right"
            onClick={this.handleButtonSubmitClick}
          >
            Submit
          </Form.Button>
        </Form>
      </Container>
    );
  }
}
