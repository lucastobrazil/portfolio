import React from 'react';
import Inner from '../../components/Section/Inner';
import styles from './style.less';
import linkedInIcon from './images/linkedin-icon.svg';
import dribbbleIcon from './images/dribbble-icon.svg';
export default function Footer({ className, children }) {
    return <footer>
        <Inner className={styles.inner}>
            &copy; 2018 Lucas Arundell
            <span>
                <a href="https://www.linkedin.com/in/lucasarundell" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="Visit me on LinkedIn" /></a>
                <a href="https://dribbble.com/lucasarundell" target="_blank" rel="noopener noreferrer"><img src={dribbbleIcon} alt="Visit me on Dribbble" /></a>
            </span>
        </Inner>
    </footer>;
}
