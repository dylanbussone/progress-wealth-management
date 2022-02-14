import Script from 'next/script';
import Main from '../components/main';
import Section from '../components/section';
import styles from '../styles/what-to-expect.module.css';

const WhatToExpect = () => {
    return (
        <Main>
            <Script
                src="https://fast.wistia.com/embed/medias/7qf14xt5ys.jsonp"
                strategy="lazyOnload"
            />
            <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
            <Script
                src="https://fast.wistia.com/embed/medias/tfil6fkbh9.jsonp"
                strategy="lazyOnload"
            />
            <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
            <Script
                src="https://fast.wistia.com/embed/medias/zqz9m9keff.jsonp"
                strategy="lazyOnload"
            />
            <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />

            <Section>
                <h1>What to Expect</h1>
            </Section>

            <Section className={styles.video_section}>
                <h4>How we can help you stay organized and ensure efficiency</h4>
                <div className={`${styles.video} wistia_embed wistia_async_7qf14xt5ys`}>&nbsp;</div>
            </Section>

            <Section className={styles.video_section}>
                <h4>Get help with creating a science behind affording your future</h4>
                <div className={`${styles.video} wistia_embed wistia_async_tfil6fkbh9`}>
                    <div
                        className="wistia_swatch"
                        style={{
                            height: '100%',
                            left: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}>
                        <img
                            src="https://fast.wistia.com/embed/medias/tfil6fkbh9/swatch"
                            style={{
                                filter: 'blur(5px)',
                                height: '100%',
                                objectFit: 'contain',
                                width: '100%',
                            }}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </Section>

            <Section className={styles.video_section}>
                <h4>Navigate Market Uncertainty</h4>
                <div className={`${styles.video} wistia_embed wistia_async_zqz9m9keff`}>
                    <div
                        className="wistia_swatch"
                        style={{
                            height: '100%',
                            left: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}>
                        <img
                            src="https://fast.wistia.com/embed/medias/zqz9m9keff/swatch"
                            style={{
                                filter: 'blur(5px)',
                                height: '100%',
                                objectFit: 'contain',
                                width: '100%',
                            }}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </Section>
        </Main>
    );
};

export default WhatToExpect;
