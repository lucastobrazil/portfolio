import React from 'react';
import styles from './style.less';
import ImageZoom from 'react-medium-image-zoom';

export default function Image({ src, alt, style }) {
    return (
        <ImageZoom
            image={{
                src: src,
                alt: alt,
                className: styles.image,
            }}
        />
    );
}
