import styles from './style.less';
import React from 'react';

export default function Inner({ children }) {
    return <div className={styles.container}>{children}</div>;
}
