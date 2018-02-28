import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

import Nav from './pages/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Leadership from './pages/Leadership';
import AboutMe from './pages/AboutMe';
import Footer from './pages/Footer';
import Page404 from './pages/Page404';

import { LINKS } from './pages/constants';
import {
  ArundelPage,
  SiPage,
  MmnPage,
  CddjPage,
  HhrPage,
  NmPage,
} from './pages/content';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <ScrollMemory />
          <main>
            <AppContent />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const AppContent = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path={`/${LINKS.WORK}`} component={Work} />
    <Route exact path={`/${LINKS.LEADERSHIP}`} component={Leadership} />
    <Route exact path={`/${LINKS.ABOUT}`} component={AboutMe} />

    <Route exact path={`/${LINKS.SI}`} component={SiPage} />
    <Route exact path={`/${LINKS.MMN}`} component={MmnPage} />
    <Route exact path={`/${LINKS.CDDJ}`} component={CddjPage} />
    <Route exact path={`/${LINKS.HHR}`} component={HhrPage} />
    <Route exact path={`/${LINKS.NM}`} component={NmPage} />
    <Route exact path={`/${LINKS.ADL}`} component={ArundelPage} />

    <Route component={Page404} />

  </Switch>
);

export default App;
