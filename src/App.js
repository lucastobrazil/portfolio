import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ScrollContext } from 'react-router-scroll-4';

import Header from './sections/Header';
import Intro from './sections/Intro';
import UiDev from './sections/UiDev';
import Leadership from './sections/Leadership';
import AboutMe from './sections/AboutMe';
import Footer from './sections/Footer';

import { LINKS } from './sections/constants';
import {
  AnchormanPage,
  PrintAnimationPage,
  SiPage,
  MmnPage,
  HhrPage,
  NmPage,
  NmpPage,
  VideoProductionPage
} from './pages/content';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollContext>
          <div>
            <Route exact path="/" component={Home} />
            <Route path={`/${LINKS.SI}`} component={SiPage} />
            <Route path={`/${LINKS.MMN}`} component={MmnPage} />
            <Route path={`/${LINKS.HHR}`} component={HhrPage} />
            <Route path={`/${LINKS.NM}`} component={NmPage} />
            <Route path={`/${LINKS.NMP}`} component={NmpPage} />
            <Route path={`/${LINKS.PAN}`} component={PrintAnimationPage} />
            <Route path={`/${LINKS.VID}`} component={VideoProductionPage} />
            <Route path={`/${LINKS.ACMS}`} component={AnchormanPage} />
          </div>
        </ScrollContext>
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

export default App;
