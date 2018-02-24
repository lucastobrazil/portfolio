import React, { Fragment } from 'react';
import Section from '../../components/Section';
import WorkItemMini from '../../components/WorkItemMini';
import styles from './style.less';
import { workItems } from '../../pages/content';

import { SECTIONS } from '../constants';

const workItemMiniData = [
    {
        title: 'react-with-animation',
        description: 'Open-source library for handling short-lived CSS animations in react',
        linkUrl: 'https://github.com/SmallImprovements/react-with-animation',
        linkLabel: 'Github',
    },
    {
        title: 'cornerstone-components',
        description: 'Custom-build components for the Wordpress \'cornerstone\' editor',
        linkUrl: '#',
        linkLabel: 'Github',
    },
    {
        title: 'knockout-assetlist',
        description: 'A simple asset list with sidebar using KnockoutJS and Bootstrap',
        linkUrl: 'https://github.com/lucastobrazil/knockout-assetlist',
        linkLabel: 'Github',
    },
]

export default function DesignDev() {
    return <Section altBg={true}>
        <h1>{SECTIONS.DESIGN_DEV}</h1>
        <div className={styles.workItemGrid}>
            {workItems.map((item, i) => <Fragment key={i}>{item}</Fragment>)}
        </div>

        <h2>Some other development projects:</h2>
        {workItemMiniData.map((itemProps, i) => <WorkItemMini {...itemProps} key={i} />)}
    </Section>;
}
