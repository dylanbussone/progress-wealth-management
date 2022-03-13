import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Main from '../components/main';
import Section from '../components/section';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setIsLoading(false);
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);
            }
        });
    }, []);
    return isLoading ? (
        <Main>
            <Section>
                <h2>Loading...</h2>
            </Section>
        </Main>
    ) : userInfo ? (
        <Main>
            <Section>
                <h1>Hello, {userInfo.displayName}</h1>
            </Section>
        </Main>
    ) : (
        <Main>
            <Section>
                <h2>Error logging in</h2>
                <Link href="/">Back to home</Link>
            </Section>
        </Main>
    );
};

export default Profile;
