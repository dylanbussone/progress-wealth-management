import React from 'react';
import styles from '../styles/banner.module.css';
import LogoImg from '../public/logo-simple-whitebg.svg';
import LogoText from '../public/logo-text-whitebg.svg';

const Banner = () => (
    <>
        <div className={styles.banner}>
            <LogoImg className={styles.logo_img} />
            <LogoText className={styles.logo_text} />
        </div>
        <div className={styles.separator} />
    </>
);

export default Banner;
