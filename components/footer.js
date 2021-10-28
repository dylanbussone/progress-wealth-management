import React from 'react';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.quote}>
                <h5>
                    Planning is bringing the future into the present so that you can do something
                    about it now.
                </h5>
                <span>-- Alan Lakein</span>
            </div>
            <ul>
                <li>
                    <Link href="/legal">Legal</Link>
                </li>
                <li>&copy; 2021 Progress Wealth Management</li>
            </ul>
        </div>
    </footer>
);

export default Footer;
