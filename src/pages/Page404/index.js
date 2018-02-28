import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
// import styles from './style.less';

export default function Page404() {
    return <Section>
        <div>
            <h1>404</h1>
            <p>Oops... maybe go <Link to="/"> home</Link>?</p>
        </div>

    </Section>;
}
