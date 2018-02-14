import styles from './style.less';
import React from 'react';

export default function ProfileBubble({ imageUrl }) {
    return <img src={imageUrl} className={styles.container} />;
}
