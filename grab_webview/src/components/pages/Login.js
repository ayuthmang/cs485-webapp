import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import LoginForm from "./forms/LoginForm";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authResponse: props.isAuthenticated };
  }

  submit = data => {
    console.log(data);

    //verify user with the server
    return fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-Type": "application/json" })
    }).then(resp => {
      const json = resp.json();
      if (resp.status >= 200 && resp.status < 300) {
        json.then(user => {
          this.props.setAuth(user);
          this.setState({ authResponse: true });
        });
      }
      return json.then(err => {
        throw err;
      });
    });

    //Fake Return
    //return new Promise((res, rej)=>{ rej({errors:{global:"eeoeo"}}); });
  };

  render() {
    const { authResponse } = this.state;
    if (!authResponse) {
      return <LoginForm submit={this.submit} />;
    }
    // else
    return <Redirect to={{ pathname: "/secretPage" }} />;
  }
}

LoginPage.propTypes = {
  setAuth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default LoginPage;
