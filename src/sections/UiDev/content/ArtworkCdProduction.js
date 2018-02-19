import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import channelsPreview from './images/channels-preview.jpg';
import { ROLES, LINKS } from '../../constants';
export default {
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
};


