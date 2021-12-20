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
        <React.Fragment>
            <a
                href="#"
                onClick={parentLinkClick}
                onMouseOver={showDropdown}
                onMouseOut={closeDropdown}>
                {children}
                <div className={`${styles.dropdown} ${contentShown ? styles.content_shown : ''}`}>
                    <div className={styles.dropdown_content} onClick={closeDropdown}>
                        {dropdownContent}
                    </div>
                </div>
            </a>
        </React.Fragment>
    );
};

export { Link, DropdownLink };
