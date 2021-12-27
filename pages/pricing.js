import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import CleanBlocks from '../components/clean-blocks';
import styles from '../styles/pricing.module.css';

const Pricing = () => {
    return (
        <Main>
            <Section>
                <h1>Pricing and Options</h1>
                <div className={styles.pricing_blocks}>
                    <CleanBlocks cols={2} blocksContent={[
                        {
                            header: 'For Individuals',
                            body: (
                                <ul>
                                    <li>
                                        Whether it be developing a plan to get a{' '}
                                        <span className={styles.highlight}>
                                            better handle on your debt
                                        </span>
                                        , figuring out{' '}
                                        <span className={styles.highlight}>
                                            how to invest your money
                                        </span>
                                        , or answering any questions you may have about any aspect of
                                        your financial life, we&apos;ll help you figure out what you
                                        should do for everything and make it easy. This is the first
                                        step to accomplishing true progress.
                                    </li>
                                    <li>
                                        You&apos;ll receive a{' '}
                                        <span className={styles.highlight}>
                                            targeted, step-by-step plan to hit your personal goals on
                                            your timeline
                                        </span>
                                        .
                                    </li>
                                    <li>
                                        As many calls with your dedicated CFP as you like for{' '}
                                        <span className={styles.highlight}>2 months</span>.
                                    </li>
                                </ul>
                            ),
                            footer: <div className={styles.price}>$500</div>
                        },
                        {
                            header: 'For Couples',
                            body: (
                                <ul>
                                    <li>
                                        We&apos;ll work with you figure out strategies to view your
                                        financial life as a team, and help you make strides together to
                                        bring peace to your finances in a simple, easily digestible way.
                                    </li>
                                    <li>
                                        We&apos;ll work with you to develop a straight-forward,
                                        step-by-step plan to help you{' '}
                                        <span className={styles.highlight}>
                                            unlock your life&apos;s next chapter
                                        </span>
                                        .
                                    </li>
                                    <li>
                                        As many calls with your dedicated CFP as you like for{' '}
                                        <span className={styles.highlight}>6 months</span>.
                                    </li>
                                </ul>
                            ),
                            footer: <div className={styles.price}>$950</div>
                        },
                        {
                            header: 'For Entrepreneurs',
                            body: (
                                <ul>
                                    <li>
                                        Whether you&apos;re about to launch a new career (or a company)
                                        and you want to know what steps you have to take first, second
                                        and last to be successful in the venture you seek; we can ensure
                                        you&apos;re on the right financial track while you&apos;re busy
                                        changing the world.
                                    </li>
                                    <li>
                                        You&apos;ll be paired up not just with{' '}
                                        <span className={styles.highlight}>your own CFO</span> but also
                                        a coach who holds their PMP to help hold you accountable to your
                                        goals along the journey.
                                    </li>
                                </ul>
                            ),
                            footer: <div className={styles.price}>$2500</div>
                        },
                        {
                            header: 'Wealth Management',
                            body: (
                                <ul>
                                    <li>Starts at 1% for assets under management.</li>
                                    <li>Fee gets lower as your money grows.</li>
                                    <li>No minimums.</li>
                                    <li>All the time you need with your dedicated financial expert.</li>
                                </ul>
                            ),
                            footer: <div className={styles.price}>1%</div>
                        }
                    ]} />
                </div>
            </Section>
        </Main>
    );
};

export default Pricing;
