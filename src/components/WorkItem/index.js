import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './style.less';
import Modal from '../Modal';
import Button from '../Button';
import Detail from './Detail';

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

export default class WorkItem extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        };

    }

    toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen });

    render() {
        const { title, role, modalContent, linkUrl } = this.props;
        const { modalOpen } = this.state;
        const detailProps = {
            ...modalContent,
            title,
            role
        };
        return (
            <article button className={styles.container}>
                <Link className={styles.inner} to={`/${linkUrl}`}>
                    <header className={styles.image} style={{ backgroundImage: `url(${modalContent.cardArt})` }}>
                    </header>
                    <section className={styles.content}>
                        <h1>{title}</h1>
                        {role}
                    </section>
                </Link>
                <Modal
                    isOpen={modalOpen}
                    contentLabel="Modal"
                    onRequestClose={this.toggleModal}
                    fullscreen={true}
                    backButton={true}
                    title={title}
                    subtitle={role}
                >
                    <Detail {...detailProps} />
                    <Button className={styles.homeButton} onClick={this.toggleModal}>Back to home</Button>
                </Modal>
            </article>
        );
    }
}

WorkItem.propTypes = propTypes;
WorkItem.defaultProps = defaultProps;
