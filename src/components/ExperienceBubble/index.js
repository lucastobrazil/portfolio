import styles from './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

ExperienceBubble.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

ExperienceBubble.defaultProps = {
    label: 'Experience'
};

export default function ExperienceBubble({ className, imageUrl, label, onClick, href }) {
    return <a className={classNames(className, styles.container)} href={href}>
        <img src={imageUrl} className={styles.image} alt={`Experience - ${label}`} />
        <span className={styles.label}>{label}</span>
    </a>;
}
