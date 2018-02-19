import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Section/Image';
import {SECTIONS} from '../constants';
export default function AboutMe() {
    return <Section name="about">
        <h1>{SECTIONS.ABOUT}</h1>
        <p>I was born on the Sunshine Coast near Brisbane, Australia.</p>
    </Section>;
}
