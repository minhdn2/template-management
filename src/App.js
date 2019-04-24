import React, { Component } from 'react';
import Template from './Template';
import Admin from "./Admin/Admin";

class App extends Component {
  state = {
    templates: [
      { id: 1, imgSrc: 'templates/landerz/cover.png', title: 'Landerz', shortDescription: 'Landerz is your go-to solution when in search of the best free business landing page website template. Rock the online world with a contemporary, clean and light web design that will spark their curiosity.', previewLink: 'templates/landerz/landerz/index.html' },
      { id: 2, imgSrc: 'templates/confer/cover.png', title: 'Confer', shortDescription: 'With a free HTML conference website template like Confer, you can market your event or any upcoming gathering like a champ. Kick it off in style and make a difference.', previewLink: 'templates/confer/index.html' },
      { id: 3, imgSrc: 'templates/traveland/cover.png', title: 'Traveland', shortDescription: 'Indeed, Traveland is a free travel booking website template for travel agencies and other tourism businesses. Hammer out the best and most impressive travel page that will stand out a mile.', previewLink: 'templates/traveland/traveland/index.html' },
      { id: 4, imgSrc: 'templates/quitelight/cover.png', title: 'Quitelight', shortDescription: 'Creativity knows no boundaries and nor does Quitelight free creative magazine website template. Get things going now and shine online with your fresh page.', previewLink: 'templates/quitelight/index.html' }
    ]
  }
  render() {
    return (
      <Admin templates={this.state.templates} />
    );
  }
}

export default App;
