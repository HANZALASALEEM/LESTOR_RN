// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAneSzAr5LFEmBougdWRFIlIBs5jjntdeo",
	authDomain: "lester-rn.firebaseapp.com",
	projectId: "lester-rn",
	storageBucket: "lester-rn.appspot.com",
	messagingSenderId: "389710401571",
	appId: "1:389710401571:web:63d3f63f06ae0e83582196",
	measurementId: "G-CFG11JV70V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
