import styles from './style.less';
import React from 'react';
import lucasPhoto from './lucas.jpg';

export default function ProfileBubble() {
    return <img src={lucasPhoto} className={styles.container} />;
}
