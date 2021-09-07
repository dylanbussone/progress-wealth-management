/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { HOME_SECTIONS } from '../constants';
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

const Header = ({ page, activeSection }) => {
    const headerRef = useRef();
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };
    const handleLinkClick = id => {
        setMobileMenuActive(false);
        if (mobileMenuActive) {
            scrollToId(id, -1 * headerRef.current.offsetHeight);
        } else {
            scrollToId(id);
        }
    };
    const isHomePage = page === 'index';

    return (
        <header
            className={`${styles.header} ${mobileMenuActive && styles.mobile_menu_active}`}
            ref={headerRef}>
            <div>
                {isHomePage ? (
                    <button onClick={() => handleLinkClick(null)} className={styles.logo_button}>
                        <img src="/logo-simple.png" alt="Progress Wealth Management" height="50" />
                    </button>
                ) : (
                    <Link href="/" passHref>
                        <button className={styles.logo_button}>
                            <img
                                src="/logo-simple.png"
                                alt="Progress Wealth Management"
                                height="50"
                            />
                        </button>
                    </Link>
                )}
                <button className={styles.mobile_toggle} onClick={toggleMobileMenu}>
                    <Icon name={mobileMenuActive ? 'close' : 'menu'} size={32} color="icon_white" />
                </button>
                <ul className={styles.link_list}>
                    {isHomePage ? (
                        Object.keys(HOME_SECTIONS).map(section => (
                            <li key={HOME_SECTIONS[section].text}>
                                <button
                                    onClick={() => handleLinkClick(HOME_SECTIONS[section].id)}
                                    className={
                                        activeSection?.text === HOME_SECTIONS[section].text
                                            ? styles.active_header_link
                                            : styles.header_link
                                    }>
                                    {HOME_SECTIONS[section].text}
                                </button>
                            </li>
                        ))
                    ) : (
                        <React.Fragment>
                            <li>
                                <Link href="/" passHref>
                                    <button className={styles.header_link}>
                                        Progress Wealth Management
                                    </button>
                                </Link>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
