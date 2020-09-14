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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
    

        try{
          await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
          })
        }catch(error){
            console.log('Error creating user', error.message);
          }
        } 
  return userRef;
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;