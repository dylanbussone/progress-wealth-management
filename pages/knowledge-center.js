import Main from '../components/main';
import Section from '../components/section';
import { Link } from '../components/link';
import Image from '../components/image';
import Pic from '../public/knowledge-center.jpg';

const KnowledgeCenter = () => {
    return (
        <Main>
            <style jsx>{`
                ul {
                    margin-top: 24px;
                }
                li {
                    margin-left: 12px;
                }
            `}</style>
            <Section>
                <h1>Knowledge Center</h1>
                <Image src={Pic} />
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
