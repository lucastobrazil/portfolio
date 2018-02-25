import React from 'react';
import styles from './style.less';
import ImageZoom from 'react-medium-image-zoom';

export default function Image({ src, alt, style }) {
    return (
        <div className={styles.container} style={style}>
            <ImageZoom
                image={{
                    src: src,
                    alt: alt,
                    className: styles.image,
                }}
            />
        </div>
    );
}
