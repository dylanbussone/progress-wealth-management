import React from 'react';
import Link from '../components/link';
import styles from '../styles/about.module.css';

const About = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <h1>Who We Are</h1>
                <div className={styles.section_content}>
                    <div className={styles.section_content_group}>
                        <img src="/blaine_sm.jpg" alt="Blaine Thiederman" loading="lazy" />
                        <h3>
                            <span className={styles.bold}>Blaine Thiederman</span> MBA,CFP(R)
                            <br />
                            Founder/Lead Advisor
                        </h3>
                        <div className={styles.paragraphs}>
                            <p>
                                When retirement comes, Blaine is hoping to have saved enough to
                                spend it with his wife, traveling the United States to explore every
                                national park. Buying time until he gets started exploring, we’re
                                proud to say that Blaine is a mentor to ASU students and volunteers
                                his time to entrepreneurs through the Rocky Mountain Microfinance
                                institute. 
                            </p>
                            <p>
                                Blaine wanted to start a financial services business that’s
                                different from what’s standard within the industry - a firm where he
                                can truly prioritize the needs of his clients over himself and the
                                firm. He wanted to start a business where clients can expect
                                personal service, unbiased expert advice, guidance and counsel to
                                help them grow and customized solutions and that firm is Progress
                                Wealth Management. 
                            </p>
                        </div>
                        <div className={styles.paragraphs}>
                            <p>
                                Blaine has dedicated 12 years of his life towards his career and
                                expertise in financial planning and wealth management. As a
                                Certified Financial Planner™, Blaine brings a wide range of
                                experience to the relationships he holds with his clients focusing
                                on his ability to provide holistic financial planning, tax planning
                                and preparation. Prior to starting Progress Wealth management,
                                Blaine served as a leading financial planner at Fisher Investments
                                and Edelman Financial Engines.
                            </p>
                        </div>
                    </div>
                    <div className={styles.section_content_group}>
                        <h2>Why Hire Us?</h2>
                        <p>We bring:</p>
                        <ul className={styles.we_bring_list}>
                            <li>Organization</li>
                            <li>Accountability</li>
                            <li>Proactivity</li>
                        </ul>
                        <ul className={styles.we_bring_list}>
                            <li>Objectivity</li>
                            <li>Partnership</li>
                            <li>Education</li>
                        </ul>
                        <p>...to every relationship we have with our clients.</p>
                        <br />
                        <p>
                            As a result, we believe that through the relationship offered with our
                            firm, we can ensure that your financial future is as easy to reach as we
                            can make possible. We seek to help our clients this way all the while
                            charging a significantly more competitive fee than what’s typical within
                            the Denver Metro Area.
                        </p>
                    </div>
                    <div className={styles.section_content_group}>
                        <h2>Memberships and Alliances</h2>
                        <div className={styles.memberships}>
                            <Link href="https://www.letsmakeaplan.org/find-a-cfp-professional/certified-professional-profile/ed120926-8235-4607-a3cf-1e09f3b0a3b5">
                                <img
                                    src="/cfp.jpeg"
                                    alt="Certified Financial Planner"
                                    loading="lazy"
                                />
                            </Link>
                            <Link href="https://www.napfa.org/member/91997/35608">
                                <img src="/napfa.jpeg" alt="NAPFA" loading="lazy" />
                            </Link>
                            <Link href="https://www.feeonlynetwork.com/financial-advisor/blaine-thiederman/">
                                <img src="/fo.jpeg" alt="Fee Only" loading="lazy" />
                            </Link>
                        </div>
                        <div className={styles.memberships}>
                            <img src="/vanguard.jpeg" alt="Vanguard" loading="lazy" />
                            <img src="/dimensional.png" alt="Dimensional" loading="lazy" />
                            <Link href="https://www.xyplanningnetwork.com/advisors/blaine-thiederman-cfp-mba/">
                                <img src="/xypn.png" alt="XYPN" loading="lazy" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
