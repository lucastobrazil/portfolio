import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROLES, LINKS } from '../../pages/constants';

import channelsPreview from './images/channels-preview.jpg';
import hhrPreview from './images/hhr-preview.jpg';
import mmnAdvertising from './images/mmn-screen.jpg';
import mmnHome from './images/mmn-home.png';
import mmnPreview from './images/mmn-preview.png';
import cddjPreview from './images/cddj-preview.png';
import nightlifePreview from './images/nightlife-preview.jpg';

import nmGoodNightOut from './images/nm-goodnightout.jpg';
import nmSummer from './images/nm-summer.jpg';
import nmVenueSound from './images/nm-venue-sound.jpg';
import mnWebsiteHome1 from './images/nm-website-home-1.jpg';
import mnWebsiteHome2 from './images/nm-website-home-2.jpg';
import mnWebsiteWwd from './images/nm-website-wwd.jpg';


import mmnIos from './images/mmn-ios.png';
import mmnIosPlaylist from './images/mmn-ios-playlist.png';
import mmnIosVideo from './images/mmn-ios-video.png';
import mmnIosVol from './images/mmn-ios-vol.png';
import mmnLogo from './images/mmn-logo.jpg';
import mmnOverlay from './images/mmn-playlist-overlay.png';
import mmnWebLogin from './images/mmn-web-login.jpg';
import mmnWebDa from './images/mmn-web-da.jpg';

import cdjHey from './images/cdj-hey.png';
import cdjMap from './images/cdj-map.png';
import cdjPlaylist from './images/cdj-playlist.png';

import crowdDjLogo from './images/crowdDJ-logo.jpg';

import activityStream from './images/si-activity-stream.png';
import meetingsImage from './images/si-meetingnote.png';
import meetingsDashboard from './images/si-meetings-dashboard.png';
import meetingsGif from './images/si-checkable-item.gif';

import siPreview from './images/si-preview.png';
import styleGuide from './images/si-styleguide.png';
import styleGuideComment from './images/si-comment.png';
import styleGuideLCI from './images/si-loading-content-indicator.png';
import siBeforeAfter from './images/siBeforeAfter.png';
import siAs from './images/si-as.png';
import siAsWhole from './images/si-as-whole.png';

import adlChannels from './images/adl-channels.jpg';
import adlOliveCaves from './images/adl-olive-caves.jpg';
import adlNsp from './images/adl-nsp.jpg';
import adlBts from './images/adl-bts.jpg';

import { Gallery, GalleryItem } from '../../components/Gallery';

export const workItemMiniData = [
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
];

