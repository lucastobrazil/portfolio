import React, { Component } from 'react';
import Header from './sections/Header';
import Section from './components/Section';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Section>
          <p>
            My 10 years’ experience has been quite broad.
          </p>
          <p>
            From HTML, CSS and JavaScript development to Design and Digital Media production, what I’ve learned about myself is that I love solving problems, working with people and using tools to build things.
          </p>
          <p>
            Check out some highlights below:
          </p>
        </Section>
      </div>
    );
  }
}

export default App;
