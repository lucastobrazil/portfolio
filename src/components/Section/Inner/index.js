import styles from './style.less';
import React from 'react';
import classNames from 'classnames';

export default function Inner({ className, children }) {
    return <div className={classNames(className, styles.container)}>{children}</div>;
}