export default {
    ADL: {
        title: 'Arundel',
        role: ROLES.PRINT_ANIMATION,
        year: '2014',
        linkUrl: LINKS.ADL,
        style: {
            backgroundImage: `url(${channelsPreview})`,
        },
        modalContent: {
            jobDescription: 'I love art projects - and luckily my musical project \'Arundel\' provides me with many opportunities to do them! Over the years I’ve used this project as an outlet for many creative works.',
            jobOverview: {
                team: 'Flying solo, sometimes with collaborators',
                tasks:
                    <ul>
                        <li>Music composition, arrangement, recording and production</li>
                        <li>Art direction for music videos</li>
                        <li>Concept art creation and preplanning for CD artwork</li>
                        <li>Sculpture, painting and photography</li>
                        <li>Costume and set design</li>
                        <li>Tour posters</li>
                    </ul>
            },
            tools: ['ableton', 'after-effects', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Album Artwork',
                    altBg: true,
                    body:
                        <ul>
                            <li>Created album artwork using sculpture, paper, photography and lighting</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={adlChannels} alt="Artwork for the Channels EP" />
                            <GalleryItem src={adlOliveCaves} alt="Artwork for the Olive Caves EP" />
                            <GalleryItem src={adlNsp} alt="Artwork for the Naturestrip EP" />
                        </Gallery>
                },
                {
                    title: 'Video',
                    altBg: false,
                    body:
                        <ul>
                            <li>Set design and storyboarding for “Chimpanzee” music video</li>
                            <li>Art direction for experimental visuals using cameras, bubbles, oils and water</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem type="video"><iframe title="Chimpanzee Music Video" width="560" height="315" src="https://www.youtube.com/embed/ZGodcPuO7-Y?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></GalleryItem>
                            <GalleryItem src={adlBts} alt="Behind the scenes" />
                            <GalleryItem type="video"><iframe title="Experimental art" src="https://player.vimeo.com/video/40588009?color=4777ff&title=0&byline=0&portrait=0" width="470" height="264" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></GalleryItem>
                        </Gallery>
                },
            ]
        }
    },
    HHR: {
        title: 'HeavenHR',
        role: ROLES.FE_DEV,
        year: '2016',
        linkUrl: LINKS.HHR,
        style: {
            backgroundSize: '250px',
            backgroundColor: '#6698CC',
            backgroundPositionY: 'bottom',
            backgroundImage: `url(${hhrPreview})`,
        },
        modalContent: {
            jobDescription: 'HeavenHR is an online HR tool to manage employee data, insurance, vacation requests and time tracking for freelancers. When I joined, the software had just come out of the MVP phase where many freelancers had been working on the front end (it was a bit messy...).',
            jobOverview: {
                team: 'I was hired as the first senior front end developer at HeavenHR and worked with about fifteen back end developers. We had a dedicated web designer and product managers who prepared wireframes.',
                tasks:
                    <ul>
                        <li>Refactoring old MVP code</li>
                        <li>Organising CSS (SASS) into a more modular format</li>
                        <li>Defining a design system for UI components</li>
                        <li>Implemented new landing page designs</li>
                        <li>Helped organise the app&#39;s JavaScript code to be more modular</li>
                    </ul>
            },
            tools: ['sass', 'illustrator', 'jquery', 'bootstrap', 'photoshop'],
            sections: [
                {
                    title: 'Vacation Management',
                    altBg: true,
                    body:
                        <ul>
                            <li>Helped build pages with Ajax requests instead of full page reloads after each change.</li>
                            <li>Implemented inline editing of tables</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={hhrPreview} caption="Vacation Management - a feature I built and assisted with the design" />
                        </Gallery>
                },
            ]
        }
    },
    CDDJ: {
        title: 'CrowdDj',
        role: ROLES.UI_DEV,
        year: '2015',
        linkUrl: LINKS.CDDJ,
        style: {
            backgroundColor: '#36CF75',
            backgroundImage: `url(${cddjPreview})`,
        },
        modalContent: {
            jobDescription: 'CrowdDJ is a mobile jukebox app that lets users inside a bar, pub or club directly interact with the music system. They can find out the current song playing, see what\'s up next, and queue up their favourite songs. ',
            jobOverview: {
                team: 'I worked as a UI designer and developer alongside one native iOS / Android developer.',
                tasks:
                    <ul>
                        <li>UI & UX design and development</li>
                        <li>App icon design</li>
                        <li>Organisation and preparation of shared assets across platforms</li>
                    </ul>
            },
            tools: ['less', 'xcode', 'illustrator', 'photoshop', 'android-studio'],
            sections: [
                {
                    title: 'UI design and development',
                    altBg: true,
                    body:
                        <ul>
                            <li>Users can check-in to a venue and instantly interact with its music playlist</li>
                            <li>Participating venues’ logos are added as branding in the app</li>
                            <li>Users can connect CrowdDJ to Spotify and add songs they like to their own playlists</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={cdjHey} />
                            <GalleryItem src={cdjMap} />
                            <GalleryItem src={cdjPlaylist} />
                            <GalleryItem src={crowdDjLogo} />
                        </Gallery>
                }
            ]
        }
    },
    MMN: {
        title: 'ManageMyNightlife',
        role: ROLES.UI_DEV,
        year: '2015',
        linkUrl: LINKS.MMN,
        style: {
            backgroundColor: '#36CF75',
            backgroundImage: `url(${mmnPreview})`,
        },
        modalContent: {
            // jobArt: mmnIos,
            jobDescription: <Fragment><p>ManageMyNightlife (MMN) is an iOS, Android and Web app for venue managers of venues that use the <a href="http://www.nightlife.com.au" target="_blank" rel="noopener noreferrer">Nightlife Music</a> video playback system. The system outputs music videos and advertising onto the TV screens around the venue.</p><p>In the past, managers interacted with the system directly via a very old interface. MMN was created as a new front end  that communicated with the system via a new REST API. </p></Fragment>,
            jobOverview: {
                team: 'I worked as designer and front end developer alongside a team of 5 other full-stack developers.',
                tasks:
                    <ul>
                        <li>UI &amp; UX design and development - iOS, Android and Web</li>
                        <li>Design and development of an advertising management module and dynamic advertisement creation widget</li>
                    </ul>
            },
            tools: ['less', 'illustrator', 'photoshop', 'knockout'],
            sections: [
                {
                    title: 'App Design and Style',
                    altBg: true,
                    body:
                        <p>Working with with three back-end developers, I created the UI across all platforms, as well as getting ‘hands on’ in the code. After release, I made improvements to the UX ongoing as we discovered how users were interacting with the app via user feedback.</p>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={mmnIos} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnIosPlaylist} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnIosVideo} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnIosVol} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnHome} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnOverlay} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnWebLogin} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mmnLogo} caption="ManageMyNightlife - song view screen" />
                        </Gallery>
                }, {
                    title: 'Advertising Platform',
                    altBg: false,
                    body:
                        <ul>
                            <li>Users can manage advertising content that is displayed on TV screens in a venue.</li>
                            <li>I designed and developed an interface to let users create their own &#39;Text-over-image&#39; advertisements in the browser</li>
                        </ul>,
                    gallery:
                        <Fragment>
                            <GalleryItem src={mmnAdvertising} caption="Advertising file management for ManageMyNightlife" />
                            <GalleryItem src={mmnWebDa} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem type="video"><iframe title="Advertising TOI Screen" src="https://player.vimeo.com/video/257383148?color=4777ff&title=0&byline=0&portrait=0" width="470" height="378" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></GalleryItem>
                        </Fragment>
                },
            ]
        },
    },
    NM: {
        title: 'Nightlife Music',
        role: ROLES.WEB_DESIGN,
        year: '2009 - 2015',
        linkUrl: LINKS.NM,
        style: {
            backgroundColor: '#36CF75',
            backgroundImage: `url(${nightlifePreview})`,
        },
        modalContent: {
            jobDescription: 'I designed the Corporate website for Nightlife Music and many magazine advertising campaigns for Australian national publications.',
            jobOverview: {
                team: 'Working in the Marketing team, I was joined by a copywriter and our marketing manager.',
                tasks:
                    <ul>
                        <li>Design print layouts with content provided from copywriter</li>
                        <li>Prepare images and videos to be web-optimized for website</li>
                        <li>Help produce animated infographic videos</li>
                        <li>Implement layouts using X Theme in Wordpress</li>
                    </ul>
            },
            tools: ['indesign', 'premiere', 'photoshop'],
            sections: [
                {
                    title: 'Website design and development',
                    altBg: true,
                    body:
                        <ul>
                            <li>Creating content to add to a Wordpress theme</li>
                            <li>Exporting images and optimizing video</li>
                            <li>Developing a custom Twitter widget on the home page</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={mnWebsiteHome1} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mnWebsiteHome2} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={mnWebsiteWwd} caption="ManageMyNightlife - song view screen" />
                        </Gallery>
                },
                {
                    title: 'Print Design',
                    altBg: false,
                    body:
                        <ul>
                            <li>Creative direction and concept design</li>
                            <li>Designing layouts and assets</li>
                            <li>Preparing designs for offset printing</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={nmGoodNightOut} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={nmSummer} caption="ManageMyNightlife - song view screen" />
                            <GalleryItem src={nmVenueSound} caption="ManageMyNightlife - song view screen" />
                        </Gallery>
                },
            ]
        },
    },
    SI: {
        title: 'Small Improvements',
        role: ROLES.UI_DEV,
        year: '2017',
        linkUrl: LINKS.SI,
        style: {
            backgroundSize: '270px',
            backgroundColor: '#FFDB4D',
            backgroundImage: `url(${siPreview})`,
        },
        modalContent: {
            jobDescription: 'Small Improvements is a web-based feedback tool where companies and their staff can conduct 360º feedback rounds, set objectives, conduct 1:1 meetings, give praise / kudos and write formal performance reviews.',
            jobOverview: {
                team:
                    <p>
                        We worked in cross-functional teams consisting of one designer and two full-stack developers.
                        Across teams, all designers met as a ‘meta team’ - my role also included coordination of design tasks
                        and having one-on-one meetings with team members (you can <Link to="/leadership">read more about my
                        experience in leadership</Link> here).
                    </p>,
                tasks:
                    <ul>
                        <li>Steer the overall design of the product</li>
                        <li>Gather requirements from Product Managers</li>
                        <li>Develop components in React, Angular and older JS technologies</li>
                        <li>Create wireframes and mocks using Sketch and InVision</li>
                        <li>Design and maintain a design system</li>
                        <li>Explore and define problems, iterate based on feedback</li>
                        <li>Create visual specifications to deliver to developers</li>
                        <li>Manage higher-level aspects of design such as style guide, component structure and information architecture</li>
                    </ul>
            },
            tools: ['sketch', 'invision', 'less', 'react', 'angular', 'webpack', 'slack', 'confluence'],
            sections: [
                {
                    title: '1:1  Meetings',
                    altBg: true,
                    body:
                        <ul>
                            <li>The latest feature at Small Improvements, designed as a place to keep track of your 1:1 meetings</li>
                            <li>Both participants can prepare an agenda (Talking Points) and add notes afterwards</li>
                            <li>Designed UI for individual meetings, dashboard and meetings ‘space’ where users can see all of their meetings</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={meetingsDashboard} alt="1:1 Meeting dashboard in Small Improvements." />
                            <GalleryItem src={meetingsImage} alt="A 1:1 Meeting in Small Improvements." />
                            <GalleryItem src={meetingsGif} alt="Checkable talking points." />
                        </Gallery>
                },
                {
                    title: 'Activity Stream',
                    altBg: false,
                    body:
                        <ul>
                            <li>In an effort to increase transparency and engagement within the tool, we created an Activity Stream to present recent happenings.</li>
                            <li>I designed the UI of many content items</li>
                            <li>Created detailed specifications of how content would be aggregated and the different edge cases that can occur</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={siAsWhole} caption="A preview of some of the 'Content Items' shown in the activity stream." />
                            <GalleryItem src={activityStream} caption="A preview of some of the 'Content Items' shown in the activity stream." />
                            <GalleryItem src={siAs} caption="A preview of some of the 'Content Items' shown in the activity stream." />
                        </Gallery>
                },
                {
                    title: 'Living Style Guide',
                    altBg: true,
                    body:
                        <ul>
                            <li>Organised our components into a design system. The living style guide was built to document the components and UI patterns used within the tool and also to develop a vision for the future.</li>
                            <li>Acted as an advocate for using it and encouraged devs to proactively document new components</li>
                            <li>It also turned out to be quite a pleasant place to develop new components in isolation.</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem src={styleGuide} caption="The Small Improvements style guide documenting our design patterns." />
                            <GalleryItem src={styleGuideComment} caption="A comment component in the SI style guide." />
                            <GalleryItem src={styleGuideLCI} caption="A loading content indicator in the SI style guide" />
                        </Gallery>
                },
                {
                    title: 'Responsive overhaul and style updates',
                    body:
                        <ul>
                            <li>When I joined, we were in the process of converting the SI app to be mobile-responsive.</li>
                            <li>We took this opportunity to rethink and refactor a lot of the code to follow a consistent pattern and structure.</li>
                            <li>This also meant an opportunity to update the style of many components (well, basically all of them!)</li>
                        </ul>,
                    gallery:
                        <Gallery>
                            <GalleryItem type="video"><iframe title="Video of me at Small Improvements" src="https://player.vimeo.com/video/180569819?color=4777ff&title=0&byline=0&portrait=0" width="470" height="264" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"></iframe></GalleryItem>
                            <GalleryItem style={{ width: '100%' }} src={siBeforeAfter} alt="Small Improvements before and after" />
                        </Gallery>
                },
            ]
        }
    }
}
