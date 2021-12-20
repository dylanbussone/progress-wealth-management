import React, { useState } from 'react';
import { Link } from './link';
import Icon from '../components/icon';
import styles from '../styles/dropdown-questions.module.css';
import { openCalendlyPopup } from '../utils';

const DROPDOWN_CONTENT = [
    {
        question: 'How does Progress Wealth Work?',
        dropdownContent: (
            <p>
                Once you{' '}
                <button className={styles.button_link} onClick={openCalendlyPopup}>
                    schedule an appointment
                </button>
                , you’ll get to talk to one of our advisors and see if it’s a good fit. If it is,
                they’ll help you understand what you need to do next to start seeing progress.
            </p>
        ),
    },
    {
        question: 'Is my money safe?',
        dropdownContent: (
            <React.Fragment>
                <p>
                    At Progress Wealth Management, we use Betterment Securities to hold our clients
                    money and support our trading technology. Betterment Securities is a Member of
                    SIPC, which protects securities customers of its members up to $500,000
                    (including $250,000 for claims for cash). Explanatory brochure available upon
                    request or at <Link href="https://www.sipc.org">www.sipc.org</Link>. What you
                    should remember is that the SPIC does not protect against market changes in your
                    investing account.
                </p>
                <p>
                    Individual Cash Reserve accounts have FDIC insurance up to $1,000,000.00 and
                    joint Cash Reserve accounts offer up to $2,000,000 in{' '}
                    <Link href="https://www.betterment.com/resources/fdic-insurance/">
                        FDIC insurance
                    </Link>{' '}
                    once funds are deposited into our{' '}
                    <Link href="https://www.betterment.com/legal/cash-reserve-program-banks/">
                        program banks
                    </Link>
                    .
                </p>
                <p>
                    Funds deposited into Checking are FDIC-insured up to $250k for individual
                    accounts and up to $250k per depositor for joint accounts, provided by nbkc
                    bank, Member FDIC. Explore further details about{' '}
                    <Link href="https://www.betterment.com/resources/fdic-insurance/">
                        FDIC insurance
                    </Link>
                    .
                </p>
            </React.Fragment>
        ),
    },
    {
        question: 'Will I have a financial advisor?',
        dropdownContent: (
            <p>
                You’ll have a designated CFP who you’ll work with directly having meetings with at
                least once a year, having their direct contact number, be able to text them and
                email them whenever you need.
            </p>
        ),
    },
    {
        question: 'What happens behind the scenes?',
        dropdownContent: (
            <React.Fragment>
                <p>
                    Our team of investing experts make decisions about our{' '}
                    <Link href="https://www.betterment.com/investments/">portfolio strategies</Link>{' '}
                    and fund selection with the help of an external committee of economists, PhDs,
                    and industry experts.
                </p>
                <p>
                    More than just a portfolio management team, our experts work to develop
                    improvements to our{' '}
                    <Link href="https://www.betterment.com/tax-efficient-investing">
                        Tax Smart technology
                    </Link>
                    , our cash analysis tools, and other advanced strategies.
                </p>
            </React.Fragment>
        ),
    },
];

const DropdownQuestions = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});
    const toggleDropdown = q => {
        setOpenDropdowns({
            ...openDropdowns,
            [q]: !openDropdowns[q],
        });
    };

    return (
        <div className={styles.dropdown_questions}>
            {DROPDOWN_CONTENT.map(({ question, dropdownContent }) => (
                <div className={styles.dropdown_question} key={question}>
                    <h4>
                        <a onClick={() => toggleDropdown(question)}>
                            <span className={styles.question}>{question}</span>
                            <Icon
                                name={openDropdowns[question] ? 'collapse' : 'expand'}
                                size="14"
                            />
                        </a>
                    </h4>
                    <div className={openDropdowns[question] ? styles.open : styles.closed}>
                        <div className={styles.padding}>{dropdownContent}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DropdownQuestions;
