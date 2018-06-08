import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';
import swal from 'sweetalert2';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLoading: false,
      inputValues: {}
    };
    console.log(this.props.parentHandler);
  }
  handleInputChanged = event => {
    const target = event.target;
    const targetId = target.id;
    const targetValue =
      target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      inputValues: { ...this.state.inputValues, [targetId]: targetValue }
    });
  };

  handleButtonLoginClick = () => {
    if (!this.state.inputValues.username || !this.state.inputValues.password) {
      swal('', 'กรุณากรอกข้อมูลให้ครบ', 'error');
    } else {
      this.ajaxLogin();
    }
  };

  ajaxLogin = () => {
    this.setState({ formLoading: true }, () => {
      fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.inputValues)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.status) {
            this.props.rootHandler.setAuthend(true);
            this.setState({ formLoading: false });
          } else {
            swal('', res.status_message, 'error');
            this.setState({ formLoading: false });
          }
        })
        .catch(error => {
          console.error(error);
          this.setState({ formLoading: false });
        });
    });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" loading={this.state.formLoading}>
            <Segment stacked>
              <Form.Input
                // error={!this.state.inputValues.username}
                onChange={this.handleInputChanged}
                id="username"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                // error={!this.state.inputValues.password}
                onChange={this.handleInputChanged}
                id="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.handleButtonLoginClick}
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
