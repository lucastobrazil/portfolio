import Inner from './Inner';
import React from 'react';
import classNames from 'classnames';
import styles from './style.less';

export default function Section({ className, children, altBg }) {
    return <section className={classNames(className, { [styles.altBg]: altBg })}><Inner>{children}</Inner></section>;
}
