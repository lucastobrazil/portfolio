import React from 'react';
import {Link} from 'react-router-dom';
import Inner from '../../components/Section/Inner';
import ProfileBubble from '../../components/ProfileBubble';
import styles from './style.less';
import {LINKS} from '../constants';
export default function Home({ className, children }) {
    return <section className={styles.container}>
        <Inner className={styles.inner}>
            <h1>I’m a UI Designer, Front End Developer and Design Team Coordinator.</h1>
            <p className={styles.subHeading}>I like people, technology, creativity and building things.</p>
            <Link to={`/${LINKS.WORK}`}>See my work</Link>
            <div className={styles.bubbleContainer}>
                <span className={styles.greeting}><span role="img" className={styles.emoji} aria-label="Waving emoji">👋</span> Hi there!</span>
                <ProfileBubble />
            </div>
        </Inner>
    </section>;
}
