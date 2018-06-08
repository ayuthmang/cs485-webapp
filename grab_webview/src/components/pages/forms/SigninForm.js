import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
];

class SigninForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>

        <Form.Input fluid label="Username" placeholder="Username" />
        <Form.TextArea label="Address" placeholder="Your Address..." />

        <Form.Field>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="You own Password"
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Re-Password </label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            placeholder="Re-enter Password"
          />
        </Form.Field>

        {/* <br/>
            <Button color='facebook'><Icon name='facebook' /> Sign up with Facebook </Button>
            <Button color='google plus'> <Icon name='google' /> Sign up with Google </Button>
            <br/><br/> */}

        <Form.Checkbox label="I agree to the Terms and Conditions" />

        {/* <Form.Button>Submit</Form.Button> */}
      </Form>
    );
  }
}

export default SigninForm;
