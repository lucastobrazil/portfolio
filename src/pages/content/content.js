import React, { Fragment } from 'react';
import ImageWithCaption from '../../components/ImageWithCaption';
import anchormanPreview from './images/anchorman-preview.jpg';
import anchormanScreen from './images/anchorman-cms.jpg';
import { ROLES, LINKS } from '../../pages/constants';

import channelsPreview from './images/channels-preview.jpg';
import chimpanzeePreview from './images/chimpanee-preview.jpg';
import hhrPreview from './images/hhr-preview.jpg';
import vacationScreen from './images/heavenhr-vacation.png';
import mmnAdvertising from './images/mmn-screen.jpg';
import mmnHome from './images/mmn-home.png';
import mmnJobArt from './images/mmn-jobArt.png';
import nmvPrintPreview from './images/nmv-print-preview.jpg';
import nightlifePreview from './images/nightlife-preview.jpg';
import nmWebsiteBlocks from './images/nm-website-blocks.jpg';
import activityStream from './images/si-activity-stream.png';
import meetingsImage from './images/si-meetingnote.png';
import siPreview from './images/si-preview.png';
import styleGuide from './images/si-styleguide.png';
import siBeforeAfter from './images/siBeforeAfter.png';

export default {
    ACMS: {
        title: 'Anchorman News CMS',
        role: ROLES.FE_DEV,
        linkUrl: LINKS.ACMS,
        modalContent: {
            cardArt: anchormanPreview,
            jobDescription: 'I designed a complete system to manage the content of a Live News feed. The client needed a quick way to create, manage and deploy content on the go.',
            jobOverview: {
                team: 'Flying solo.',
            },
            tools: ['less', 'illustrator', 'jquery'],
            sections: [
                {
                    title: 'The System',
                    altBg: true,
                    body:
                        <Fragment>
                            <ul>
                                <li>
                                    To keep the project lightweight, I chose to roll my own - and built the front and back end of this system using PHP, Apache, MySQL database, jQuery (for some UI interaction) and LESS CSS.</li>
                                <li>
                                    The system also builds the news feed in order to generate an online version for the client’s hardware systems.
                            </li>
                            </ul>
                            <ImageWithCaption src={anchormanScreen} alt="Anchorman News CMS" caption="Users can manage news articles, change their Live / Offline status easily." />
                        </Fragment>
                }
            ]
        }
    },
    PAN: {
        title: 'Arundel',
        role: ROLES.PRINT_ANIMATION,
        linkUrl: LINKS.PAN,
        modalContent: {
            cardArt: channelsPreview,
            jobDescription: 'I love art projects - and luckily my musical project \'Arundel\' provides me with many opportunities to do them!',
            jobOverview: {
                team: 'Flying solo, sometimes with collaborators',
                tasks:
                    <ul>
                        <li>Art direction for music videos</li>
                        <li>Concept art creation and preplanning for CD artwork</li>
                        <li>Sculpting, Painting and Photography</li>
                        <li>Costume and Set Design</li>
                        <li>Tour posters</li>
                    </ul>
            },
            tools: ['after-effects', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Album Artwork',
                    altBg: true,
                    body:
                        <p>Channels, Olive Caves</p>
                },
                {
                    title: 'Tour Posters',
                    altBg: false,
                    body:
                        <p>foo</p>
                },
            ]
        }
    },
    VID: {
        title: 'Chimpanzee',
        role: ROLES.VIDEO_PRODUCTION,
        linkUrl: LINKS.VID,
        modalContent: {
            cardArt: chimpanzeePreview,
            jobDescription: 'I love art projects - and luckily my musical project \'Arundel\' provides me with many opportunities to do them!',
            jobOverview: {
                team: 'Talented crew(s) in Brisbane, Australia',
                tasks:
                    <ul>
                        <li>Art direction for music video</li>
                        <li>Set design (we filmed this under my house)</li>
                        <li>Post-production and editing</li>
                        <li>Acting (!!!)</li>
                    </ul>
            },
            tools: ['after-effects', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Music Video',
                    altBg: true,
                    body:
                        <iframe title="Chimpanzee Music Video" width="560" height="315" src="https://www.youtube.com/embed/ZGodcPuO7-Y?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                }
            ]
        }
    },
    HHR: {
        title: 'HeavenHR',
        role: ROLES.FE_DEV,
        linkUrl: LINKS.HHR,
        modalContent: {
            cardArt: hhrPreview,
            jobDescription: 'HeavenHR is an online HR tool to manage employee data, insurance, vacation requests and time tracking for freelancers.',
            jobOverview: {
                team: 'I was hired as the first Senior Front End developer at HeavenHR and worked with about twenty back-end developers. We had a dedicated web designer and product managers often presented wireframes directly to me.',
                tasks:
                    <ul>
                        <li>Refactoring of old MVP code</li>
                        <li>Organising CSS into a more modular format</li>
                        <li>Defining a design system for UI components</li>
                        <li>Implemented new landing page designs</li>
                        <li>Helped reorganise the app's JavaScript code to be more modular</li>
                    </ul>
            },
            tools: ['sass', 'illustrator', 'jquery'],
            sections: [
                {
                    title: 'App Design and Style',
                    altBg: true,
                    body:
                        <p>As the product grew out of its MVP phase, I played a large part in its re-styling.</p>
                },
                {
                    title: 'Feature: Vacation Management',
                    altBg: false,
                    body:
                        <Fragment>
                            <ul>
                                <li>Helped build pages with Ajax requests instead of full page reloads after each change.</li>
                                <li>Implemented inline editing of tables</li>
                                <li>Both participants can prepare an agenda (Talking Points) and afterwards add notes.</li>
                                <li>Designed UI for individual meetings, dashboard and meetings ‘space’ where users can see all of their meetings</li>
                            </ul>
                            <ImageWithCaption src={vacationScreen} caption="Vacation Management - a feature I built and assisted with the design" />
                        </Fragment>
                },
            ]
        }
    },
    MMN: {
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
        },
    },
    NMP: {
        title: 'Nightlife Music',
        role: ROLES.PRINT_ANIMATION,
        linkUrl: LINKS.NMP,
        modalContent: {
            cardArt: nmvPrintPreview,
            jobDescription: 'Print Advertisements and Video Production',
            jobOverview: {
                team: 'Working alongside the Marketing department, I designed the graphics for many advertising campaigns - mostly for industry magazines. ',
                tasks:
                    <ul>
                        <li>Design layouts with content provided from copy writer</li>
                    </ul>
            },
            tools: ['indesign', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Campaigns',
                    altBg: true,
                    body:
                        <p>foo</p>
                },
                {
                    title: 'Animated Infographic',
                    altBg: false,
                    body:
                        <p>foo</p>
                },
            ]
        },
    },
    NM: {
        title: 'Nightlife Music',
        role: ROLES.WEB_DESIGN,
        linkUrl: LINKS.NM,
        modalContent: {
            cardArt: nightlifePreview,
            jobDescription: 'Corporate website for Nightlife Music',
            jobOverview: {
                team: 'Working in the Marketing team, I was joined by a copy writer and our marketing manager.',
                tasks:
                    <ul>
                        <li>Design layouts with content provided from copy writer</li>
                        <li>Prepare images and videos to be web-optimized</li>
                        <li>Implement layouts using X Theme in Wordpress</li>
                    </ul>
            },
            tools: ['wordpress', 'illustrator', 'premiere'],
            sections: [
                {
                    title: 'Website Design and Style',
                    altBg: true,
                    body:
                        <Fragment>
                            <ul>
                                <li>Creating content to add to a Wordpress theme</li>
                                <li>Exporting images and optimizing video</li>
                                <li>Implementing a custom Twitter widget on the home page</li>
                            </ul>
                            <ImageWithCaption src={nmWebsiteBlocks} caption="Layout content for Nightlife Music's website" />
                        </Fragment>
                },
            ]
        }
    },
    SI: {
        title: 'Small Improvements',
        role: ROLES.UI_DEV,
        linkUrl: LINKS.SI,
        modalContent: {
            cardArt: siPreview,
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
                            <div style={{ display: 'flex' }}>
                                <ul>
                                    <li>When I joined, we were in the process of converting the SI app to be mobile-responsive. </li>
                                    <li>We took this opportunity to rethink and refactor a lot of the code to follow a consistent pattern and structure.</li>
                                    <li>This  also meant an opportunity to update the style of many components (well, basically all of them!)</li>
                                </ul>
                                <iframe src="https://player.vimeo.com/video/180569819?color=4777ff&title=0&byline=0&portrait=0" width="470" height="264" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                            <img src={siBeforeAfter} style={{ maxWidth: '100%' }} alt="Small Improvements before and after" />
                        </div>
                },
            ]
        }
    }
}
