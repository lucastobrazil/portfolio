import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import mmnAdvertising from './images/mmn-screen.jpg';
import mmnHome from './images/mmn-home.png';
import mmnJobArt from './images/mmn-jobArt.png';

import { ROLES, LINKS } from '../../constants';

export default {
    title: 'Manage My Nightlife',
    role: ROLES.UI_DEV,
    linkUrl: LINKS.MMN,
    modalContent: {
        cardArt: mmnHome,
        jobArt: mmnJobArt,
        jobDescription: 'Manage My Nightlife - an app designed across Web, iOS and Android platforms for users of a Music Video playback system. The system outputs music videos onto the TV screens inside a venue.',
        jobOverview: {
            team: 'I worked as designer and front end developer alongside a team of 5 other full-stack developers.',
            tasks:
                <ul>
                    <li>UI &amp; UX design and development - all platforms</li>
                    <li>Colour pallette to rollout across all platforms</li>
                    <li>Colour functions coded to  aid in user feedback and interactivity</li>
                    <li>Custom icon sets</li>
                </ul>
        },
        tools: ['less', 'illustrator', 'photoshop', 'knockout'],
        sections: [
            {
                title: 'App Design and Style',
                altBg: true,
                body:
                    <Fragment>
                        <p>Working with with three back-end developers, I created the UI across all
                        platforms, as well as getting ‘hands on’ in the code. After release, I made
                        improvements to the UX ongoing as we discovered how users were
                interacting with the  app via user feedback.</p>
                        <ImageWithCaption src={mmnHome} caption="ManageMyNightlife - song view sceren" />
                    </Fragment>
            }, {
                title: 'Feature: Advertising Platform',
                altBg: false,
                body:
                    <Fragment>
                        <ul>
                            <li>Users can manage advertising content that is displayed on TV screens in a venue.</li>
                            <li>I designed an interface to let users create their own 'Text-over-image' advertisements in the browser</li>
                            <li>Coded most of the UI for this module</li>
                        </ul>
                        <ImageWithCaption src={mmnAdvertising} caption="Advertising file management for ManageMyNightlife" />
                    </Fragment>
            },
        ]
    }
};


