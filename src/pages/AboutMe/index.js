import React from 'react';
import Section from '../../components/Section';
import ProfileBubble from '../../components/ProfileBubble';
import { SECTIONS } from '../constants';
import styles from './style.less';

export default function AboutMe() {
    return (
        <Section altBg={true} className={styles.container}>
            <div>
                <h1>{SECTIONS.ABOUT}</h1>
                <ProfileBubble />
                <p>
                    I'm an experienced product designer, developer and leader. I am passionate about design, people,
                    innovative technology and building powerful and impactful solutions. I have a unique ability to
                    speak the language of clients and senior executives whilst also communicating directly with design
                    and development teams to deliver work that solves real-world problems.
                </p>
                <p>
                    With over ten years of professional experience working internationally in marketing, design and
                    software development teams, I have come to love both the <strong>building</strong> of{' '}
                    <em>"all the things"</em> and <strong>leading</strong> and coordinating projects. Results, clear
                    communication, accountability and passion are qualities I live by.
                </p>

                <p>
                    After graduating from Queensland University of Technology (Australia) with Bachelor of Creative
                    Industries <em>(Media & Communication)</em> and a Bachelor of Business{' '}
                    <em>(Advertising & Marketing)</em>, my work has been focused in the Human Resources and
                    Entertainment technology industries. I've contributed to the success of{' '}
                    <a
                        href="https://www.huffingtonpost.com.au/2016/12/18/this-app-lets-you-choose-the-music-you-hear-in-bars-and-gyms_a_21630551/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        well-recognised
                    </a>{' '}
                    and <strong>customer-revered</strong> national brands and products and in that time my natural
                    leadership and interpersonal skills have often placed me in leadership positions.
                </p>
                <p>
                    Beyond my tertiary qualifications and experience, my personality and <strong>compassion</strong> for
                    others means I can mobilise and motivate teams effectively and thrive in{' '}
                    <strong>deadline-driven environments</strong>. I enjoy taking the lead and being the organiser, but
                    also love to get my hands dirty at a grassroots level.
                </p>

                <h3>On a personal note...</h3>
                <p>
                    I'm from Australia and now living in Berlin with my wife Claire and son Charlie. We love travel,
                    people, music, art, projects and nature. Being Aussie, we enjoy the sunshine - but also the cold,
                    grey weather of Berlin too!{' '}
                    <span role="img" aria-label="Sun emoji">
                        🌞
                    </span>
                </p>
                <p>
                    <strong>
                        Keen to chat? Let's connect on{' '}
                        <a href="https://www.linkedin.com/in/lucasarundell" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>.
                    </strong>
                </p>
            </div>
        </Section>
    );
}
