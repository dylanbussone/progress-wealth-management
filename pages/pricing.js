import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import styles from '../styles/pricing.module.css';

const Pricing = () => {
    return (
        <Main>
            <Section>
                <h1>Pricing and Options</h1>
                <div className={styles.intro}>
                    some intro text
                </div>
                <div className={styles.pricing_blocks}>
                    <div>
                        <h3>For Individuals</h3>
                        <ul>
                            <li>todo</li>
                            <li>todo</li>
                            <li>todo</li>
                        </ul>
                        <p className={styles.cost}>$500</p>
                    </div>
                    <div>
                        <h3>For Couples</h3>
                        <ul>
                            <li>todo</li>
                            <li>todo</li>
                            <li>todo</li>
                        </ul>
                        <p className={styles.cost}>$950</p>
                    </div>
                    <div>
                        <h3>For Entrepreneurs</h3>
                        <ul>
                            <li>todo</li>
                            <li>todo</li>
                            <li>todo</li>
                        </ul>
                        <p className={styles.cost}>$2500</p>
                    </div>
                    <div>
                        <h3>Wealth Management</h3>
                        <ul>
                            <li>Starts at 1% for assets under management</li>
                            <li>Fee gets lower as your money grows</li>
                            <li>No minimums</li>
                            <li>Get as much time as you need with your dedicated financial expert</li>
                        </ul>
                        <p className={styles.cost}>1%</p>
                    </div>
                </div>
            </Section>
        </Main>
    );
};

export default Pricing;
