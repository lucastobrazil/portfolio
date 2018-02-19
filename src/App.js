import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './sections/Header';
import Intro from './sections/Intro';
import UiDev from './sections/UiDev';
import Leadership from './sections/Leadership';
import AboutMe from './sections/AboutMe';
import Footer from './sections/Footer';

import { LINKS } from './sections/constants';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path={`/${LINKS.SI}`} component={About} />
          <Route path={`/${LINKS.MMN}`} component={About} />
          <Route path={`/${LINKS.HHR}`} component={About} />
          <Route path={`/${LINKS.NM}`} component={About} />
          <Route path={`/${LINKS.NMP}`} component={About} />
          <Route path={`/${LINKS.PAN}`} component={About} />
          <Route path={`/${LINKS.VID}`} component={About} />
          <Route path={`/${LINKS.ACMS}`} component={About} />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <Fragment>
    <Header />
    <Intro />
    <UiDev />
    <Leadership />
    <AboutMe />
    <Footer />
  </Fragment>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
