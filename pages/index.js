import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import Icon from '../components/icon';
import Image from '../components/image';
import CleanBlocks from '../components/clean-blocks';
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
                inspiration and advice you need to succeed.
            </p>
            <br />
            <p>
                We’re currently accepting new clients.{' '}
                <button className={styles.button_link} onClick={openCalendlyPopup}>
                    Get Started.
                </button>
            </p>
            <div className={styles.clients_image}>
                <Image src={ClientsImage} quality={100} priority alt="Meeting" />
            </div>
        </Section>

        <Section>
            <CleanBlocks cols={3} blocksContent={[
                { header: 'Learn', body: <div>hi</div> },
                { header: 'Watch', body: <div>hi</div> },
                { header: 'Plan', body: <div>hi</div> }
            ]} />
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

        <Section>
            <div className={styles.today_tomorrow}>
                <div className={styles.today_tomorrow_img_wrapper}>
                    <Image src={BoatImage} />
                </div>
                <h4>
                    Progress Wealth today.
                    <br />
                    Progress tomorrow.
                </h4>
            </div>
        </Section>

        <Section>
            <h2>Learn more:</h2>
            <iframe
                className={styles.video}
                loading="lazy"
                src="https://www.youtube.com/embed/BLpropxtFCc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </Section>
    </Main>
);

export default Index;
