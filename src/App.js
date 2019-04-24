import React, { Component } from 'react';

import data from './data.json';
import Admin from "./Admin/Admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: data.templates
    };
  }

  render() {
    return (
      <Admin templates={this.state.templates} />
    );
  }
}

export default App;
