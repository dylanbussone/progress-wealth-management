import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Link } from './link';
import styles from '../styles/carousel.module.css';

const CAROUSEL_ITEMS = [
    {
        desc: 'NerdWallet',
        link: 'https://www.nerdwallet.com/article/finance/credit-score/nerdwallet-millennial-money-build-credit-now',
        img: 'https://www.nerdwallet.com/cdn/company/2021/kit/images/Press-Kit_Desktop_Logos-image.jpg',
    },
    {
        desc: 'Sioux City Journal',
        link: 'https://siouxcityjournal.com/business/article_36911812-4327-5c9a-b318-a68ad25d84e0.html',
        img: 'https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/3/de/3de5d95c-f7ff-5438-abfc-7820fc8f28c0/60353509c4b70.image.jpg',
    },
    {
        desc: 'Insure.com',
        link: 'https://www.insure.com/home-insurance/how-much-dwelling-coverage-do-i-need/',
        img: 'https://ww1.prweb.com/prfiles/2009/03/02/1130814/insure.bmp',
    },
    {
        desc: 'Business Insider',
        link: 'https://markets.businessinsider.com/news/stocks/millennial-money--now-is-the-time-to-build-your-credit-10865264',
        img: 'http://media.insider.com/public/assets/BI/US/logos/logos-page/BI_light_background_color_vertical.png',
    },
    {
        desc: 'ThinkAdvisor',
        link: 'https://www.thinkadvisor.com/2021/12/23/what-8-advisors-will-do-differently-in-2022-advisors-advice/',
        img: 'https://rockthestreetwallstreet.com/wp-content/uploads/2016/12/Untitled-design-62.png',
    },
    {
        desc: 'Nasdaq',
        link: 'https://www.nasdaq.com/articles/dol-planning-a-big-change-to-the-fiduciary-rule-2021-08-06',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/2560px-NASDAQ_Logo.svg.png',
    },
    {
        desc: 'MSN Money',
        link: 'https://www.msn.com/en-us/money/news/how-to-prepare-for-what-social-security-wont-cover-in-retirement/ar-AAPY9ur',
        img: 'https://logodix.com/logo/1030232.png',
    },
    {
        desc: 'Yahoo Finance',
        link: 'https://finance.yahoo.com/news/millennials-share-biggest-money-regrets-110016585.html',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Yahoo_Finance_Logo_2019.svg/2560px-Yahoo_Finance_Logo_2019.svg.png',
    },
    {
        desc: 'GoBankingrates.com',
        link: 'https://www.gobankingrates.com/money/financial-planning/signs-should-fire-financial-planner/',
        img: 'https://cdn.gobankingrates.com/wp-content/uploads/2016/08/GBRlogo_280x150-02.png',
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
