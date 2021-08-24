/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { SECTIONS } from '../constants';
import Icon from '../components/icon';
import styles from '../styles/header.module.css';

const scrollToId = (id, additionalOffset = 0) => {
    if (window.scrollTo) {
        const offsetTop = document.getElementById(id)?.offsetTop || 0;
        window.scrollTo({
            top: offsetTop + additionalOffset,
            behavior: 'smooth',
        });
    }
};

const Header = ({ activeSection }) => {
    const headerRef = useRef();
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };
    const handleLinkClick = (id) => {
        setMobileMenuActive(false);
        console.log(headerRef.current, headerRef.current.offsetHeight);
        if (mobileMenuActive) {
            scrollToId(id, -1 * headerRef.current.offsetHeight);
        } else {
            scrollToId(id);
        }
    }
    return (
        <header className={`${styles.header} ${mobileMenuActive && styles.mobile_menu_active}`} ref={headerRef}>
            <div>
                <button onClick={() => handleLinkClick(null)} className={styles.logo_button}>
                    <img src="/logo-simple.png" alt="Progress Wealth Management" height="50" />
                </button>
                <button className={styles.mobile_toggle} onClick={toggleMobileMenu}>
                    {mobileMenuActive ? <Icon name="close" size={32} color="icon_white" /> : <Icon name="menu" size={32} color="icon_white" /> }
                </button>
                <ul className={styles.link_list}>
                    {Object.keys(SECTIONS).map(section => (
                        <li key={SECTIONS[section].text}>
                            <button
                                onClick={() => handleLinkClick(SECTIONS[section].id)}
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
};

export default Header;
