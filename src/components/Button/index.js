import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.less';

Button.propTypes = {
    onClick: PropTypes.func,
    inverse: PropTypes.bool
};

Button.defaultProps = {
    inverse: false
};

export default function Button({ onClick, children, inverse, className }) {
    return <button className={classNames(className, styles.container, { [styles.inverse]: inverse })} onClick={onClick}>{children}</button>;
}
