import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    localStorage.removeItem('profile');
    return (
      <div>
        <Redirect to="/" />{' '}
      </div>
    );
  }
}
