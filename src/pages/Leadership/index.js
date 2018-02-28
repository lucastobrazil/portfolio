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
                <p>I believe a team is analogous to an orchestra - each team member represents an instrument, and together we perform beautiful music. </p>
                <p>The beauty and impact of the music often relies on the skills of the conductor - leading and guiding the team to greatness. In recent years, I’ve discovered my natural ability and real passion for stepping into the role of conductor, and supporting my team to create powerful results.</p>
                <p>From coordinating weekly design tasks to conducting one-on-one meetings with team members, I am passionate about servant leadership and facilitating the success and personal growth goals of my colleagues.</p>
            </span>
            <Image src={meTeam} caption="Brainstorming with team members is something I love doing" />
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
            <li>fostering the development of a small team of designers, including supporting individuals with their goal setting, regular review of these goals vs performance, and ongoing career advice and mentor-ship </li>
            <li>managing weekly design tasks and coordinating the team to meet and deliver these weekly targets</li>
            <li>setting clear, SMART project goals, that adopt a pragmatic and client-focused approach</li>
            <li>encouraging and facilitating communication of best practice sharing amongst the team and broader business</li>
            <li>supporting the team to develop and stretch their own skill set through adopting best practices and, where it makes sense, trying different workflows</li>
            <li>performing a key connector role across teams and the business to ensure the right talent is deployed on the right projects </li>
            <li>onboarding all new team members to ensure they are quickly mobilized and deployed in roles that deliver value for our business and feel value additive and rewarding for the individual</li>
        </ul>

        <h2>Recruitment</h2>
        <p>I’ve played an active role in connecting with and hiring outstanding, passionate and talented design professionals. When limited in resources, my approach is often to look for areas of skill that are lacking (but needed) in the team and to seek out specialists in that area. While juggling the day-to-day design responsibilities, my tasks have included:</p>
        <ul>
            <li>writing position descriptions</li>
            <li>proactively searching design communities and networks to reach out to designers</li>
            <li>conducting technical interviews</li>
            <li>designing trial work for successful interviewees to complete</li>
            <li>communicating constructive feedback to unsuccessful applicants</li>
        </ul>
    </Section>;
}
