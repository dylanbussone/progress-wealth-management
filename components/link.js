import React from 'react';

const Link = ({ href, children }) => (
    <a target="_blank" rel="noreferrer" href={href}>
        {children}
    </a>
);

export default Link;
