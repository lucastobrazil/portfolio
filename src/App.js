import React, { Component } from 'react';
import Header from './sections/Header';
import Intro from './sections/Intro';
import UiDev from './sections/UiDev';
import Leadership from './sections/Leadership';
import WebVideoPrint from './sections/WebVideoPrint';
import Footer from './sections/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <UiDev />
        <Leadership />
        <WebVideoPrint />
        <Footer />
      </div>
    );
  }
}

export default App;
