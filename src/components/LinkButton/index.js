import React from 'react';
import buttonStyles from '../Button/style.less';
import styles from './style.less';

export default function LinkButton({ href, target, children, inverse }) {
    return <a className={`${styles.container} ${buttonStyles.container} ${inverse && buttonStyles.inverse}`} href={href} target={target}>{children}</a>;
}
