import React from 'react';
import styles from './style.less';
import LazyLoad from 'react-lazyload';
import ImageWithCaption from '../../ImageWithCaption';

export default function Image({ src, alt, caption }) {
    return (
        <LazyLoad height={200} offset={100}>
            <ImageWithCaption src={src} containerClasses={styles.image} alt={alt} caption={caption} />
        </LazyLoad>
    );
}
