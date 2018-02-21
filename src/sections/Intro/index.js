import React from 'react';
import Section from '../../components/Section';
import ExperienceBubble from '../../components/ExperienceBubble';
import { SECTIONS } from '../constants';

export default function Intro() {
    return <Section>
        <p>
            My 10 years of experience has covered a broad range of areas.
          </p>
        <p>
            From Design and Digital Media production to HTML, CSS and JavaScript development, what I’ve learned about myself is that I love solving problems, working with people and using tools to build things.
          </p>
        <p>
            Check out some highlights below:
          </p>
        <ExperienceBubble label={SECTIONS.DESIGN_DEV} href="#design" />
        <ExperienceBubble label={SECTIONS.LEADERSHIP} href="#leadership" />
        <ExperienceBubble label={SECTIONS.ABOUT} href="#about" />
    </Section>;
}
