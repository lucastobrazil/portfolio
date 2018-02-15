import React from 'react';
import Inner from '../../components/Section/Inner';
import styles from './style.less';

export default function Footer({ className, children }) {
    return <footer className={styles.container}>
        <Inner>
            <h1>Let's chat!</h1>
            <p>Blah blah</p>
        </Inner>
    </footer>;
}
