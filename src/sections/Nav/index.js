import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './style.less';
import { LINKS } from '../constants';

export default function Nav({ className, children }) {
    return <nav className={styles.nav}>
        <div className={styles.inner}>
            <NavLink to="/">Lucas Arundell</NavLink>

            <ul>
                <li><NavLink to={`/${LINKS.DESIGN}`}>Design & Dev</NavLink></li>
                <li><NavLink to={`/${LINKS.LEADERSHIP}`}>Leadership</NavLink></li>
                <li><NavLink to={`/${LINKS.ABOUT}`}>About</NavLink></li>
            </ul >
        </div >
    </nav >;
}
