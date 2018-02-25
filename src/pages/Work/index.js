import React, { Fragment } from 'react';
import Section from '../../components/Section';
import WorkItemMini from '../../components/WorkItemMini';
import styles from './style.less';
import { workItems } from '../../pages/content';
import { workItemMiniData } from '../../pages/content/content';

import { SECTIONS } from '../constants';



const WorkItemsGrid = () => workItems.map((item, i) => <Fragment key={i}>{item}</Fragment>);

export default function Work() {
    return <Section altBg={true}>
        <h1>{SECTIONS.WORK}</h1>
        <div className={styles.workItemGrid}>
            <WorkItemsGrid />
        </div>

        <h2>Some other development projects</h2>
        {workItemMiniData.map((itemProps, i) => <WorkItemMini {...itemProps} key={i} />)}
    </Section>;
}

