import React from 'react';
import Main from '../components/main';
import Section from '../components/section';
import { Link } from '../components/link';

const InvestingGuides = () => {
    return (
        <Main>
            <Section>
                <h1>Investing Guides</h1>
                <ul>
                    <li>
                        <Link href="https://www.scribd.com/document/548422185/Women-and-Investing Retirement">
                            Women and Investing
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548421084/Retirement-Dreamcasting-Worksheet">
                            Dreamcasting
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548421030/Family-Financial-Workshop 8 Timeless">
                            Family Financial Workshop
                        </Link>
                    </li>
                    {/*<li>
                        <Link href="https://www.scribd.com/document/548420945/Eight-Timeless-Principles-of-Investing">
                            Investing Principles
                        </Link>
                    </li>*/}
                    <li>
                        <Link href="https://www.scribd.com/document/548421041/Preparing-for-a-satisfying-retirement">
                            Preparing for a Satisfying Retirement
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548420977/Checklist-for-Newlyweds 5 Estate">
                            Checklist for Newlyweds
                        </Link>
                    </li>
                    {/*<li>
                        <Link href="https://www.scribd.com/document/548420976/5-Estate-Considerations-for-the-LGBTQ-Community">
                            Considerations for the LGBTQ Community
                        </Link>
                    </li>*/}
                    <li>
                        <Link href="https://www.scribd.com/document/548421014/Understanding-Your-Estate The SECURE">
                            Understanding your estate
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548420917/The-Secure-Act">
                            Act and what it means to your financial future
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548420855/Don-t-Panic">
                            Your guide for how to maneuver the next bear market
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.scribd.com/document/548420908/2022-Tax-Planning-Whitepaper">
                            2022 Tax Planning Guide
                        </Link>
                    </li>
                </ul>
            </Section>
        </Main>
    );
};

export default InvestingGuides;
