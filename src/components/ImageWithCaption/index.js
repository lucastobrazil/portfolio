import React from 'react';
import styles from './style.less';
import classNames from 'classnames';

export default function ImageWithCaption({ containerClasses, className, style, src, alt, caption }) {
  return (
    <figure className={classNames(styles.figure, containerClasses)}>
      <img
        className={classNames(className, styles.image)}
        style={style}
        src={src}
        alt={alt} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
