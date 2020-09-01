import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyBZXhkNyuxh13ldeM3UZmcidqwEre_U1uE",
    authDomain: "crwn-db-2409.firebaseapp.com",
    databaseURL: "https://crwn-db-2409.firebaseio.com",
    projectId: "crwn-db-2409",
    storageBucket: "crwn-db-2409.appspot.com",
    messagingSenderId: "601215589606",
    appId: "1:601215589606:web:f1ae78af4bb84e95ebaf27"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;