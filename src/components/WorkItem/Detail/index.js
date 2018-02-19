import React, { Fragment } from 'react';
import styles from './style.less';
import classNames from 'classnames';
import ToolsIcon from '../../ToolsIcon';
import ImageWithCaption from '../../ImageWithCaption';

export default function Detail({ jobArt, jobDescription, jobOverview, tools, sections }) {
    const { team, tasks } = jobOverview;
    return (
        <div>
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

