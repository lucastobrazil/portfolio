import React from 'react';
import WorkItemDetail from '../../components/WorkItemDetail';
import WorkItem from '../../components/WorkItem';

import CONTENT from './content';

const AnchormanPage = () => <WorkItemDetail {...CONTENT.ACMS} />;
const PrintAnimationPage = () => <WorkItemDetail {...CONTENT.PAN} />;
const SiPage = () => <WorkItemDetail {...CONTENT.SI} />;
const MmnPage = () => <WorkItemDetail {...CONTENT.MMN} />;
const HhrPage = () => <WorkItemDetail {...CONTENT.HHR} />;
const NmPage = () => <WorkItemDetail {...CONTENT.NM} />;
const NmpPage = () => <WorkItemDetail {...CONTENT.NMP} />;
const VideoProductionPage = () => <WorkItemDetail {...CONTENT.VID} />;

export {
    AnchormanPage,
    PrintAnimationPage,
    SiPage,
    MmnPage,
    HhrPage,
    NmPage,
    NmpPage,
    VideoProductionPage
};

export const workItems = [
    <WorkItem {...CONTENT.SI} />,
    <WorkItem {...CONTENT.MMN} />,
    <WorkItem {...CONTENT.HHR} />,
    <WorkItem {...CONTENT.NM} />,
    <WorkItem {...CONTENT.PAN} />,
    <WorkItem {...CONTENT.NMP} />,
    <WorkItem {...CONTENT.VID} />,
    <WorkItem {...CONTENT.ACMS} />,
];
