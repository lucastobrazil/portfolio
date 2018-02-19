import Inner from './Inner';
import React from 'react';
import classNames from 'classnames';
import styles from './style.less';

export default function Section({ className, children, name, altBg }) {
    return <section className={classNames(className, {[styles.altBg]: altBg})}><Inner><a name={name} />{children}</Inner></section>;
}
