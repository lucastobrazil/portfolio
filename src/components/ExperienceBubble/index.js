import styles from './style.less';
import React from 'react';
import PropTypes from 'prop-types';

ExperienceBubble.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

ExperienceBubble.defaultProps = {
    label: 'Experience'
};

export default function ExperienceBubble({ imageUrl, label, onClick }) {
    return <button className={styles.container}>
        <img src={imageUrl} className={styles.image} />
        {label}
    </button>;
}
