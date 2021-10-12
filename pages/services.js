import React from 'react';
import DropdownQuestions from '../components/dropdown-questions';
import Icon from '../components/icon';
import styles from '../styles/services.module.css';

const Services = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1>What We Do</h1>
                <div className={styles.section_content}>
                    <div className={styles.section_content_group}>
                        <ul className={styles.services_list}>
                            <li>
                                <Icon name="family" size={48} color="icon_gold" />
                                Life Changes
                            </li>
                            <li>
                                <Icon name="career" size={52} color="icon_gold" />
                                Career Advice
                            </li>
                            <li>
                                <Icon name="personal" size={42} color="icon_gold" />
                                Personal Finance
                            </li>
                            <li>
                                <Icon name="retirement" size={52} color="icon_gold" />
                                Retirement Planning
                            </li>
                            <li>
                                <Icon name="investments" size={34} color="icon_gold" />
                                Investment Advice
                            </li>
                            <li>
                                <Icon name="tax" size={42} color="icon_gold" />
                                Tax Advice
                            </li>
                        </ul>
                    </div>
                    <div className={styles.section_content_group}>
                        <h2>Common Questions We Help Our Clients Answer</h2>

                        <ul className={styles.common_questions}>
                            <li>How can I plan for the future in the most tax efficient way? </li>
                            <li>
                                How should I approach my stock options to ensure I’m not wasting any
                                money?
                            </li>
                            <li>
                                What can be done today to ensure I’m not throwing away any of my
                                employer sponsored benefits?
                            </li>
                            <li>
                                How can I ensure that I’m truly maximizing my earning potential
                                early on and in doing so, getting paid what I’m worth?
                            </li>
                            <li>What can I do today to decrease my tax burden? </li>
                            <li>
                                How do I protect myself from liability of getting sued either by
                                clients or from whatever could happen?
                            </li>
                            <li>What can I do differently to grow my money more effectively? </li>
                            <li>How should I approach paying off my student loans?</li>
                            <li>How can I grow my rental property empire in a smart way? </li>
                            <li>Do I need an estate plan and if so, how should it look?</li>
                        </ul>
                    </div>

                    <div className={styles.section_content_group}>
                        <h2>Still have questions?</h2>
                        <DropdownQuestions />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
