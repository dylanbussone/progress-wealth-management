import Main from '../components/main';
import Section from '../components/section';
import { Link } from '../components/link';
import styles from '../styles/legal.module.css';

const Legal = () => (
    <Main>
        <Section>
            <div className={styles.legal}>
                <h1>Legal</h1>
                <p>
                    Accurate as of 06.01.2021. This property and any marketing on the property are
                    provided by Progress Wealth Management.
                </p>
                <p>
                    The articles and customer support materials available on this property are
                    educational only and not investment or tax advice.
                </p>
                <p>
                    Advisory services provided by Progress Wealth Management, a Colorado State
                    registered investment adviser. Brokerage services provided to clients of
                    Progress Wealth Management by{' '}
                    <Link href="https://www.bettermentsecurities.com/">Betterment Securities</Link>,
                    an SEC-registered broker-dealer and member of{' '}
                    <Link href="http://www.finra.org/">FINRA</Link> /{' '}
                    <Link href="http://www.sipc.org/">SIPC</Link>.
                </p>
                <p>
                    Investments in securities: Not FDIC Insured • No Bank Guarantee • May Lose
                    Value. Investing in securities involves risks, and there is always the potential
                    of losing money when you invest in securities. Before investing, consider your
                    investment objectives and Progress Wealth Management’s charges and expenses.
                    Progress Wealth Management’s internet-based advisory services are designed to
                    assist clients in achieving discrete financial goals. For more details, see our{' '}
                    <Link href="https://files.adviserinfo.sec.gov/IAPD/Content/Common/crd_iapd_Brochure.aspx?BRCHR_VRSN_ID=722902">
                        Form ADV Part 2A
                    </Link>
                    ,{' '}
                    <Link href="https://reports.adviserinfo.sec.gov/reports/ADV/315196/PDF/315196.pdf">
                        Form ADV
                    </Link>{' '}
                    and{' '}
                    <Link href="https://adviserinfo.sec.gov/firm/summary/315196">
                        other disclosures
                    </Link>
                    . Past performance does not guarantee future results, and the likelihood of
                    investment outcomes are hypothetical in nature. Not an offer, solicitation of an
                    offer, or advice to buy or sell securities in jurisdictions where Progress
                    Wealth Management is not registered.{' '}
                    <Link href="http://www.xignite.com/">Market Data</Link> by Xignite.
                </p>
            </div>
        </Section>
    </Main>
);

export default Legal;
