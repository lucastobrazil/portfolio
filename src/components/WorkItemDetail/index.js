import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';
import ToolsIcon from '../ToolsIcon';
import backIcon from './images/back_x.svg';
import ImageWithCaption from '../ImageWithCaption';
import Section from '../Section';

export default function WorkItemDetail({ title, role, linkUrl, modalContent, history }) {
    const { jobArt, jobDescription, jobOverview, tools, sections } = modalContent;
    const { team, tasks } = jobOverview;
    return (
        <Fragment>
            <Section className={styles.introSection}>
                <BackButton className={styles.close} />
                <h1>{title}</h1>
                <h2>{role}</h2>
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
                <h2 className={styles.toolsHeader}>Tools</h2>
                {tools.map(i => <ToolsIcon icon={i} />)}
            </Section>
        </Fragment>
    );
}

function DetailBodySection({ title, altBg, body }) {
    return (
        <Section altBg={altBg} className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.detailBody}>{body}</div>
        </Section>
    )
}



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
