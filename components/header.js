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

const links = [
    {
        text: SECTIONS.SCHEDULE.text,
        onClick: () => scrollToId(SECTIONS.SCHEDULE.id),
    },
    {
        text: SECTIONS.SERVICES.text,
        onClick: () => scrollToId(SECTIONS.SERVICES.id),
    },
    {
        text: SECTIONS.WHO_WE_ARE.text,
        onClick: () => scrollToId(SECTIONS.WHO_WE_ARE.id),
    },
    {
        text: SECTIONS.MAILING_LIST.text,
        onClick: () => scrollToId(SECTIONS.MAILING_LIST.id),
    },
    {
        text: SECTIONS.CONTACT_US.text,
        onClick: () => scrollToId(SECTIONS.CONTACT_US.id),
    },
];

const Header = ({ activeSection }) => (
    <header className={styles.header}>
        <div>
            <button onClick={() => scrollToId(null)} style={logoButtonStyles}>
                {/* TODOOO */}
                {/* <StaticImage
                    src="../images/logo-simple.png"
                    alt="Progress Wealth Management"
                    placeholder="blurred"
                    loading="eager"
                    layout="fixed"
                    height={50}
                /> */}
            </button>
            <ul>
                {links.map(link => (
                    <li key={link.text}>
                        <button
                            onClick={link.onClick}
                            className={
                                activeSection?.text === link.text
                                    ? styles.active_header_link
                                    : styles.header_link
                            }>
                            {link.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </header>
);

export default Header;
