import styles from './style.less';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import bgImage from '../../bg.svg';
import { HashLink } from 'react-router-hash-link';

ExperienceBubble.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

ExperienceBubble.defaultProps = {
    label: 'Experience',
    href: ''
};

export default function ExperienceBubble({ className, imageUrl, label, onClick, href }) {
    return <HashLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className={classNames(className, styles.container)} to={`/${href}`}>
        <img src={imageUrl || bgImage} className={styles.image} alt={`Experience - ${label} `} />
        <span className={styles.label}>{label}</span>
    </HashLink>;
}
