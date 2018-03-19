import React, { Fragment } from 'react';
import styles from './style.less';
import ToolsIcon from '../ToolsIcon';
import Section from '../Section';
import classNames from 'classnames';
import { WorkItemsSection } from '../../pages/Work';

export default function WorkItemDetail({ title, role, year, linkUrl, modalContent, history, style }) {
    const { jobBg, jobDescription, jobOverview, tools, sections } = modalContent;
    const { team, tasks } = jobOverview;
    return (
        <Fragment>
            <Section className={classNames(styles.section, styles.introSection)}>
                {/* <BackButton className={styles.back} /> */}
                <h1 className={styles.mainTitle}>{title}</h1>
                <h2 className={styles.role}>
                    {role} &middot; {year}
                </h2>
            </Section>
            <div
                className={styles.artSection}
                style={{
                    backgroundColor: style.backgroundColor,
                    backgroundImage: `url(${jobBg})`,
                }}
            />
            <Section>
                <div className={styles.jobDetails}>
                    <div>
                        <h2>Overview</h2>
                        <p>{jobDescription}</p>
                        <h2>Team</h2>
                        <p>{team}</p>
                        {tasks && (
                            <Fragment>
                                <h2>Tasks</h2>
                                {tasks}
                            </Fragment>
                        )}
                    </div>
                </div>
            </Section>
            {sections.map((s, i) => <DetailBodySection {...s} key={i} />)}
            <Section altBg={true}>
                <h2 className={styles.toolsHeader}>Tools</h2>
                <div className={styles.toolsContainer}>{tools.map((tool, i) => <ToolsIcon icon={tool} key={i} />)}</div>
            </Section>
            <Section>
                <p>More of my work</p>
                <WorkItemsSection />
            </Section>
        </Fragment>
    );
}

function DetailBodySection({ title, altBg, body, gallery }) {
    return (
        <Section altBg={altBg} className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.detailBody}>{body}</div>
            {gallery}
        </Section>
    );
}

// class BackButton extends Component {
//     static contextTypes = {
//         router: PropTypes.object, // replace with PropTypes.object if you use them
//     }

//     render() {
//         return (
//             <button
//                 className={this.props.className}
//                 onClick={this.context.router.history.goBack}>
//                 <img src={backIcon} alt="Back to my work" /> My Work
//             </button>
//         )
//     }
// }
