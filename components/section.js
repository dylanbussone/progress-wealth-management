import React from 'react';
import styles from '../styles/section.module.css';

const Section = ({ theme, children, ...args }) => {
    const props = {
        ...args,
        className: `${styles.section} ${theme ? styles[`theme_${theme}`] : ''} ${
            args.className ? args.className : ''
        }`,
    };
    return (
        <section {...props}>
            <div className={styles.section_content}>{children}</div>
        </section>
    );
};

export default Section;
