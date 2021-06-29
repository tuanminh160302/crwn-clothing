import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYXjOgm1PxG-Q7w7qrky1sl2h9WqGNGIE",
    authDomain: "crwn-db-73b4c.firebaseapp.com",
    projectId: "crwn-db-73b4c",
    storageBucket: "crwn-db-73b4c.appspot.com",
    messagingSenderId: "494007650287",
    appId: "1:494007650287:web:b7281f34300f410644981a",
    measurementId: "G-R542LXD67Q"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase;


