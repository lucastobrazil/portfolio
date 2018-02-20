import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

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
          <ScrollMemory />
          <AppContent />
        </div>
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
  </Switch>
);

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
