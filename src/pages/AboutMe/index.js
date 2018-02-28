import React from 'react';
import Section from '../../components/Section';
import ProfileBubble from '../../components/ProfileBubble';
import { SECTIONS } from '../constants';
import styles from './style.less';

export default function AboutMe() {
    return <Section altBg={true} className={styles.container}>
        <div>
            <h1>{SECTIONS.ABOUT}</h1>
            <div className={styles.intro}>
                <p>Hi, I’m Lucas! An Australian designer, developer and leader currently living in Berlin with my wife Claire and son Charlie. We love life, people, travel, music, art, projects and nature.</p>
                <ProfileBubble />
            </div>
            <p>Now, onto the professional stuff...</p>
            <p>My ten years of experience has covered a broad range of areas. From design and digital media production to HTML, CSS, native and JavaScript development, what I’ve learned about myself is that I love solving problems, working with people and using tools to build things.</p>
            <p>After graduating from Queensland University of Technology (Australia) with a double bachelor degree in Business and Creative Industries, I have worked mostly in the worlds of HR-tech and entertainment-tech. My professional experience covers areas of graphic / multimedia design, UI (and some UX) design, front end development and more recently; leadership and project management in design teams.</p>
            <p>Beyond my tertiary qualifications and experience in the creative industries, my personality and compassion for others means I am ready to work on any project with any team. I enjoy taking the lead and being the organiser, but also love to get my hands dirty at a grassroots level.</p>

            <p>Keen to chat? Let's connect on <a href="https://www.linkedin.com/in/lucasarundell" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
        </div>

    </Section>;
}
