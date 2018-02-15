import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';

Button.propTypes = {
    onClick: PropTypes.func,
    inverse: PropTypes.bool
};

Button.defaultProps = {
    inverse: false
};

export default function Button({ onClick, children, inverse }) {
    return <button className={`${styles.container} ${inverse && styles.inverse}`} onClick={onClick}>{children}</button>;
}
