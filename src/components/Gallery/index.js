import React from 'react';
import Image from '../Image';
import styles from './style.less';

export function Gallery({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}


export function GalleryItem({ src, alt, type, children, style }) {

    return (
        <div className={styles.item} style={style}>
        { type === 'video' ? children :
            <Image src={src} alt={alt} />
        }
        </div>
);
}
