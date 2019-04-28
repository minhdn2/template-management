import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import data from './data.json';
import Admin from "./admin/Admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: data.templates
    };
  }
  addTemplate = (template) => {
    template.id = Math.random();
    let templates = [...this.state.templates, template]
    this.setState({
      templates: templates
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Admin templates={this.state.templates} addTemplate={this.addTemplate} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;