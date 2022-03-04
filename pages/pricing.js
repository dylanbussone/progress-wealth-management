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
                    <CleanBlocks
                        cols={2}
                        blocksContent={[
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
                                            , or answering any questions you may have about any
                                            aspect of your financial life, we&apos;ll help you
                                            figure out what you should do for everything and make it
                                            easy. This is the first step to accomplishing true
                                            progress.
                                        </li>
                                        <li>
                                            You&apos;ll receive a{' '}
                                            <span className={styles.highlight}>
                                                targeted, step-by-step plan to hit your personal
                                                goals on your timeline
                                            </span>
                                            .
                                        </li>
                                        <li>
                                            As a result of signing up, you&apos;ll get as many calls
                                            with your dedicated CFP as you like for{' '}
                                            <span className={styles.highlight}>12 months</span>.
                                        </li>
                                    </ul>
                                ),
                                footer: <div className={styles.price}>$2400/yr</div>,
                            },
                            {
                                header: 'For Couples',
                                body: (
                                    <ul>
                                        <li>
                                            Our goal will be to help you and your spouse{' '}
                                            <span className={styles.highlight}>
                                                make strides together
                                            </span>{' '}
                                            to bring peace to your finances in a simple, easily
                                            digestible way. How we&apos;ll do this is, we&apos;ll
                                            analyze every aspect of your financial life and in doing
                                            so, figure out a{' '}
                                            <span className={styles.highlight}>
                                                step by step plan
                                            </span>{' '}
                                            and hold your hand to make it easy along the way.
                                        </li>
                                        <li>
                                            Throughout the year, you&apos;ll get as many calls with
                                            your dedicated CFP as you&apos;d like.
                                        </li>
                                    </ul>
                                ),
                                footer: <div className={styles.price}>$3600/yr</div>,
                            },
                            {
                                header: 'Financial Wellness for Small Businesses',
                                body: (
                                    <ul>
                                        <li>
                                            It&apos;s well known that financial stress is the number
                                            one reason people look for a new job.
                                        </li>
                                        <li>
                                            Hire Progress Wealth Management on as your financial
                                            wellness provider and in doing so, provide every
                                            employee with a financial plan to help bring
                                            organization and peace to their financial lives.
                                        </li>
                                        <li>
                                            Every employee gets unlimited calls with their planner
                                            where they&apos;ll receive a financial plan, budgeting,
                                            and low cost investment management so they know
                                            they&apos;re on track.
                                        </li>
                                    </ul>
                                ),
                                footer: (
                                    <div className={styles.price}>$5-10 a month, per employee</div>
                                ),
                            },
                            {
                                header: 'Wealth Management',
                                body: (
                                    <ul>
                                        <li>Starts at 1% for assets under management.</li>
                                        <li>Fee gets lower as your money grows.</li>
                                        <li>No minimums.</li>
                                        <li>
                                            All the time you need with your dedicated financial
                                            expert.
                                        </li>
                                    </ul>
                                ),
                                footer: <div className={styles.price}>1%</div>,
                            },
                        ]}
                    />
                </div>
            </Section>
        </Main>
    );
};

export default Pricing;
