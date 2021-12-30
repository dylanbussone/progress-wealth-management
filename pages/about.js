import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import { Link } from '../components/link';
import Image from '../components/image';
import styles from '../styles/about.module.css';
import BlaineImage from '../public/blaine_sm.jpg';
import CfpImage from '../public/cfp.jpg';
import NapfaImage from '../public/napfa.jpg';
import FoImage from '../public/fo.jpg';
import VanguardImage from '../public/vanguard.jpg';
import DimensionalImage from '../public/dimensional.jpg';
import XypnImage from '../public/xypn.jpg';

const About = () => {
    return (
        <Main>
            <Section>
                <h1>Who We Are</h1>
                <Image className={styles.blaine_img} src={BlaineImage} alt="Blaine Thiederman" />

                <h3 className={styles.name_title}>
                    <span className={styles.bold}>Blaine Thiederman</span> MBA, CFP(R)
                    <br />
                    Founder/Lead Advisor
                </h3>
                <div className={styles.paragraphs}>
                    <p>
                        “As a CERTIFIED FINANCIAL PLANNER™, it’s my life’s mission to provide
                        unbiased financial education, advice and guidance to help my clients create
                        their path to financial independence. I believe that true comprehensive
                        financial planning can provide the clarity and confidence necessary for
                        families to understand and implement their own well-informed decisions.{' '}
                    </p>
                    <p>
                        My goal is to translate the complexity of financial topics into a simple,
                        step-by-step action plan to help you understand how to align your money with
                        your personal values and objectives. As a trusted source, my insights have
                        been featured in articles by Forbes, Gobankingrates.com, the Washington
                        Post, Yahoo Finance, MarketWatch, Business Insider and MSN.{' '}
                    </p>
                    <p>
                        I look forward to us exploring the opportunities and options to help you
                        experience the progress you’re hoping for.”
                    </p>
                </div>
            </Section>
            <Section>
                <h2>Why Hire Us?</h2>
                <p>We bring:</p>
                <ul className={styles.we_bring_list}>
                    <li>Organization</li>
                    <li>Accountability</li>
                    <li>Proactivity</li>
                    <li>Objectivity</li>
                    <li>Partnership</li>
                    <li>Education</li>
                </ul>
                <p>...to every relationship we have with our clients.</p>
                <br />
                <p>
                    As a result, we believe that through the relationship offered with our firm, we
                    can ensure that your financial future is as easy to reach as we can make
                    possible. We seek to help our clients this way all the while charging a
                    significantly more competitive fee than what’s typically seen across the
                    country.
                </p>
            </Section>
            <Section>
                <h2>Memberships and Alliances</h2>
                <div className={styles.memberships}>
                    <Link href="https://www.letsmakeaplan.org/find-a-cfp-professional/certified-professional-profile/ed120926-8235-4607-a3cf-1e09f3b0a3b5">
                        <Image src={CfpImage} alt="Certified Financial Planner" />
                    </Link>
                    <Link href="https://www.napfa.org/member/91997/35608">
                        <Image src={NapfaImage} alt="NAPFA" />
                    </Link>
                    <Link href="https://www.feeonlynetwork.com/financial-advisor/blaine-thiederman/">
                        <Image src={FoImage} alt="Fee Only" />
                    </Link>
                    <Link href="https://investor.vanguard.com/">
                        <Image src={VanguardImage} alt="Vanguard" />
                    </Link>
                    <Link href="https://us.dimensional.com/">
                        <Image src={DimensionalImage} alt="Dimensional" />
                    </Link>
                    <Link href="https://www.xyplanningnetwork.com/advisors/blaine-thiederman-cfp-mba/">
                        <Image src={XypnImage} alt="XYPN" />
                    </Link>
                </div>
            </Section>
        </Main>
    );
};

export default About;
