import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SECTIONS } from '../constants';
import Header from '../components/header';
import Footer from '../components/footer';
import { openCalendlyPopup, debounce } from '../utils';
// import Favicon from '../public/logo-icon.png'; TODOOOO
import styles from '../styles/index.module.css';

const Index = () => {
    const [activeSection, setActiveSection] = useState();
    const scheduleRef = useRef();
    const servicesRef = useRef();
    const whoWeAreRef = useRef();
    const mailingListRef = useRef();
    const contactRef = useRef();

    const sectionsWithRefs = { ...SECTIONS };
    sectionsWithRefs.SCHEDULE.ref = scheduleRef;
    sectionsWithRefs.SERVICES.ref = servicesRef;
    sectionsWithRefs.WHO_WE_ARE.ref = whoWeAreRef;
    sectionsWithRefs.MAILING_LIST.ref = mailingListRef;
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

    return (
        <React.Fragment>
            <Helmet title="Progress Wealth Management">
                {/* TODOOOO */}
                {/* <link rel="icon" type="image/png" href={Favicon} sizes="16x16" /> */}
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async></script>
                <script type="text/javascript">
                    {`window.onload = function() {
                        Calendly.initBadgeWidget({
                            url: "https://calendly.com/progress-wealth-management",
                            text: "Schedule an Appointment",
                            color: "#2A9D8F",
                            textColor: "#ffffff",
                            branding: false,
                        });
                    }`}
                </script>
                <link
                    href="https://assets.calendly.com/assets/external/widget.css"
                    rel="stylesheet"></link>
            </Helmet>
            <Header activeSection={activeSection} />
            <main>
                <div className={styles.hero}>
                    <div className={styles.hero_image} />
                </div>
                <section
                    className={`${styles.section} ${styles.schedule}`}
                    id={SECTIONS.SCHEDULE.id}>
                    <h2 className={styles.section_header} ref={scheduleRef}>
                        {SECTIONS.SCHEDULE.text}
                    </h2>
                    <div className={styles.section_content}>
                        <p>
                            <button className={styles.button_link} onClick={openCalendlyPopup}>
                                Schedule an appointment
                            </button>
                            with us to get a free financial plan.
                        </p>
                        <div>
                            {/* TODOOOOO */}
                            {/* <StaticImage
            className="meeting-image"
            src="../images/meeting.jpg"
            alt="Meeting"
            placeholder="blurred"
            objectFit="cover"
            loading="lazy"
        /> */}
                        </div>
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.services}`}
                    id={SECTIONS.SERVICES.id}>
                    <h2 className={styles.section_header} ref={servicesRef}>
                        {SECTIONS.SERVICES.text}
                    </h2>
                    <div className={styles.section_content}>
                        <ul>
                            <li>Life Changes</li>
                            <li>Career Advice</li>
                            <li>Personal Finance</li>
                            <li>Retirement Planning</li>
                            <li>Investment Advice</li>
                            <li>Tax Advice</li>
                        </ul>
                    </div>
                </section>
                <section
                    className={`${styles.section} ${styles.who_we_are}`}
                    id={SECTIONS.WHO_WE_ARE.id}>
                    <h2 className={styles.section_header} ref={whoWeAreRef}>
                        {SECTIONS.WHO_WE_ARE.text}
                    </h2>
                    <div className={styles.section_content}></div>
                </section>
                <section
                    className={`${styles.section} ${styles.mailing_list}`}
                    id={SECTIONS.MAILING_LIST.id}>
                    <h2 className={styles.section_header} ref={mailingListRef}>
                        {SECTIONS.MAILING_LIST.text}
                    </h2>
                    <div className={styles.section_content}></div>
                </section>
                <section
                    className={`${styles.section} ${styles.contact_us}`}
                    id={SECTIONS.CONTACT_US.id}>
                    <h2 className={styles.section_header} ref={contactRef}>
                        {SECTIONS.CONTACT_US.text}
                    </h2>
                    <div className={styles.section_content}>
                        <form>
                            {' '}
                            {/* TODO: just do a mailto for now */}
                            <input type="text" id="first-name" placeholder="First name" required />
                            <input type="text" id="last-name" placeholder="Last name" required />
                            <input type="text" id="email" placeholder="Email" required />
                            <input type="text" id="phone" placeholder="Phone number (optional)" />
                            <textarea id="message" placeholder="Message" rows={4} required />
                            <button className={styles.submit_button} type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
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
