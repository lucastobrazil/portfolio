import React from 'react';
import styles from './style.less';

export default function ToolsIcon({ icon }) {
    const iconToRender = require(`./icons/${icon}.svg`);
    return <img className={styles.icon} src={iconToRender} alt={`Icon for ${icon}`} />
}
