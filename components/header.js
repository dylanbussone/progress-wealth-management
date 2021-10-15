import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '../components/icon';
import styles from '../styles/header.module.css';

const HEADER_LINKS = [
    {
        text: 'Progress Wealth Management',
        href: '/',
    },
    {
        text: 'Services',
        href: '/services',
    },
    {
        text: 'About Us',
        href: '/about',
    },
    {
        text: 'Schedule Now',
        href: '/schedule',
    },
];

const Header = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    return (
        <React.Fragment>
            {/* Desktop header */}
            <header className={styles.header}>
                <div className={styles.header_content}>
                    <Link href="/" passHref>
                        <button className={styles.logo_button} />
                    </Link>
                    <ul className={styles.link_list}>
                        {HEADER_LINKS.map(link => (
                            <li key={link.text}>
                                <Link href={link.href}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            {/* Mobile header */}
            <header className={styles.mobile_header}>
                <div className={styles.mobile_header_content}>
                    <Link href="/" passHref>
                        <button className={styles.mobile_logo_button} />
                    </Link>
                    <button className={styles.mobile_toggle} onClick={toggleMobileMenu}>
                        <Icon
                            name={mobileMenuActive ? 'close' : 'menu'}
                            size={mobileMenuActive ? 16 : 22}
                            color="icon_white"
                        />
                    </button>
                </div>
                {mobileMenuActive && (
                    <ul className={styles.mobile_link_list}>
                        {HEADER_LINKS.map(link => (
                            <li key={link.text} onClick={() => setMobileMenuActive(false)}>
                                <Link href={link.href}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </header>
        </React.Fragment>
    );
};

export default Header;
