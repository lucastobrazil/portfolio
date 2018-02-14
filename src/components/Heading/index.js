import styles from './style.less';
import React from 'react';

export default function Heading({ className, children }) {
    return <h1 className={styles.base}>{children}</h1>;
}
