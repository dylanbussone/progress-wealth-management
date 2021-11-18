import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import Icon from '../components/icon';
import Image from '../components/image';
import { openCalendlyPopup } from '../utils';
import styles from '../styles/index.module.css';
import ClientsImage from '../public/clients.jpg';
import BoatImage from '../public/boat.jpg';

const Index = () => (
    <Main>
        <Section>
            <h1>Financial Planning for Progress</h1>
            <p>
                Meet your financial planning partners that provide you the tools, guidance,
                inspiration and advice you need to succeed.{' '}
                <button className={styles.button_link} onClick={openCalendlyPopup}>
                    Get Started.
                </button>
            </p>
            <div className={styles.clients_image}>
                <Image src={ClientsImage} quality={100} priority alt="Meeting" />
            </div>
        </Section>
        <Section>
            <h2>Planning for a Better Future</h2>

            <p>
                Whether you’re worth $100 or $100M, we’re here to help you figure out everything
                about your financial life.
            </p>
            <div className={styles.easy_opt_pers}>
                <div>
                    <Icon name="easy" color="icon_violet" />
                    <h4>Easy</h4>
                    <p>You don’t need to dedicate months to this process.</p>
                </div>
                <div>
                    <Icon name="optimized" color="icon_violet" />
                    <h4>Optimized</h4>
                    <p>
                        We comb through your finances to find every area of opportunity so we help
                        you grow as fast as we can.
                    </p>
                </div>
                <div>
                    <Icon name="personalized" color="icon_violet" />
                    <h4>Personalized</h4>
                    <p>
                        We customize everything to your liking, collaborating with you or permitting
                        you to delegate everything to us.
                    </p>
                </div>
            </div>
        </Section>
        <Section className={styles.spacey}>
            <h2>What Makes Progress Wealth Management better?</h2>
            <p>
                Built to make achieving progress <span className={styles.bold}>easy</span>.
            </p>
            <p>
                Our goal is to make it as simple as possible to bring{' '}
                <span className={styles.bold}>organization, objectivity and simplicity</span> to
                your financial life.
            </p>
            <p>
                We use a time-tested model for building wealth to give you the best chance at
                affording whatever life throws at you.
            </p>
            <p>
                We’re truly <span className={styles.bold}>holistic</span>, so there’s no stone left
                unturned as we help you figure out your financial life. <br />
                If it can benefit your financial future, we will do anything to support you and to
                optimize your future progress.
            </p>
            <p>
                We’re tax professionals and CFPs, so we don’t just help you plan for your future but
                we do so in the most <span className={styles.bold}>tax efficient</span> way.
            </p>
            <p>
                We hold your hand every step of the way to help you stay disciplined and to make
                every big decision simple.
            </p>
            <p>
                Invest with your values. Our{' '}
                <span className={styles.bold}>socially responsible</span> investing helps you make a
                positive impact on society without sacrificing performance.
            </p>
        </Section>
        <Section>
            <div className={styles.today_tomorrow}>
                <h4>
                    Progress Wealth today.
                    <br />
                    Progress tomorrow.
                </h4>
                <div className={styles.today_tomorrow_img_wrapper}>
                    <Image src={BoatImage} />
                </div>
            </div>
        </Section>
        <Section>
            <iframe
                className={styles.video}
                loading="lazy"
                src="https://www.youtube.com/embed/BLpropxtFCc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </Section>
        <Section>
            <div className={styles.contact_us}>
                <h2>Testimonials</h2>
                <div className={styles.testimonials}>
                    <div className={styles.testimonial}>
                        <h4>
                            &quot;Fantastic rates for a CFP. Awesome guy and extremely helpful with
                            my planning and portfolio.&quot;
                        </h4>
                        <span className={styles.name}>Joshua H.</span>
                    </div>
                    <div className={styles.testimonial}>
                        <h4>
                            &quot;Blaine is very knowledgeable and personable. He is very client
                            focused and results driven. You feel confident your finances are in good
                            hands working with Blaine.&quot;
                        </h4>
                        <span className={styles.name}>Eric T.</span>
                        <span className={styles.date}>Sep 28, 2021</span>
                    </div>
                    <div className={styles.testimonial}>
                        <h4>
                            &quot;Blane is a very hard-working, intelligent advisor with a genuine
                            interest in seeing his clients succeed.&quot;
                        </h4>
                        <span className={styles.name}>Kevin B.</span>
                        <span className={styles.date}>Sep 29, 2021</span>
                    </div>
                    <div className={styles.testimonial}>
                        <h4>
                            &quot;Very professional and exceeded my expectations. Would highly
                            recommend.&quot;
                        </h4>
                        <span className={styles.name}>Chris P.</span>
                    </div>
                </div>
            </div>
        </Section>
    </Main>
);

export default Index;
