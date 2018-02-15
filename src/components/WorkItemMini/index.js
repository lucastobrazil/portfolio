import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';
import LinkButton from '../LinkButton';

WorkItemMini.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string,
};

WorkItemMini.defaultProps = {
    onClick: () => { },
    tools: []
};

export default function WorkItemMini({ title, description, linkLabel, linkUrl }) {
    return <article className={styles.container}>
        <div className={styles.inner}>
            <h1>{title}</h1>
            <LinkButton inverse={true} href={linkUrl} target="_blank">{linkLabel}</LinkButton>
        </div>
        <p>{description}</p>
    </article>;
}
