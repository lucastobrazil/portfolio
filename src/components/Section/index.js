import Inner from './Inner';
import React from 'react';

export default function Section({ className, children, name }) {
    return <section className={className}><Inner><a name={name} />{children}</Inner></section>;
}
