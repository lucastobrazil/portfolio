import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './style.less';
import { LINKS } from '../constants';

const Link = props => <NavLink {...props} activeClassName={styles.active} />
export default function Nav({ className, children }) {
    return (
        <nav className={styles.nav}>
            <div className={styles.inner}>
                <NavLink to="/" className={styles.brand}>Lucas Arundell</NavLink>
                <ul>
                    <li><Link to={`/${LINKS.WORK}`}>Work</Link></li>
                    <li><Link to={`/${LINKS.LEADERSHIP}`}>Leadership</Link></li>
                    <li><Link to={`/${LINKS.ABOUT}`}>About</Link></li>
                </ul>
            </div>
        </nav>
    );
}
