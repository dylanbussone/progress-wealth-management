import React, { useState } from 'react';
import styles from '../styles/link.module.css';

const Link = ({ href, children }) => (
    <a target="_blank" rel="noreferrer" href={href}>
        {children}
    </a>
);

const DropdownLink = ({ dropdownContent, children }) => {
    const [contentShown, setContentShown] = useState(false);
    const parentLinkClick = e => {
        e.preventDefault();
        setContentShown(!contentShown);
    };
    const showDropdown = () => {
        setContentShown(true);
    };
    const closeDropdown = () => {
        setContentShown(false);
    };

    return (
        <div onMouseOver={showDropdown} onMouseOut={closeDropdown}>
            <a href="#" onClick={parentLinkClick}>
                {children}
            </a>
            <div
                className={`${styles.dropdown} ${contentShown ? styles.content_shown : ''}`}
                onClick={closeDropdown}>
                {dropdownContent}
            </div>
        </div>
    );
};

export { Link, DropdownLink };
