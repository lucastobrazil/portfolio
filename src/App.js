import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './pages/Nav';
import Home from './pages/Home';
import UiDev from './pages/UiDev';
import Leadership from './pages/Leadership';
import AboutMe from './pages/AboutMe';
import Footer from './pages/Footer';

import { LINKS } from './pages/constants';
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
        <main>
          <Nav />
          {/* <ScrollMemory /> */}
          <AppContent />
          <Footer />
        </main>
      </Router>
    );
  }
}

const AppContent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
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
