import React from 'react';
import Section from '../../components/Section';
import ProfileBubble from '../../components/ProfileBubble';
import { SECTIONS } from '../constants';
import styles from './style.less';

export default function AboutMe() {
    return (
        <Section altBg={true} className={styles.container}>
            <div>
                <h1>{SECTIONS.ABOUT}</h1>
                <div className={styles.intro}>
                    <p>
                        Hi, I’m Lucas! A Product Designer, Developer and Leader. I'm from Australia and now living in
                        Berlin with my wife Claire and son Charlie. We love travel, people, music, art, projects and
                        nature.
                    </p>
                    <ProfileBubble />
                </div>
                <h3>Now, onto the professional stuff...</h3>
                <p>
                    My ten years of experience has covered a broad range of areas. From design and digital media
                    production to HTML, CSS, native and JavaScript development, what I’ve learned about myself is that I
                    love solving problems, working with people and using tools to build things.
                </p>
                <p>
                    After graduating from Queensland University of Technology (Australia) with Bachelor of Creative
                    Industries and a Bachelor of Business, my roles have been focused in the industries of HR and
                    entertainment technology. I've contributed to the success of numerous brands and products and in
                    that time my natural leadership and interpersnal skills have often placed me in leadership
                    positions.
                </p>
                <p>
                    Beyond my tertiary qualifications and experience, my personality and compassion for others means I
                    am ready to work on any project with any team. I enjoy taking the lead and being the organiser, but
                    also love to get my hands dirty at a grassroots level.
                </p>

                <p>
                    <strong>
                        Keen to chat? Let's connect on{' '}
                        <a href="https://www.linkedin.com/in/lucasarundell" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>.
                    </strong>
                </p>
            </div>
        </Section>
    );
}
