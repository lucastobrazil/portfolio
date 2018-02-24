import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Section/Image';
import meTeam from './images/me_team.jpg';

export default function Leadership() {
    return <Section name="leadership">
        <h1>Leadership and Coordination</h1>
        <p>I like to think of a team as an orchestra. Each team member represents an individual player and together, we perform some awesome music.</p>
        <p>In recent years, I’ve discovered my love of being the conductor.</p>

        <Image src={meTeam} caption="Brainstorming with team members is something I love doing" />
        <h2>Key Responsibilities</h2>
        <ul>
            <li>Developing a small team of designers.</li>
            <li>Managing and coordinating tasks</li>
            <li>Setting clear goals for projects</li>
            <li>Guiding the team to develop best practices and workflows</li>
            <li>Connecting designers to projects based on project loads</li>
            <li>Onboarding new team members to get them up and running</li>
            <li>Writing job descriptions for recruiting and conducting interviews</li>
            <li>Working with Product Team to align with strategic goals</li>
        </ul>
    </Section>;
}
