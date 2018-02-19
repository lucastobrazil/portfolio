import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import nmvPrintPreview from './images/nmv-print-preview.jpg';
import testImage from './images/si-activity-stream.png';
import { ROLES } from '../../constants';
export default {
    title: 'Nightlife Music',
    role: ROLES.PRINT_ANIMATION,
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
    }
};


