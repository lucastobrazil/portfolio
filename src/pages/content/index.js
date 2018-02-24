import React from 'react';
import Page from '../../components/Page';
import WorkItem from '../../components/WorkItem';

import CONTENT from './content';

const AnchormanPage = () => <Page {...CONTENT.ACMS} />;
const PrintAnimationPage = () => <Page {...CONTENT.PAN} />;
const SiPage = () => <Page {...CONTENT.SI} />;
const MmnPage = () => <Page {...CONTENT.MMN} />;
const HhrPage = () => <Page {...CONTENT.HHR} />;
const NmPage = () => <Page {...CONTENT.NM} />;
const NmpPage = () => <Page {...CONTENT.NMP} />;
const VideoProductionPage = () => <Page {...CONTENT.VID} />;

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
