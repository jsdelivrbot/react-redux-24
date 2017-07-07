import React, { Component } from 'react';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter webpack 2 installed</h1>
        { this.props.children }
      </div>
      );
  }
}
