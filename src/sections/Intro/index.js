import React from 'react';
import Inner from '../../components/Section/Inner';
import Heading from '../../components/Heading';
import ProfileBubble from '../../components/ProfileBubble';
import Section from '../../components/Section';
import ExperienceBubble from '../../components/ExperienceBubble';
import styles from './style.less';

export default function Intro() {
    return <Section>
        <p>
            My 10 years’ experience has been quite broad.
          </p>
        <p>
            From HTML, CSS and JavaScript development to Design and Digital Media production, what I’ve learned about myself is that I love solving problems, working with people and using tools to build things.
          </p>
        <p>
            Check out some highlights below:
          </p>
        <ExperienceBubble label="Ui Design and Development" href="#UiDev" />
        <ExperienceBubble label="Leadership and Coordination" href="#leadership" />
        <ExperienceBubble label="Web, Video and Print" href="#multimedia" />
    </Section>;
}
