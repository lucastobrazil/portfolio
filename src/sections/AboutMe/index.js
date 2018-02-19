import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Section/Image';
import {SECTIONS} from '../constants';
export default function AboutMe() {
    return <Section altBg={true} name="about">
        <h1>{SECTIONS.ABOUT}</h1>
        <p>Over 10 years professional experience in Graphic Design, UI Design, Multimedia, Front End Development and Project Team leading. </p>
        <p>People skills are my forte; I enjoy working in teams, value thinking laterally about solving a problem and being creative to get the best possible result. </p>
        <p>Technically, I'm a fast learner and quick to find the conceptual links between one skill and another. From the computer to the workshop, the pencil to the spreadsheet, I'm ready to get up to speed and get on with the project!</p>
        <p>Beyond my tertiary qualifications and experience in the Creative Industries, my personality and compassion for others means I am ready to work on any project with any team. I enjoy taking the lead and being the organiser, but also love to get my hands dirty at a grass roots level.</p>
    </Section>;
}
