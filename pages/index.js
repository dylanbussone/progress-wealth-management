import React, { useRef } from 'react';
import Link from '../components/link';
import Icon from '../components/icon';
import { openCalendlyPopup } from '../utils';
import styles from '../styles/index.module.css';

/* eslint-disable @next/next/no-img-element */

const Index = () => {
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
        <main className={styles.main}>
            <section className={styles.section}>
                <h1 className={styles.section_header}>Financial Planning for Progress</h1>

                <div className={styles.section_content}>
                    <div className={styles.section_content_group}>
                        <div className={styles.quote}>
                            <h5>
                                Planning is bringing the future into the present so that you can do
                                something about it now.
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
                        <h2>Planning for a Better Future</h2>

                        <p>
                            Whether you’re worth $100 or $100M, we’re here to help you figure out
                            everything about your financial life.
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
                                We comb through your finances to find every area of opportunity so
                                we help you grow as fast as we can.
                            </p>
                        </div>
                        <div>
                            <Icon name="personalized" color="icon_violet" />
                            <h4>Personalized</h4>
                            <p>
                                We customize everything to your liking, collaborating with you or
                                permitting you to delegate everything to us.
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
                                        organization, objectivity and simplicity to your financial
                                        life.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                We use a time tested model for building wealth to give you the best
                                chance at affording whatever life throws at you.
                            </li>
                            <li>
                                We’re truly holistic, so there’s no stone left unturned as we help
                                you figure out your financial life.
                                <ul>
                                    <li>
                                        If it can benefit your financial future, we will do anything
                                        to support you and to optimize your future progress.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                We’re tax professionals and CFPs, so we don’t just help you plan for
                                your future but we do so in the most tax efficient way.
                            </li>
                            <li>
                                We hold your hand every step of the way to help you stay disciplined
                                and to make every big decision simple.
                            </li>
                            <li>
                                Invest with your values. Our socially responsible investing helps
                                you make a positive impact on society without sacrificing
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
            <section className={`${styles.section} ${styles.who_we_are}`}>
                <h1 className={styles.section_header}>Who We Are</h1>
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
            <section className={`${styles.section} ${styles.contact_us}`}>
                <h1 className={styles.section_header}>Contact Us</h1>
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
                <div className={styles.section_content}>
                    <div className={styles.section_content_group}>
                        <h2>Testimonials</h2>
                        <div className={styles.testimonials}>
                            <div className={styles.testimonial}>
                                <h4>
                                    &quot;Fantastic rates for a CFP. Awesome guy and extremely
                                    helpful with my planning and portfolio.&quot;
                                </h4>
                                <span className={styles.name}>Joshua H.</span>
                            </div>
                            <div className={styles.testimonial}>
                                <h4>
                                    &quot;Blaine is very knowledgeable and personable. He is very
                                    client focused and results driven. You feel confident your
                                    finances are in good hands working with Blaine.&quot;
                                </h4>
                                <span className={styles.name}>Eric T.</span>
                                <span className={styles.date}>Sep 28, 2021</span>
                            </div>
                            <div className={styles.testimonial}>
                                <h4>
                                    &quot;Blane is a very hard-working, intelligent advisor with a
                                    genuine interest in seeing his clients succeed.&quot;
                                </h4>
                                <span className={styles.name}>Kevin B.</span>
                                <span className={styles.date}>Sep 29, 2021</span>
                            </div>
                            <div className={styles.testimonial}>
                                <h4>
                                    &quot;Very professional and exceeded my expectations. Would
                                    highly recommend.&quot;
                                </h4>
                                <span className={styles.name}>Chris P.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Index;
