import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import Image from '../components/image';
import { Link } from './link';
import styles from '../styles/carousel.module.css';
import Businessinsider from '../public/carousel/businessinsider.png';
import Gobankinrates from '../public/carousel/gobankingrates.png';
import Insure from '../public/carousel/insure.png';
import Msn from '../public/carousel/msn.png';
import Nasdaq from '../public/carousel/nasdaq.png';
import Nerdwallet from '../public/carousel/nerdwallet.jpg';
import Sioux from '../public/carousel/sioux.png';
import Thinkadvisor from '../public/carousel/thinkadvisor.png';
import Yahoo from '../public/carousel/yahoo.png';

const CAROUSEL_ITEMS = [
    {
        desc: 'NerdWallet',
        link: 'https://www.nerdwallet.com/article/finance/credit-score/nerdwallet-millennial-money-build-credit-now',
        img: Nerdwallet,
    },
    {
        desc: 'Sioux City Journal',
        link: 'https://siouxcityjournal.com/business/article_36911812-4327-5c9a-b318-a68ad25d84e0.html',
        img: Sioux,
    },
    {
        desc: 'Insure.com',
        link: 'https://www.insure.com/home-insurance/how-much-dwelling-coverage-do-i-need/',
        img: Insure,
    },
    {
        desc: 'Business Insider',
        link: 'https://markets.businessinsider.com/news/stocks/millennial-money--now-is-the-time-to-build-your-credit-10865264',
        img: Businessinsider,
    },
    {
        desc: 'ThinkAdvisor',
        link: 'https://www.thinkadvisor.com/2021/12/23/what-8-advisors-will-do-differently-in-2022-advisors-advice/',
        img: Thinkadvisor,
    },
    {
        desc: 'Nasdaq',
        link: 'https://www.nasdaq.com/articles/dol-planning-a-big-change-to-the-fiduciary-rule-2021-08-06',
        img: Nasdaq,
    },
    {
        desc: 'MSN Money',
        link: 'https://www.msn.com/en-us/money/news/how-to-prepare-for-what-social-security-wont-cover-in-retirement/ar-AAPY9ur',
        img: Msn,
    },
    {
        desc: 'Yahoo Finance',
        link: 'https://finance.yahoo.com/news/millennials-share-biggest-money-regrets-110016585.html',
        img: Yahoo,
    },
    {
        desc: 'GoBankingrates.com',
        link: 'https://www.gobankingrates.com/money/financial-planning/signs-should-fire-financial-planner/',
        img: Gobankinrates,
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
        <div>
            <h3 className={styles.header}>As featured in...</h3>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className={`${styles.glide_slides} glide__slides`}>
                        {CAROUSEL_ITEMS.map(item => (
                            <li key={item.link} className="glide__slide">
                                <div className={styles.carousel_item}>
                                    <Link href={item.link}>
                                        <Image src={item.img} alt={item.desc} />
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
