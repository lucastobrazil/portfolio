import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import nightlifePreview from './images/nightlife-preview.jpg';
import nmWebsiteBlocks from './images/nm-website-blocks.jpg';
import { ROLES, LINKS } from '../../constants';
export default {
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
};


