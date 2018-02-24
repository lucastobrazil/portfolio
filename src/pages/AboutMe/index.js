import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Section/Image';
import { SECTIONS } from '../constants';
import lucasPhoto from '../../components/ProfileBubble/lucas.jpg';
import styles from './style.less';

export default function AboutMe() {
    return <Section altBg={true} name="about" className={styles.container}>
        <div>
            <h1>{SECTIONS.ABOUT}</h1>
            <p>
                My 10 years of experience has covered a broad range of areas.
          </p>
            <p>
                From Design and Digital Media production to HTML, CSS and JavaScript development, what I’ve learned about myself is that I love solving problems, working with people and using tools to build things.
          </p>
            <p>Over 10 years professional experience in Graphic Design, UI Design, Multimedia, Front End Development and Project Team leading. </p>
            <p>People skills are my forte; I enjoy working in teams, value thinking laterally about solving a problem and being creative to get the best possible result. </p>
            <p>Technically, I'm a fast learner and quick to find the conceptual links between one skill and another. From the computer to the workshop, the pencil to the spreadsheet, I'm ready to get up to speed and get on with the project!</p>
            <p>Beyond my tertiary qualifications and experience in the Creative Industries, my personality and compassion for others means I am ready to work on any project with any team. I enjoy taking the lead and being the organiser, but also love to get my hands dirty at a grass roots level.</p>
        </div>
        <Image src={lucasPhoto} />
    </Section>;
}
