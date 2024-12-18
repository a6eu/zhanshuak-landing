import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1PnBoIkv05AaDVwH_LzbnazSKGI0Ex_s",
    authDomain: "zhanshuak-6969.firebaseapp.com",
    projectId: "zhanshuak-6969",
    storageBucket: "zhanshuak-6969.firebasestorage.app",
    messagingSenderId: "203513127375",
    appId: "1:203513127375:web:2e45a3fac77ab30f2e32ba",
    measurementId: "G-N0XELXQFMT"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth, firebase};
export const db = getFirestore(app);
