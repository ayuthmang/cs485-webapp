import React from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "./InlineError";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      errors: {}
    };
  }
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    console.log("Login Form :" + this.state.data);

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data).catch(err => {
        this.setState({ errors: err.errors });
      });
    }
  };
  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.password) errors.password = "Passwaord cannnot be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Cannot verify your login</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}

        <Form.Field>
          <label htmlFor="email">Email </label>{" "}
          {errors.email && <InlineError text={errors.email} />}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="password">Password </label>{" "}
          {errors.password && <InlineError text={errors.password} />}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
        </Form.Field>

        <br />
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
