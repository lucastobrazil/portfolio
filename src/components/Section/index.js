import Inner from './Inner';
import React from 'react';

export default function Section({ className, children }) {
    return <section className={className}><Inner>{children}</Inner></section>;
}