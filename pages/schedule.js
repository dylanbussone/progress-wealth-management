import React, { useRef } from 'react';
import Main from '../components/main';
import Section from '../components/section';
import Image from '../components/image';
import { openCalendlyPopup } from '../utils';
import styles from '../styles/schedule.module.css';
import MeetingImage from '../public/meeting.jpg';

const Schedule = () => {
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
        <Main>
            <Section>
                <h1>Let&apos;s talk</h1>
                <p>
                    Meet your financial planning partners that provide you the tools, guidance,
                    inspiration and advice you need to succeed.
                </p>
                <div className={styles.meeting_image}>
                    <Image src={MeetingImage} alt="Meeting" />
                </div>
                <button className={styles.schedule_now} onClick={openCalendlyPopup}>
                    Schedule an Appointment
                </button>
            </Section>
            <Section>
                <div className={styles.contact_us}>
                    <h2>Let&apos;s email first</h2>
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
                            className={styles.contact_us_submit_button}
                            type="submit"
                            onClick={sendMail}>
                            Submit
                        </button>
                    </form>
                </div>
            </Section>
        </Main>
    );
};

export default Schedule;
