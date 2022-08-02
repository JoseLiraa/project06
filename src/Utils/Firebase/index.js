import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import GLOBALS from '../../../Global';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: GLOBALS.API_KEY,
    authDomain: GLOBALS.AUTH_DOMAIN,
    projectId: GLOBALS.PROJECT_ID,
    storageBucket: GLOBALS.STORAGE_BUCKET,
    messagingSenderId: GLOBALS.MESSAGING_SENDER_ID,
    appId: GLOBALS.APP_ID
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();