import React from 'react';
import { Link } from 'react-router-dom';
import Inner from '../../components/Section/Inner';
import ProfileBubble from '../../components/ProfileBubble';
import styles from './style.less';
import { LINKS } from '../constants';
export default function Home({ className, children }) {
    return (
        <section className={styles.container}>
            <Inner className={styles.inner}>
                <h1>Product Designer, Developer and Leader.</h1>
                <p className={styles.subHeading}>
                    I am passionate about design, people, innovative technology and building powerful and impactful
                    solutions.
                </p>
                <Link to={`/${LINKS.WORK}`}>See my work</Link>
                <div className={styles.bubbleContainer}>
                    <span className={styles.greeting}>
                        <span role="img" className={styles.emoji} aria-label="Waving emoji">
                            👋
                        </span>
                    </span>
                    <ProfileBubble />
                </div>
            </Inner>
        </section>
    );
}
