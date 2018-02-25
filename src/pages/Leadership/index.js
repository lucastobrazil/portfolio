import React from 'react';
import Section from '../../components/Section';
import Image from '../../components/Image';
import meTeam from './images/me_team.jpg';
import styles from './style.less';

export default function Leadership() {
    return <Section>
        <h1>Leadership</h1>
        <div className={styles.textImage}>
            <span>
                <p>I like to think of a team as an orchestra - where each team member represents an individual player and together, we can perform powerful and awesome music. In recent years, I’ve discovered my love of playing the role of the conductor. </p>
                <p>From coordinating weekly design tasks to conducting one-on-one meetings with team members, I am passionate about servant leadership and facilitating the success of the personal growth goals of my colleagues.</p>
            </span>
            <Image src={meTeam} caption="Brainstorming with team members is something I love doing" />
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
            <li>Developing a small team of designers - offering advice and mentorship</li>
            <li>Managing and coordinating weekly design tasks</li>
            <li>Setting clear goals for projects and making suggestions for pragmatic approaches</li>
            <li>Guiding the team to develop and communicate best practices and workflows</li>
            <li>Connecting the right designers to the right projects</li>
            <li>Onboarding new team members to get them up and running</li>
        </ul>

        <h2>Recruitment</h2>
        <p>I’ve played an active role in connecting with and hiring outstanding, passionate and talented design professionals. When limited in resources, my approach is often to look for areas of skill that are lacking (but needed) in the team and to seek out specialists in that area. While juggling the day-to-day design responsibilities, my tasks have included:</p>
        <ul>
            <li>Writing position descriptions</li>
            <li>Proactively searching design communities and networks to reach out to designers</li>
            <li>Conducting technical interviews</li>
            <li>Designing trial work for successful interviewees to complete</li>
            <li>Communicating constructive feedback to unsuccessful applicants</li>
        </ul>
    </Section>;
}
