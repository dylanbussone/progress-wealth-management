import React, { useRef, useState, useEffect } from 'react';
import Script from 'next/script';
/* eslint-disable @next/next/no-img-element */
import { HOME_SECTIONS } from '../constants';
import Header from '../components/header';
import Footer from '../components/footer';
import Icon from '../components/icon';
import DropdownQuestions from '../components/dropdown-questions';
import { openCalendlyPopup, debounce } from '../utils';
import styles from '../styles/index.module.css';

const Index = () => {
    const [activeSection, setActiveSection] = useState();
    // const scheduleRef = useRef();
    const aboutRef = useRef();
    const servicesRef = useRef();
    const whoWeAreRef = useRef();
    const contactRef = useRef();

    const sectionsWithRefs = { ...HOME_SECTIONS };
    // sectionsWithRefs.SCHEDULE.ref = scheduleRef;
    sectionsWithRefs.ABOUT.ref = aboutRef;
    sectionsWithRefs.SERVICES.ref = servicesRef;
    sectionsWithRefs.WHO_WE_ARE.ref = whoWeAreRef;
    sectionsWithRefs.CONTACT_US.ref = contactRef;

    useEffect(() => {
        window.onscroll = () =>
            debounce(() => {
                const newActiveSection = getActiveSection(sectionsWithRefs);
                if (activeSection !== newActiveSection) {
                    setActiveSection(newActiveSection);
                }
            }, 100);
    });

    const contactFormRef = useRef();

    const sendMail = e => {
        e.preventDefault();
        const [name, email, phone, message] = Array.from(contactFormRef.current.elements).map(
            el => el.value,
        );
        const addr = 'blaine@progresswealthmanagement.com';
        const subject = `Message from ${name}`;
        const body = `${message.replace(
            /\n/g,
            '%0D%0A',
        )}%0D%0A%0D%0A--%0D%0A${name}%0D%0A${email}%0D%0A${phone}`;
        window.location.href = `mailto:${addr}?subject=${subject}&body=${body}`;
    };

    return (
        <React.Fragment>
            <Header page="index" activeSection={activeSection} />
            <main>
                <div className={styles.hero}>
                    <div className={styles.hero_image} />
                </div>
                {/* <section
                    className={`${styles.section} ${styles.schedule}`}
                    id={HOME_SECTIONS.SCHEDULE.id}>
                    <h1 className={styles.section_header} ref={scheduleRef}>
                        {HOME_SECTIONS.SCHEDULE.text}
                    </h1>
                    <div className={styles.section_content}>
                        <p>
                            <button className={styles.button_link} onClick={openCalendlyPopup}>
                                Schedule an appointment
                            </button>
                            with us to get a free financial plan.
                        </p>
                        <div className={styles.meeting_image}>
                            <img src="/meeting.jpg" alt="Meeting" width="100%" loading="lazy" />
                        </div>
                    </div>
                </section> */}
                <section
                    className={`${styles.section} ${styles.about}`}
                    id={HOME_SECTIONS.ABOUT.id}>
                    <h1 className={styles.section_header} ref={aboutRef}>
                        Financial Planning for Progress
                    </h1>

                    <div className={styles.section_content}>
                        <div className={styles.section_content_group}>
                            <div className={styles.quote}>
                                <h5>
                                    Planning is bringing the future into the present so that you can
                                    do something about it now.
                                </h5>
                                <p>-- Alan Lakein</p>
                            </div>
                            <p>
                                Meet your financial planning partners that provide you the tools,
                                guidance, inspiration and advice you need to succeed.{' '}
                                <button className={styles.button_link} onClick={openCalendlyPopup}>
                                    Get Started.
                                </button>
                            </p>
                            <div className={styles.meeting_image}>
                                <img src="/meeting.jpg" alt="Meeting" width="100%" loading="lazy" />
                            </div>
                        </div>

                        <div className={styles.section_content_group}>
                            <h2>Financial Planning for a Better Future</h2>

                            <p>
                                Whether you’re worth $100 or $100M, we’re here to help you figure
                                out everything about your financial life.
                            </p>
                        </div>
                        <div className={`${styles.easy_opt_pers} ${styles.section_content_group}`}>
                            <div>
                                <Icon name="easy" color="icon_violet" />
                                <h4>Easy</h4>
                                <p>You don’t need to dedicate months to this process.</p>
                            </div>
                            <div>
                                <Icon name="optimized" color="icon_violet" />
                                <h4>Optimized</h4>
                                <p>
                                    We comb through your finances to find every area of opportunity
                                    so we help you grow as fast as we can.
                                </p>
                            </div>
                            <div>
                                <Icon name="personalized" color="icon_violet" />
                                <h4>Personalized</h4>
                                <p>
                                    We customize everything to your liking, collaborating with you
                                    or permitting you to delegate everything to us.
                                </p>
                            </div>
                        </div>
                        <div className={styles.section_content_group}>
                            <h2>What Makes Progress Wealth Management better?</h2>

                            <ul>
                                <li>
                                    Built to make achieving progress EASY.
                                    <ul>
                                        <li>
                                            Our goal is to make it as simple as possible to bring
                                            organization, objectivity and simplicity to your
                                            financial life.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    We use a time tested model for building wealth to give you the
                                    best chance at affording whatever life throws at you.
                                </li>
                                <li>
                                    We’re truly holistic, so there’s no stone left unturned as we
                                    help you figure out your financial life.
                                    <ul>
                                        <li>
                                            If it can benefit your financial future, we will do
                                            anything to support you and to optimize your future
                                            progress.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    We’re tax professionals and CFPs, so we don’t just help you plan
                                    for your future but we do so in the most tax efficient way.
                                </li>
                                <li>
                                    We hold your hand every step of the way to help you stay
                                    disciplined and to make every big decision simple.
                                </li>
                                <li>
                                    Invest with your values. Our socially responsible investing
                                    helps you make a positive impact on society without sacrificing
                                    performance.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles.section_content} ${styles.today_tomorrow}`}>
                        <h4>
                            Progress Wealth today.
                            <br />
                            Progress tomorrow.
                        </h4>
                        <div className={styles.today_tomorrow_img_wrapper}>
                            <img src="/boat.jpg" alt="Sailing" width="100%" loading="lazy" />
                        </div>
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.services}`}
                    id={HOME_SECTIONS.SERVICES.id}>
                    <h1 className={styles.section_header} ref={servicesRef}>
                        {HOME_SECTIONS.SERVICES.text}
                    </h1>
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
                                <li>
                                    How can I plan for the future in the most tax efficient way?{' '}
                                </li>
                                <li>
                                    How should I approach my stock options to ensure I’m not wasting
                                    any money?
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
                                <li>
                                    What can I do differently to grow my money more effectively?{' '}
                                </li>
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
                <section
                    className={`${styles.section} ${styles.who_we_are}`}
                    id={HOME_SECTIONS.WHO_WE_ARE.id}>
                    <h1 className={styles.section_header} ref={whoWeAreRef}>
                        {HOME_SECTIONS.WHO_WE_ARE.text}
                    </h1>
                    <div className={styles.section_content}>
                        <div className={styles.section_content_group}>
                            <img src="/blaine.jpg" alt="Blaine Thiederman" loading="lazy" />
                            <h3>
                                <span className={styles.bold}>Blaine Thiederman</span> MBA,CFP(R)
                                <br />
                                Founder/Lead Advisor
                            </h3>
                            <div className={styles.paragraphs}>
                                <p>
                                    When retirement comes, Blaine is hoping to have saved enough to
                                    spend it with his wife, traveling the United States to explore
                                    every national park. Buying time until he gets started
                                    exploring, we’re proud to say that Blaine is a mentor to ASU
                                    students and volunteers his time to entrepreneurs through the
                                    Rocky Mountain Microfinance institute. 
                                </p>
                                <p>
                                    Blaine wanted to start a financial services business that’s
                                    different from what’s standard within the industry - a firm
                                    where he can truly prioritize the needs of his clients over
                                    himself and the firm. He wanted to start a business where
                                    clients can expect personal service, unbiased expert advice,
                                    guidance and counsel to help them grow and customized solutions
                                    and that firm is Progress Wealth Management. 
                                </p>
                            </div>
                            <div className={styles.paragraphs}>
                                <p>
                                    Blaine has dedicated 12 years of his life towards his career and
                                    expertise in financial planning and wealth management. As a
                                    Certified Financial Planner™, Blaine brings a wide range of
                                    experience to the relationships he holds with his clients
                                    focusing on his ability to provide holistic financial planning,
                                    tax planning and preparation. Prior to starting Progress Wealth
                                    management, Blaine served as a leading financial planner at
                                    Fisher Investments and Edelman Financial Engines.
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
                                As a result, we believe that through the relationship offered with
                                our firm, we can ensure that your financial future is as easy to
                                reach as we can make possible. We seek to help our clients this way
                                all the while charging a significantly more competitive fee than
                                what’s typical within the Denver Metro Area.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.contact_us}`}
                    id={HOME_SECTIONS.CONTACT_US.id}>
                    <h1 className={styles.section_header} ref={contactRef}>
                        {HOME_SECTIONS.CONTACT_US.text}
                    </h1>
                    <div className={styles.section_content}>
                        <div className={styles.section_content_group}>
                            <form ref={contactFormRef}>
                                {' '}
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    autoComplete="name"
                                    required
                                />
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                />
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Phone number (optional)"
                                    autoComplete="phone"
                                />
                                <textarea id="message" placeholder="Message" rows={4} required />
                                <button
                                    className={styles.submit_button}
                                    type="submit"
                                    onClick={sendMail}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            {/* Calendly widget */}
            <Script strategy="lazyOnload" src="/calendly.js" />
        </React.Fragment>
    );
};

function getActiveSection(sectionsWithRefs) {
    const scrollY = window.scrollY + 100; // 100px header height
    const padding = 100;
    let activeSection;
    Object.keys(sectionsWithRefs).forEach(section => {
        const ref = sectionsWithRefs[section].ref;
        const sectionOffsetTop = ref.current?.offsetTop;
        if (scrollY + padding > sectionOffsetTop) {
            activeSection = sectionsWithRefs[section];
        }
    });
    return activeSection;
}

export default Index;
