import React from 'react';
import Inner from '../../components/Section/Inner';
import Heading from '../../components/Heading';
import ProfileBubble from '../../components/ProfileBubble';
import styles from './style.less';

export default function Header({ className, children }) {
    return <header className={styles.header}>
        <Inner>
            <p>Lucas Arundell</p>
            <Heading>I’m a UI Designer, Front End Developer and Design Team Coordinator.</Heading>
            <p>I’m a UI Designer, Front End Developer and Design Team Coordinator.</p>
            <div className={styles.bubbleContainer}>
                <span className={styles.greeting}>👋 Hi there!</span>
                <ProfileBubble />
            </div>
        </Inner>
    </header>;
}
