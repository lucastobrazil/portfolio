import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import anchormanPreview from './images/anchorman-preview.jpg';
import anchormanScreen from './images/anchorman-cms.jpg';
import { ROLES, LINKS } from '../../constants';

export default {
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
};
