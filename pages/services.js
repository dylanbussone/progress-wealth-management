import Main from '../components/main';
import Section from '../components/section';
import DropdownQuestions from '../components/dropdown-questions';
import Icon from '../components/icon';
import styles from '../styles/services.module.css';

const Services = () => {
    return (
        <Main>
            <Section>
                <h1>What We Do</h1>

                <iframe
                    className={styles.video}
                    loading="lazy"
                    src="https://www.youtube.com/embed/hmwDo3-8t-o"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <ul className={styles.services_list}>
                    <li>
                        <Icon name="family" size={32} color="icon_gold" />
                        Life Changes
                    </li>
                    <li>
                        <Icon name="career" size={50} color="icon_gold" />
                        Career Advice
                    </li>
                    <li>
                        <Icon name="personal" size={42} color="icon_gold" />
                        Personal Finance
                    </li>
                    <li>
                        <Icon name="retirement" size={46} color="icon_gold" />
                        Retirement Planning
                    </li>
                    <li>
                        <Icon name="investments" size={40} color="icon_gold" />
                        Investment Advice
                    </li>
                    <li>
                        <Icon name="tax" size={42} color="icon_gold" />
                        Tax Advice
                    </li>
                </ul>
            </Section>

            <Section>
                <h2>Common Questions We Help Our Clients Answer</h2>

                <ul className={styles.common_questions}>
                    <li>
                        How can I plan for the future in the most{' '}
                        <span className={styles.bold}>tax efficient</span> way?{' '}
                    </li>
                    <li>
                        How should I approach my <span className={styles.bold}>stock options</span> to ensure I???m not wasting any money?
                    </li>
                    <li>
                        What can be done today to ensure I???m not throwing away any of my{' '}
                        <span className={styles.bold}>employer sponsored benefits</span>?
                    </li>
                    <li>
                        How can I ensure that I???m truly{' '}
                        <span className={styles.bold}>maximizing my earning potential</span> early
                        on and in doing so, getting paid what I???m worth?
                    </li>
                    <li>What can I do today to decrease my tax burden? </li>
                    <li>
                        How do I <span className={styles.bold}>protect myself</span> from liability
                        of getting sued either by clients or from whatever could happen?
                    </li>
                    <li>
                        What can I do differently to{' '}
                        <span className={styles.bold}>grow my money</span> more effectively?{' '}
                    </li>
                    <li>
                        How should I approach{' '}
                        <span className={styles.bold}>paying off my student loans</span>?
                    </li>
                    <li>How can I grow my rental property empire in a smart way? </li>
                    <li>Do I need an estate plan and if so, how should it look?</li>
                </ul>
            </Section>
            <Section>
                <h2>Still have questions?</h2>
                <br />
                <DropdownQuestions />
            </Section>
        </Main>
    );
};

export default Services;
