import React, { Fragment } from 'react';
import ImageWithCaption from '../../../components/ImageWithCaption';
import hhrPreview from './images/hhr-preview.jpg';
import vacationScreen from './images/heavenhr-vacation.png';
import { ROLES, LINKS } from '../../constants';

export default {
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
};


