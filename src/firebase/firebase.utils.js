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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
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


