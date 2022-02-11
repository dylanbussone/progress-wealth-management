import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Link } from './link';
import styles from '../styles/carousel.module.css';

const CAROUSEL_ITEMS = [
    {
        desc: 'NerdWallet',
        link: 'https://www.nerdwallet.com/article/finance/credit-score/nerdwallet-millennial-money-build-credit-now',
        img: '/carousel/nerdwallet.jpg',
    },
    {
        desc: 'Sioux City Journal',
        link: 'https://siouxcityjournal.com/business/article_36911812-4327-5c9a-b318-a68ad25d84e0.html',
        img: '/carousel/sioux.png',
    },
    {
        desc: 'Insure.com',
        link: 'https://www.insure.com/home-insurance/how-much-dwelling-coverage-do-i-need/',
        img: '/carousel/insure.png',
    },
    {
        desc: 'Business Insider',
        link: 'https://markets.businessinsider.com/news/stocks/millennial-money--now-is-the-time-to-build-your-credit-10865264',
        img: '/carousel/businessinsider.png',
    },
    {
        desc: 'ThinkAdvisor',
        link: 'https://www.thinkadvisor.com/2021/12/23/what-8-advisors-will-do-differently-in-2022-advisors-advice/',
        img: '/carousel/thinkadvisor.png',
    },
    {
        desc: 'Nasdaq',
        link: 'https://www.nasdaq.com/articles/dol-planning-a-big-change-to-the-fiduciary-rule-2021-08-06',
        img: '/carousel/nasdaq.png',
    },
    {
        desc: 'MSN Money',
        link: 'https://www.msn.com/en-us/money/news/how-to-prepare-for-what-social-security-wont-cover-in-retirement/ar-AAPY9ur',
        img: '/carousel/msn.png',
    },
    {
        desc: 'Yahoo Finance',
        link: 'https://finance.yahoo.com/news/millennials-share-biggest-money-regrets-110016585.html',
        img: '/carousel/yahoo.png',
    },
    {
        desc: 'GoBankingrates.com',
        link: 'https://www.gobankingrates.com/money/financial-planning/signs-should-fire-financial-planner/',
        img: '/carousel/gobankingrates.png',
    },
];

const Carousel = () => {
    useEffect(() => {
        new Glide('.glide', {
            type: 'carousel',
            autoplay: 2000,
            perView: 3,
            hoverpause: true,
            animationDuration: 2000,
        }).mount();
    });

    return (
        <div className={styles.carousel}>
            <h3 className={styles.header}>As featured in...</h3>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className={`${styles.glide_slides} glide__slides`}>
                        {CAROUSEL_ITEMS.map(item => (
                            <li key={item.link} className="glide__slide">
                                <div className={styles.carousel_item}>
                                    <Link href={item.link}>
                                        <img src={item.img} alt={item.desc} />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
