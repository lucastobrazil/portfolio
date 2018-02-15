import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';
import Button from '../Button';
import bgImage from '../../bg.svg';
import Modal from '../Modal';

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
        const { title, overview, tools, body, backgroundImage, onClick } = this.props;
        const { modalOpen } = this.state;
        return (
            <article button className={styles.container}>
                <div className={styles.inner}>
                    <header className={styles.header} style={{ backgroundImage: `url(${bgImage})` }}>
                        <h1>{title}</h1>
                    </header>
                    <h2> Overview</h2>
                    {overview}

                    <h2>Tools</h2>
                    <ul>{tools.map((item, i) => <li key={i}>{item}</li>)}</ul>

                    <Button className={styles.detailButton} onClick={this.toggleModal}>See Detail</Button>
                </div>
                <Modal
                    isOpen={modalOpen}
                    contentLabel="Modal"
                    onRequestClose={this.toggleModal}
                    fullscreen={true}
                    backButton={true}
                >
                    <h1>{title}</h1>
                    {body}
                </Modal>
            </article>
        );
    }
}

WorkItem.propTypes = propTypes;
WorkItem.defaultProps = defaultProps;
