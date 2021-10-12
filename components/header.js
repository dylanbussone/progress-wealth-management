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
    }
];

const Header = () => {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    return (
        <header className={`${styles.header} ${mobileMenuActive && styles.mobile_menu_active}`}>
            <div className={styles.header_content}>
                <Link href="/" passHref>
                    <button className={styles.logo_button} />
                </Link>
                <button className={styles.mobile_toggle} onClick={toggleMobileMenu}>
                    <Icon name={mobileMenuActive ? 'close' : 'menu'} size={32} color="icon_white" />
                </button>
                <ul className={styles.link_list}>
                    {HEADER_LINKS.map(link => (
                        <li key={link.text}>
                            <Link href={link.href || ''} passHref>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
