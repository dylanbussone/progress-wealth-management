import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyAmttynSJ2Ubht6N9pWefiPuXGK8W0r4F0',
    authDomain: 'progress-wealth-management.firebaseapp.com',
    projectId: 'progress-wealth-management',
    storageBucket: 'progress-wealth-management.appspot.com',
    messagingSenderId: '717934113207',
    appId: '1:717934113207:web:958b07412b8cd6f271f832',
    measurementId: 'G-NFTPYHQYL8',
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };

/**
* Add:

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
*/
