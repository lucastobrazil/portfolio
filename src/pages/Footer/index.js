import React from 'react';
import Inner from '../../components/Section/Inner';
import styles from './style.less';

export default function Footer({ className, children }) {
    return <footer>
        <Inner className={styles.inner}>
            <p>&copy; 2017 Lucas Arundell</p>
            <a href="https://www.linkedin.com/in/lucasarundell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </Inner>
    </footer>;
}
