import React from 'react';
import styles from './style.less';

export default function Image({src}) {
    return <img src={src} className={styles.image} />;
}