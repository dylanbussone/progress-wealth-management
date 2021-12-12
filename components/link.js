import React, { useState } from 'react';
import styles from '../styles/link.module.css';

const Link = ({ href, children }) => (
    <a target="_blank" rel="noreferrer" href={href}>
        {children}
    </a>
);

export default Link;

const DropdownLink = ({ dropdownContent, children }) => {
    const [contentShown, setContentShown] = useState(false);
    const cb = e => {
        e.preventDefault();
        setContentShown(!contentShown);
    };

    return (
        <React.Fragment>
            <a href="#" onClick={cb}>
                {children}
            </a>
            <div
                className={`${styles.dropdown_content} ${
                    contentShown ? styles.content_shown : ''
                }`}>
                {dropdownContent}
            </div>
        </React.Fragment>
    );
};

export { DropdownLink };
