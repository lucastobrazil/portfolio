import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

import Nav from './sections/Nav';
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
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Nav />
          <ScrollMemory />
          <AppContent />
          <Footer />
        </div>
      </Router>
    );
  }
}

const AppContent = () => (
  <Switch>
    <Route exact path="/" component={Header} />
    <Route exact path={`/${LINKS.SI}`} component={SiPage} />
    <Route exact path={`/${LINKS.MMN}`} component={MmnPage} />
    <Route exact path={`/${LINKS.HHR}`} component={HhrPage} />
    <Route exact path={`/${LINKS.NM}`} component={NmPage} />
    <Route exact path={`/${LINKS.NMP}`} component={NmpPage} />
    <Route exact path={`/${LINKS.PAN}`} component={PrintAnimationPage} />
    <Route exact path={`/${LINKS.VID}`} component={VideoProductionPage} />
    <Route exact path={`/${LINKS.ACMS}`} component={AnchormanPage} />

    <Route exact path={`/${LINKS.DESIGN}`} component={UiDev} />
    <Route exact path={`/${LINKS.LEADERSHIP}`} component={Leadership} />
    <Route exact path={`/${LINKS.ABOUT}`} component={AboutMe} />
  </Switch>
);

export default App;
