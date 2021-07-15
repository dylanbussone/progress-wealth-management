import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <ul>
                <li>&copy; 2021 Progress Wealth Management</li>
            </ul>
        </div>
    </footer>
);

export default Footer;
