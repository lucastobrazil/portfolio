import React from 'react';
import Inner from '../../components/Section/Inner';
import Heading from '../../components/Heading';
import ProfileBubble from '../../components/ProfileBubble';
import styles from './style.less';

export default function Home({ className, children }) {
    return <section className={styles.container}>
        <Inner className={styles.inner}>
            <Heading>I’m a UI Designer, Front End Developer and Design Team Coordinator.</Heading>
            <p className={styles.subHeading}>I like people, technology,  creative projects and building stuff.</p>
            <div className={styles.bubbleContainer}>
                <span className={styles.greeting}><span role="img" className={styles.emoji} aria-label="Waving emoji">👋</span> Hi there!</span>
                <ProfileBubble />
            </div>
        </Inner>
    </section>;
}