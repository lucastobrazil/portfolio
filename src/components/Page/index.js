import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { BrowserHistory } from "react-router";
import { Link } from "react-router-dom";
import styles from './style.less';
import classNames from 'classnames';
import ToolsIcon from '../ToolsIcon';
import backIcon from './images/back_x.svg';
import ImageWithCaption from '../ImageWithCaption';

class BackButton extends Component {
    static contextTypes = {
        router: PropTypes.object, // replace with PropTypes.object if you use them
    }

    render() {
        return (
            <button
                className={this.props.className}
                onClick={this.context.router.history.goBack}>
                <img src={backIcon} alt="Close Modal" /> Back
        </button>
        )
    }
}

export default function Page({ title, role, linkUrl, modalContent, history }) {
    const { jobArt, jobDescription, jobOverview, tools, sections } = modalContent;
    const { team, tasks } = jobOverview;
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <BackButton className={styles.close} />
                    <h1>My work: {title}</h1>
                    <h2>{role}</h2>
                </div>
            </header>
            <Section>
                <div className={styles.jobDetails}>
                    <div>
                        <h2>Team:</h2>
                        <p>{team}</p>
                        <h2>About the Project:</h2>
                        <p>{jobDescription}</p>
                        {tasks &&
                            <Fragment>
                                <h2>Overview of Tasks:</h2>
                                {tasks}
                            </Fragment>
                        }
                    </div>
                    <ImageWithCaption className={styles.jobArt} src={jobArt} />
                </div>
            </Section>
            {sections.map(s => <DetailBodySection {...s} />)}
            <Section altBg={true}>
                <h2>Tools</h2>
                {tools.map(i => <ToolsIcon icon={i} />)}
            </Section>
        </div>
    );
}

function Section({ children, className, altBg }) {
    return (
        <section className={classNames(className, styles.section, { [styles.altBg]: altBg })}>
            <div className={styles.inner}>
                {children}
            </div>
        </section>
    );
}

function DetailBodySection({ title, altBg, body }) {
    return (
        <Section altBg={altBg}>
            <h2>{title}</h2>
            <div className={styles.detailBody}>{body}</div>
        </Section>
    )
}

