import Main from '../components/main';
import Section from '../components/section';
import { Link } from '../components/link';

const KnowledgeCenter = () => {
    return (
        <Main>
            <Section>
                <h1>Knowledge Center</h1>
                <ul>
                    <li>
                        <Link href="/ebooks/Are you prepared financially to buy a house.pdf">
                            Are you prepared financially to buy a house?
                        </Link>
                    </li>
                    <li>
                        <Link href="/ebooks/Five Simple Steps to a Comfortable Happy Retirement.pdf">
                            Five simple steps to a comfortable, happy retirement
                        </Link>
                    </li>
                    <li>
                        <Link href="/ebooks/Michael and Melissa Officehours - financial plan.pdf">
                            Example financial plan
                        </Link>
                    </li>
                </ul>
            </Section>
        </Main>
    );
};

export default KnowledgeCenter;
