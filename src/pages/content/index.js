import React from 'react';
import WorkItemDetail from '../../components/WorkItemDetail';
import WorkItem from '../../components/WorkItem';

import CONTENT from './content';

const ArundelPage = () => <WorkItemDetail {...CONTENT.ADL} />;
const CddjPage = () => <WorkItemDetail {...CONTENT.CDDJ} />;
const HhrPage = () => <WorkItemDetail {...CONTENT.HHR} />;
const MmnPage = () => <WorkItemDetail {...CONTENT.MMN} />;
const NmPage = () => <WorkItemDetail {...CONTENT.NM} />;
const SiPage = () => <WorkItemDetail {...CONTENT.SI} />;

export {
    ArundelPage,
    CddjPage,
    HhrPage,
    MmnPage,
    NmPage,
    SiPage,
};

export const workItems = [
    <WorkItem {...CONTENT.SI} />,
    <WorkItem {...CONTENT.CDDJ} />,
    <WorkItem {...CONTENT.MMN} />,
    <WorkItem {...CONTENT.ADL} />,
    <WorkItem {...CONTENT.HHR} />,
    <WorkItem {...CONTENT.NM} />,
];
