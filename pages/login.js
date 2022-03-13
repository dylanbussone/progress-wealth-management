import React, { useEffect } from 'react';
import {
    getAuth,
    // createUserWithEmailAndPassword,
    // signInWithEmailAndPassword,
    // onAuthStateChanged,
    EmailAuthProvider,
    GoogleAuthProvider,
} from 'firebase/auth';
import Main from '../components/main';
import Section from '../components/section';
import 'firebaseui/dist/firebaseui.css';

// https://firebase.google.com/docs/auth/web/start
// https://firebase.google.com/docs/auth/web/firebaseui

const Login = () => {
    useEffect(() => {
        const firebaseui = require('firebaseui');
        const ui = new firebaseui.auth.AuthUI(getAuth());
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    return true;
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('firebaseui-auth-container-loader').style.display =
                        'none';
                },
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: '/profile',
            signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID],
        };
        ui.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <Main>
            <Section>
                <div id="firebaseui-auth-container"></div>
                <div id="firebaseui-auth-container-loader">Loading...</div>
            </Section>
        </Main>
    );
};

export default Login;
