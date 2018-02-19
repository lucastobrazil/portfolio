import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import { ROLES, LINKS } from '../../constants';

import activityStream from './images/si-activity-stream.png';
import meetingsImage from './images/si-meetingnote.png';
import siPreview from './images/si-comment.png';
import styleGuide from './images/si-styleguide.png';
import siBeforeAfter from './images/siBeforeAfter.png';

export default {
    title: 'Small Improvements',
    role: ROLES.UI_DEV,
    linkUrl: LINKS.SI,
    modalContent: {
        cardArt: meetingsImage,
        jobDescription: 'Small Improvements is a feedback tool that allows companies to conduct 360º Feedback rounds, set Objectives, conduct 1:1 Meetings, give Praise / Kudos and  formal Performance Reviews.',
        jobOverview: {
            team: 'Working in a cross-functional team consisting of one designer and two full-stack developers. Across teams, all designers meet as a ‘meta team’ - my role also includes being the Design Coordinator.',
            tasks:
                <ul>
                    <li>Gather requirements from Product Managers</li>
                    <li>Explore and define the problem</li>
                    <li>Create wireframes and mocks using Sketch and InVision</li>
                    <li>Iterate based on feedback</li>
                    <li>Create visual specifications to deliver to developers</li>
                </ul>
        },
        tools: ['sketch', 'invision', 'less', 'react', 'webpack', 'slack', 'confluence'],
        sections: [
            {
                title: 'Feature: Activity Stream',
                altBg: true,
                body:
                    <Fragment>
                        <ul>
                            <li>In an effort to increase transparency and engagement within the tool, we created an Activity Stream to present recent happenings.</li>
                            <li>Designed the UI of many content items</li>
                            <li>Created detailed specifications of how content would be aggregated and the different edge cases that can occur</li>
                        </ul>
                        <ImageWithCaption src={activityStream} caption="A preview of some of the 'Content Items' shown in the activity stream." />
                    </Fragment>
            },
            {
                title: 'Feature: 1:1  Meetings',
                altBg: false,
                body:
                    <Fragment>
                        <ul>
                            <li>The newest feature at Small Improvements, designed as a place to keep track of your 1:1 meetings.</li>
                            <li>Both participants can prepare an agenda (Talking Points) and afterwards add notes.</li>
                            <li>Designed UI for individual meetings, dashboard and meetings ‘space’ where users can see all of their meetings</li>
                        </ul>
                        <ImageWithCaption src={meetingsImage} caption="A 1:1 Meeting in Small Improvements." />
                    </Fragment>
            },
            {
                title: 'Living Style Guide',
                altBg: true,
                body:
                    <Fragment>
                        <ul>
                            <li>Organised our components into a design system. The living style guide was built to document the components and UI patterns used within the tool.</li>
                            <li>Acted as an advocate for using it.</li>
                            <li>It was a pleasant place to develop new components in isolation too.</li>
                        </ul>
                        <ImageWithCaption src={styleGuide} caption="The Small Improvements style guide documenting our design patterns." />
                    </Fragment>
            },
            {
                title: 'Responsive overhaul and style updates',
                body:
                    <div>
                        <ul>
                            <li>When I joined, we were in the process of converting the SI app to be mobile-responsive. </li>
                            <li>We took this opportunity to rethink and refactor a lot of the code to follow a consistent pattern and structure.</li>
                            <li>This  also meant an opportunity to update the style of many components (well, basically all of them!)</li>
                        </ul>
                        <img src={siBeforeAfter} style={{ maxWidth: '100%' }} />
                    </div>
            },
        ]
    }
};


