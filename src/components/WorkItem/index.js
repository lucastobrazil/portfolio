import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';
import Button from '../Button';
import bgImage from '../../bg.svg';
import Modal from '../Modal';
import Detail from './Detail';

const propTypes = {
    title: PropTypes.string,
    overview: PropTypes.string,
    tools: PropTypes.array,
    onClick: PropTypes.func,
};

const defaultProps = {
    onClick: () => { },
    tools: []
};

export default class WorkItem extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        };

    }

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        const { title, overview, modalContent, category } = this.props;
        const { modalOpen } = this.state;
        const detailProps = {
            ...modalContent,
            title,
            category
        };
        return (
            <article button className={styles.container}>
                <button className={styles.inner} onClick={this.toggleModal}>
                    <div className={styles.cover} />
                    <header className={styles.header} style={{ backgroundImage: `url(${modalContent.heroImage})` }}>
                    </header>
                    <section className={styles.content}>
                        <h1>{title}</h1>
                        {overview}
                    </section>
                </button>
                <Modal
                    isOpen={modalOpen}
                    contentLabel="Modal"
                    onRequestClose={this.toggleModal}
                    fullscreen={true}
                    backButton={true}
                >
                    <Detail {...detailProps} />
                </Modal>
            </article>
        );
    }
}

WorkItem.propTypes = propTypes;
WorkItem.defaultProps = defaultProps;
