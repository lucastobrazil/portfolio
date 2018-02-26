import React from 'react';
import styles from './style.less';
import ImageZoom from 'react-medium-image-zoom';
import classNames from 'classnames';

export default function Image({ className, src, alt, style }) {
    return (
        <ImageZoom
            image={{
                src: src,
                alt: alt,
                className: classNames(className, styles.image),
            }}
        />
    );
}
