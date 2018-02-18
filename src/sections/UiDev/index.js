import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Section/Image';
import WorkItem from '../../components/WorkItem';
import WorkItemMini from '../../components/WorkItemMini';
import styles from './style.less';

import manageMyNightlife from './content/ManageMyNightlife';
import smallImprovements from './content/SmallImprovements';
import heavenHr from './content/HeavenHr';
import anchormanCms from './content/AnchormanCms';

const workItems = [
    smallImprovements,
    manageMyNightlife,
    heavenHr,
    anchormanCms,
];

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

export default function UiDev() {
    return <Section className={styles.container} name="UiDev">
        <h1>UI Design and Development</h1>
        <div className={styles.workItemGrid}>
            {workItems.map((itemProps, i) => <WorkItem {...itemProps} category="UI Design and Development" key={i} />)}
        </div>
        {workItemMiniData.map((itemProps, i) => <WorkItemMini {...itemProps} key={i}  />)}
        <p>I started coding Visual Basic back in High School, and learned HTML and CSS to create websites for various bands I played in. I have since developed a professional career in developing complex web applications, brochure-style websites, native apps and experimental apps using technologies like React Native.</p>
        <Image src="https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg" />
    </Section>;
}
