import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
/* eslint-disable @next/next/no-img-element */
import { SECTIONS } from '../constants';
import Header from '../components/header';
import Footer from '../components/footer';
import Icon from '../components/icon';
import { openCalendlyPopup, debounce } from '../utils';
import styles from '../styles/index.module.css';

const Index = () => {
    const [activeSection, setActiveSection] = useState();
    // const scheduleRef = useRef();
    const whoWeAreRef = useRef();
    const servicesRef = useRef();
    const contactRef = useRef();

    const sectionsWithRefs = { ...SECTIONS };
    // sectionsWithRefs.SCHEDULE.ref = scheduleRef;
    sectionsWithRefs.WHO_WE_ARE.ref = whoWeAreRef;
    sectionsWithRefs.SERVICES.ref = servicesRef;
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
            <Head>
                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"></link>
            </Head>
            <Header activeSection={activeSection} />
            <main>
                <div className={styles.hero}>
                    <div className={styles.hero_image} />
                </div>
                {/* <section
                    className={`${styles.section} ${styles.schedule}`}
                    id={SECTIONS.SCHEDULE.id}>
                    <h1 className={styles.section_header} ref={scheduleRef}>
                        {SECTIONS.SCHEDULE.text}
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
                    className={`${styles.section} ${styles.who_we_are}`}
                    id={SECTIONS.WHO_WE_ARE.id}>
                    <h1 className={styles.section_header} ref={whoWeAreRef}>
                        Financial Planning for Progress
                    </h1>

                    <div className={styles.section_content}>
                        <div className={styles.section_content_group}>
                            <p>
                                Meet your financial planning partners that provide you the tools,
                                guidance, inspiration and advice you need to succeed.
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
                                <Icon name="easy" color="icon_blue" />
                                <h4>Easy</h4>
                                <p>You don’t need to dedicate months to this process.</p>
                            </div>
                            <div>
                                <Icon name="optimized" color="icon_blue" />
                                <h4>Optimized</h4>
                                <p>
                                    We comb through your finances to find every area of opportunity
                                    so we help you grow as fast as we can.
                                </p>
                            </div>
                            <div>
                                <Icon name="personalized" color="icon_blue" />
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
                    <div className={styles.today_tomorrow}>
                        <h3>
                            Progress Wealth today.
                            <br />
                            Progress tomorrow.
                        </h3>
                        <div className={styles.today_tomorrow_img_wrapper}>
                            <img src="/boat.jpg" alt="Sailing" width="100%" loading="lazy" />
                        </div>
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.services}`}
                    id={SECTIONS.SERVICES.id}>
                    <h1 className={styles.section_header} ref={servicesRef}>
                        {SECTIONS.SERVICES.text}
                    </h1>
                    <div className={styles.section_content}>
                        <div className={styles.section_content_group}>
                            <ul className={styles.services_list}>
                                <li>Life Changes</li>
                                <li>Career Advice</li>
                                <li>Personal Finance</li>
                                <li>Retirement Planning</li>
                                <li>Investment Advice</li>
                                <li>Tax Advice</li>
                            </ul>
                        </div>
                        <div className={styles.section_content_group}>
                            <h2>Common Questions We Help Our Clients Answer</h2>

                            <ul>
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
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.contact_us}`}
                    id={SECTIONS.CONTACT_US.id}>
                    <h1 className={styles.section_header} ref={contactRef}>
                        {SECTIONS.CONTACT_US.text}
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
