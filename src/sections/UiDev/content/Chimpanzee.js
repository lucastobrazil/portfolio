import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import chimpanzeePreview from './images/chimpanee-preview.jpg';
import { ROLES } from '../../constants';
export default {
    title: 'Chimpanzee',
    role: ROLES.VIDEO_PRODUCTION,
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZGodcPuO7-Y?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            }
        ]
    }
};


