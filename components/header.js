/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { SECTIONS } from '../constants';
import styles from '../styles/header.module.css';

const scrollToId = id => {
    if (window.scrollTo) {
        const offsetTop = document.getElementById(id)?.offsetTop || 0;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    }
};

const logoButtonStyles = {
    height: 70,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0F1D2B',
};

const Header = ({ activeSection }) => (
    <header className={styles.header}>
        <div>
            <button onClick={() => scrollToId(null)} style={logoButtonStyles}>
                <img src="/logo-simple.png" alt="Progress Wealth Management" height="50" />
            </button>
            <ul>
                {Object.keys(SECTIONS).map(section => (
                    <li key={SECTIONS[section].text}>
                        <button
                            onClick={() => scrollToId(SECTIONS[section].id)}
                            className={
                                activeSection?.text === SECTIONS[section].text
                                    ? styles.active_header_link
                                    : styles.header_link
                            }>
                            {SECTIONS[section].text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </header>
);

export default Header;
