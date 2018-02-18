import React from 'react';
import styles from './style.less';

export default function Detail({title, body, heroImage, category}) {
    return <div>
        <div className={styles.heroImage} style={{backgroundImage: `url(${heroImage})`}} />
        <h1>{title}</h1>
        <h2>{category}</h2>
        {body}
        </div>;
}