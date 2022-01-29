import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { collection, getDocs } from '@firebase/firestore/lite';
import { db } from '../firebase/client-app';
import Main from '../components/main';
import Section from '../components/section';

const ClientPortal: NextPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const usersList = querySnapshot.docs.map(doc => doc.data());
            setUsers(usersList);
        };
        getUsers();
    }, []);

    // TODO loading/error handling

    console.log(users);

    return (
        <div>
            <Head>
                <title>Welcome</title>
            </Head>
            <Main>
                <Section>
                    <h1>Hi, you</h1>
                </Section>
                <Section>
                    {users.map(user => (
                        <div key={user.email}>{JSON.stringify(user)}</div>
                    ))}
                </Section>
            </Main>
        </div>
    );
};

export default ClientPortal;
