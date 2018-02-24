import React from 'react';
import Inner from '../../components/Section/Inner';
import styles from './style.less';

export default function Footer({ className, children }) {
    return <footer className={styles.container}>
        <Inner>
            <h1>Let's chat!</h1>
            <a href="https://www.linkedin.com/in/lucasarundell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Inner>
    </footer>;
}
