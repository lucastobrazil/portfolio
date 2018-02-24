import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './style.less';

const propTypes = {
    title: PropTypes.string,
    role: PropTypes.string,
    tools: PropTypes.array,
    onClick: PropTypes.func,
};

const defaultProps = {
    onClick: () => { },
    tools: []
};

export default function WorkItem({ title, role, modalContent, linkUrl, style }) {
    return (
        <article className={styles.container}>
            <Link className={styles.inner} to={`/${linkUrl}`}>
                <header className={styles.image} style={{ ...style }} >
                </header>
                <section className={styles.content}>
                    <h1>{title}</h1>
                    {role}
                </section>
            </Link>
        </article>
    );
}

WorkItem.propTypes = propTypes;
WorkItem.defaultProps = defaultProps;
