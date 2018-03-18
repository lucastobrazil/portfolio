import React, { Fragment } from 'react';
import Section from '../../components/Section';
import WorkItemMini from '../../components/WorkItemMini';
import styles from './style.less';
import { workItems } from '../../pages/content';
import { workItemMiniData } from '../../pages/content/content';

import { SECTIONS } from '../constants';

const WorkItemsGrid = () => workItems.map((item, i) => <Fragment key={i}>{item}</Fragment>);

export const WorkItemsSection = () => (
    <div className={styles.workItemGrid}>
        <WorkItemsGrid />
    </div>
);
export default function Work() {
    return (
        <Section altBg={false}>
            <h1>{SECTIONS.WORK}</h1>
            <WorkItemsSection />

            <h3>Open source development projects</h3>
            {workItemMiniData.map((itemProps, i) => <WorkItemMini {...itemProps} key={i} />)}
        </Section>
    );
}
