import React from 'react';
import heroImage from './images/anchorman-cms.jpg';
export default {
    title: 'Anchorman CMS',
    overview: 'Managing content!',
    modalContent: {
        heroImage,
        tools: ['jQuery', 'LESS', 'Grunt', 'HTML'],
        body: <span><p>Anchorman CMS - I designed a complete system to manage the content of a Live News feed. The client needed a quick way to create, manage and deploy content on the go.</p>
        <p>To keep the project lightweight, I chose to ‘roll my own’ - and built the front and back end of this system using PHP, Apache, MySQL database, jQuery (for some UI interaction) and LESS CSS.</p>
        <p>The system also ‘builds’ the news feed in order to generate an ‘offline’ version for the client’s hardware systems.</p></span>
    }
};
