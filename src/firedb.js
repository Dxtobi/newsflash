// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore ,} from "@firebase/firestore";

//import {getAuth} from 'firebase/auth';
//import {initializeFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyByOD7XMpfxYwGstfx3_YuZE5UoJ7ly_Qg",
    authDomain: "zenithloanweb.firebaseapp.com",
    projectId: "zenithloanweb",
    storageBucket: "zenithloanweb.appspot.com",
    messagingSenderId: "88428058403",
    appId: "1:88428058403:web:37fc45d9e284bbe1549e96",
    measurementId: "G-WL2DWCNPMN"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);