import React from 'react';
import styles from '../styles/section.module.css';

const Section = ({ children, ...args }) => {
    const props = {
        ...args,
        className: `${styles.section} ${args.className}`,
    };
    return <section {...props}>{children}</section>;
};

export default Section;
